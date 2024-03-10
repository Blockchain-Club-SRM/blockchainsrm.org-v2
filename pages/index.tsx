import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing, Events } from "../components/index";
import Dummy from "../components/shared/dummy";
import AboutUs from "../components/index/about";
import Incubated from "../components/index/incubated";
import Industry from "../components/index/industry";
import Partners from "../components/index/partners";
import Head from "next/head";

import {Newsletter} from "../components/index/newsletter";

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
        {/* <Industry /> */}
        <Incubated/>
        <Partners/>
        {/* <Newsletter /> */}
      </Layout>
    </>
  );
};

export default Home;
