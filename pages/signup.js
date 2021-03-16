import Container from "../components/container";
import Layout from "../components/layout";
import HomeImage from "../components/home-image";
import Head from "next/head";
import Link from "next/link";
import data from "../data";
import { useState } from "react";
import { useRouter } from "next/router";

const bcrypt = require('bcryptjs');

var dup = false;

function NewUser({ users }) {

  const router = useRouter();
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [cPassword, setUserCPassword] = useState("");
  const [fName, setUserFName] = useState("");
  const [lName, setUserLName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const passHash = bcrypt.hashSync(password, 8);
    var match = bcrypt.compareSync(cPassword, passHash);

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        dup = true;
        break;
      }
    }
    if (dup) {
      console.log("Account already exists");
    } else if (!match) {
      console.log("Passwords do not match");
    } else {
      if(!dup) {
        const body = JSON.stringify({ email, passHash, fName, lName });
        const req = new Request("/api/users/new", {
          method: "POST",
          body: body
        });

        await fetch(req)

        router.push("/login");
      }
    }
  };

  return (
      <Layout>
        <Head>
          <title>Evote Serverless</title>
        </Head>
        <Container>
          <HomeImage />
          <div className="index">
            <h1>evote-serverless<span className="version-tag">v0.0.1</span></h1>
            <div className="index-content">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-effect col-3">
                  <input className="effect-20" type="text" placeholder="First Name" value={fName} onChange={(e) => setUserFName(e.target.value)}></input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-effect col-3">
                  <input className="effect-20" type="text" placeholder="Last Name" value={lName} onChange={(e) => setUserLName(e.target.value)}></input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-effect col-3">
                  <input className="effect-20" type="text" placeholder="Email Address" value={email} onChange={(e) => setUserEmail(e.target.value)}>
                  </input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-effect col-3">
                  <input className="effect-20" type="password" placeholder="Password" value={password} onChange={(e) => setUserPassword(e.target.value)}></input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-effect col-3">
                  <input className="effect-20" type="password" placeholder="Confirm Password" value={cPassword} onChange={(e) => setUserCPassword(e.target.value)}></input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="end-login">
                  <input type="submit"></input>
                  <Link href="/login">
                    <a className="instead">Log In Instead</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
  );
}

NewUser.getInitialProps = async ({ req }) => {
  if (req) {
    // this is server side
    return {
      users: await data.readTable("Users")
    };
  } else {
    // we are client side
    const response = await fetch("/api/users");
    return { users: await response.json() };
  }
};

export default NewUser;
