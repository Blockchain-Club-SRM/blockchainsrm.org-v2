import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing } from "../components/index";
import  AboutUs  from "../components/index/about";

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
      <AboutUs />
    </Layout>
  );
};

export default Home;
