import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing, Events } from "../components/index";
import Dummy from "../components/shared/dummy";
import AboutUs from "../components/index/about";

import Industry from "../components/index/Industry";

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
      <AboutUs />
      {/* <Dummy /> */}
      <Events />
      <Industry />
    </Layout>
  );
};

export default Home;
