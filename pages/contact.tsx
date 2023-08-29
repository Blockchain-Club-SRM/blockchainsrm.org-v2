import { Layout } from "../components/shared";

const contact = () => {
  return (
    <Layout className=" w-full">
      <div className=" h-screen flex justify-center mb-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUKkAjm1fN78H2YeFMZ6dHDtc-trZi5AkChFM1HlN9ExABag/viewform?embedded=true"
          width="640"
          height="959"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ overflow: "hidden" }}
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  );
};

export default contact;
