import React from "react";

const About = () => {
  return (
    <div className="bg-slate-950 h-[35vh] md:block flex flex-col justify-start items-center md:h-full">
      <div className="content flex items-start flex-col space-y-5 md:space-y-10 md:spac md:items-center md:relative md:top-80 md:right-80">
        <div className="text-center w-full text-5xl mt-4 md:mt-0 md:py-0 md:text-7xl">
          <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
            About Us
          </span>
        </div>
        <div className="text-white text-justify md:text-center px-10 text-lg md:text-3xl w-full md:w-[40%]">
          Layer is a hackfest event organized by Blockchain Club SRM, aiming to
          connect keen enthusiasts and upcoming developers to leading industry
          professionals in the blockchain and web3 ecosystem.
        </div>
      </div>
      <img src="/aboutAsset.svg" className="md:w-full md:block hidden" alt="" />
    </div>
  );
};

export default About;
