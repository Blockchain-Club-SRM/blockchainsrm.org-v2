import React from "react";
import Image from "next/image";
import heroImage from "../../public/assets/NFT_Cards.png";
import more from "../../public/assets/more_btn.png";

const Landing = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-center items-center md:flex-row flex-col">
      <div className="grid place-items-center md:place-items-start">
        <p className="font-extralight mb-6 text-base">
          WELCOME TO BLOCKCHAIN CLUB SRM
        </p>
        <h1 className="font-medium lg:text-4xl text-3xl">Changing The World</h1>
        <h1 className="font-medium lg:text-4xl text-3xl">
          <span className="text-[#00D1FF]">One Block</span> At A Time
        </h1>
        <p className="font-extralight mt-6 lg:text-md text-base lg:w-[60%] md:w-[80%] w-full md:text-start text-center">
          Pioneer student-led blockchain-centered community to foster young and
          inquisitive minds, that believes in implementing concepts of Web3 and
          Decentralization
        </p>
        <div className="w-40 lg:w-1/5 md:w-1/3 mt-7 ">
          <a href="https://github.com/">
            <Image src={more} alt="Explore More" />
          </a>
        </div>
      </div>
      <div className="md:w-fit w-[70%] md:mt-0 mt-6">
        <Image src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Landing;
