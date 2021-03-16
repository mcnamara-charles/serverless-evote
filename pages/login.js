import Container from "../components/container";
import Layout from "../components/layout";
import HomeImage from "../components/home-image";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import { useRouter } from "next/router";

const handleSubmit = async(e) => {
  e.preventDefault();

  const email = emailInput.current.value;
  const password = passwordInput.current.value;

}

const LoginPage = () => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const req = new Request("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    console.log("Sending Login Request")
    const response = await fetch(req);

    if (response.ok) {
      return router.push("/");
    }
  }


  return (
    <>
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
                  <input className="effect-20" type="text" placeholder="Email Address" ref={emailInput}></input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="input-effect col-3">
                  <input className="effect-20" type="password" placeholder="Password" ref={passwordInput}></input>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="end-login">
                  <input type="submit"></input>
                  <Link href="/signup">
                    <a className="instead">Sign Up</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default LoginPage
