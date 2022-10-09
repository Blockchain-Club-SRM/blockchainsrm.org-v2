import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing } from "../components/index";
import Dummy from "../components/shared/dummy";

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
      <Dummy/>
    </Layout>
  );
};

export default Home;
