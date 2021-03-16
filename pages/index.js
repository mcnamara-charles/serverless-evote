import Container from "../components/container";
import Layout from "../components/layout";
import HomeImage from "../components/home-image";
import Head from "next/head";
import { withIronSession } from "next-iron-session";

function Index({ user }) {
  return (
    <>
      <Layout user={ user }>
        <Head>
          <title>Evote Serverless</title>
        </Head>
        <Container>
          <HomeImage />
          <div className="index">
            <h1>evote-serverless<span className="version-tag">v0.0.1</span></h1>
            <div className="index-content">
              <p>Originally designed in python for the Web2Py Framework by Massimo Di Pierro, the idea was restructured for the same framework in python 3 by Charles W. McNamara. Now this software has been given a new home in serverless, the land of static generation, and repurposed to fit it's new framework. Evote-serverless is a streamlined project built to scale to handle a mid-level organization's bureaucratic processions. The software ensures election integrity by utilizing digital signatures generated from a hash. These key's are impossible to decrypt and provide each user with an unidentifiable way to ensure their ballot has not been tampered with.</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");
    console.log(user);

    if (!user) {
      return { props: {} };
    }
    return {
      props: { user }
    };
  },
  {
    cookieName: "LOGIN",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

export default Index
