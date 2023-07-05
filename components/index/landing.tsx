import React from "react";
import Image from "next/image";
import heroImage from "../../public/assets/NFT_Cards.png";
import more from "../../public/assets/more_btn.png";

const Landing = () => {
  return (
<div className="text-white px-4 pb-0 md:pb-2 flex justify-center items-center md:flex-row flex-col min-h-[100vh] mt-0 md:mt-[-10px] mb-0 md:mb-[-10px]">
      <div className="grid place-items-center md:place-items-start mt-2 md:mt-0">
        <p className="font-extralight mb-1 md:mb-2 text-md">
          WELCOME TO BLOCKCHAIN CLUB SRM
        </p>
        <h1 className="font-medium lg:text-3xl text-2xl">Changing The World</h1>
        <h1 className="font-medium lg:text-3xl text-2xl">
          <span className="text-[#00D1FF]">One Block</span> At A Time
        </h1>
        <p className="font-extralight mt-1 md:mt-2 lg:text-sm text-base lg:w-[60%] md:w-[80%] w-full md:text-start text-center">
          Pioneer student-led blockchain-centered community to foster young and
          inquisitive minds, that believes in implementing concepts of Web3 and
          Decentralization
        </p>
      </div>
      <div className="md:w-fit w-[70%] md:mt-0 mt-1">
        <Image src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Landing;
