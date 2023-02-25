import type { NextPage } from "next";
import { Layout } from "../components/shared";
import Contact from "../components/contact";
import Head from "next/head";

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blockchain Club SRM | Contact Us</title>
      </Head> 
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactUs;
