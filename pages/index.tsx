import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing, Events } from "../components/index";
import Dummy from "../components/shared/dummy";
import AboutUs from "../components/index/about";

import Industry from "../components/index/industry";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blockchain Club SRM | Home</title>
      </Head>
      <Layout>
        <Landing />
        <AboutUs />
        {/* <Dummy /> */}
        <Events />
        <Industry />
      </Layout>
    </>
  );
};

export default Home;
