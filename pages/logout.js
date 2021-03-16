import Container from "../components/container";
import Layout from "../components/layout";
import HomeImage from "../components/home-image";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { withIronSession } from "next-iron-session";

const LogOutPage = () => {
  const router = useRouter();

  const req = new Request("/api/session-term", {method: "POST"});

  const response = fetch(req);

  if (response.ok) {
      return router.push("/");
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
              <div className="lo-message">
                <i className="fas fa-user-shield glow"></i>
                <p>You've been logged out</p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default LogOutPage
