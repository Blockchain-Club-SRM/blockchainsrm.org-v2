import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing } from "../components/index";

import  AboutUs  from "../components/index/about";

import Dummy from "../components/shared/dummy";


const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
      <AboutUs />
      <Dummy/>
    </Layout>
  );
};

export default Home;
