import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Greatest Recipe App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
