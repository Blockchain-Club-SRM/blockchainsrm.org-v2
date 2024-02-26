import React from "react";
import Image from "next/image";
import group1 from "../../public/judgesgroup 1.png";
import group2 from "../../public/judgesgroup 2.png";
import type { NextPage } from "next";

const Judges: React.FC = () => {
  const judges = [ 
    {
      name: "Dr. M Lakshmi",
    pfp: "/HOD.png",
    description: "Head of Department, DSBS",
    },
    {
      name: "Dr. S. Ganesh Kumar",
    pfp: "/Ganesh.png",
    description: "Program Coordinator Blockchain, DSBS",
    },
    {
      name: "Dr. Syed Ismail A",
    pfp: "/Syed-Ismail.png",
    description: "Assistant Professor, DSBS",
    },
    {
      name: "Dr. R. Jayaraj",
    pfp: "/Jayaraj.png",
    description: "Assistant Professor, DSBS",
    },
    {
      name: "Vedant Utage",
    pfp: "/prez-removebg-preview.png",
    description: "President, Blockchain Club SRM", 
    },
    {
      name: "Pratham Bhatnagar",
    pfp: "",
    description: "Vice President, Blockchain Club SRM",
    },
  ]

  return (
    <div id="judges" className="bg-slate-950 flex flex-col min-h-screen">
      <div className="text-center w-full md:my-20 text-5xl mt-4 md:mt-0 md:py-0 md:text-7xl">
        <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
          Our Team
        </span>
      </div>

      <div className="md:ml-0 cards flex flex-col xl:gap-48 mb-20 xl:flex-row xl:flex-wrap xl:px-20 xl:justify-between">
        {judges.map((judge, index) => (
          <div
            key={index}
            className="card1 flex flex-col w-full md:w-1/2 xl:w-1/3 xl:max-w-[350px] mb-10 md:mb-4 xl:mb-0 px-4 relative"
          >
            <div className="absolute top-0 left-0">
              <Image alt="1" src={group1} />
            </div>
            <div className="absolute mt-8 ml-9">
              <Image alt="2" src={group2} />
            </div>
            <div className="absolute w-44 ml-20 mt-14">
              <img className="rounded-full w-44 h-44" alt="pfp" src={judge.pfp}  />
            </div>
            <div className="flex flex-col mt-80">
              <h1 className="text-white font-bold text-center mt-4">
                {judge.name}
              </h1>
              <h2 className="text-white text-center mt-2">
                {judge.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Judges;
