import { Layout } from "../components/Layout/layout";
import Banner from "../assets/banner.jpg";
import React from "react";
/*import "src/App.css";*/

function Home() {
  return (
    <Layout>
      <img src={Banner} className="main-bg" alt="Banner" />
    </Layout>
  );
}

export default Home;
