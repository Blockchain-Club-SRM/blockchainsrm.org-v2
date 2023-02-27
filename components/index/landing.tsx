import React from "react";
import Image from "next/image";
import heroImage from "../../public/assets/NFT_Cards.png";
import more from "../../public/assets/more_btn.png";

const Landing = () => {
  return (
    <div className=" text-white px-4 pb-4 flex justify-center items-center md:flex-row flex-col min-h-[100vh]">
      <div className="grid place-items-center md:place-items-start">
        <p className="font-extralight mb-6 text-md">
          WELCOME TO BLOCKCHAIN CLUB SRM
        </p>
        <h1 className="font-medium lg:text-5xl text-3xl ">Changing The World</h1>
        <h1 className="font-medium lg:text-5xl text-3xl ">
          <span className="text-[#00D1FF]">One Block</span> At A Time
        </h1>
        <p className="font-extralight mt-6 lg:text-md text-xl lg:w-[60%] md:w-[80%] w-full md:text-start text-center">
          Pioneer student-led blockchain-centered community to foster young and
          inquisitive minds, that believes in implementing concepts of Web3 and
          Decentralization
        </p>
      </div>
      <div className="md:w-fit w-[70%] md:mt-0 mt-6">
        <Image src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Landing;
