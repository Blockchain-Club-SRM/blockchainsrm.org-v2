import type { NextPage } from "next";
import { Layout } from "../components/shared";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
