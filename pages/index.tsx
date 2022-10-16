import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing } from "../components/index";

import  AboutUs  from "../components/index/about"

import Industry from "../components/index/Industry";
const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
      <AboutUs />
      <Industry/>
    </Layout>
  );
};

export default Home;
