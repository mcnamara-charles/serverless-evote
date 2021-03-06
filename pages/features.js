import Container from "../components/container";
import Layout from "../components/layout";
import HomeImage from "../components/home-image";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { withIronSession } from "next-iron-session";

function Features({ user }) {
    return (
      <>
        <Layout user={user}>
          <Head>
            <title>Evote Serverless Features</title>
          </Head>
          <Container>
            <HomeImage />
            <div className="index">
              <h1>evote-serverless<span className="version-tag"> Features</span></h1>
              <div className="index-content">
                <Link href="/assets/docs/evote_user_manual.pdf">
                  <a
                    className="btn noeffect"
                    id="manual"
                  >
                  <i className="fas fa-download"></i>
                  Download User Manual
                  </a>
                </Link>
                <ul className="feature-list">
                  <li>The system is open source and anybody can check the source code. The code is small and written in the Python language. This makes it easy for professionals in the field to check it.</li>
                  <li>The system can run as a service and one installation can run mutiple elections. Anybody can login into the system, create a new election, register voters and managers, and customize the ballot using an easy to use WYSIWYG interface.</li>
                  <li>The system communicates with voters and managers by email.</li>
                  <li>Voters do not need to login into the system to vote. They only need to click on the link in the notification email, fill a web form and submit.</li>
                  <li>Each voter can only vote once per election.</li>
                  <li>Results are computed automatically at closing of the election and published.</li>
                  <li>Voting is completely anonymous. Even a hacker with a complete database dump of the system would not be able to link voters to ballots.</li>
                  <li>Each voter can check at any time that his vote has been properly recorded and not altered.</li>
                  <li>Each voter can independently and at any time perform an election recount.</li>
                  <li>Upon voting, each voter receives an email receipt containing a copy of their filled and anonymized ballot.</li>
                  <li>Managers are notified by email when a new vote is cast and receive a copy of the anonymized ballot.</li>
                  <li>All ballots, anonymized and digitally signed, are published, along with instructions to verify the digital signature.</li>
                </ul>
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

export default Features;
