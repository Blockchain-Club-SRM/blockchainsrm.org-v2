import type { NextPage } from "next";
import { Layout } from "../components/shared";
import { Landing } from "../components/index";

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

export default Home;
