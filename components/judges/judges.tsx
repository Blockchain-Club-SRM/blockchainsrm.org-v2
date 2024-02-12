import React from 'react';
import Image from "next/image"
import group1 from "../../public/judgesgroup 1.png"
import group2 from "../../public/judgesgroup 2.png"
import pfp from "../../public/ellipse-324@2x.png"
import type { NextPage } from "next";

const Judges: React.FC = () => {
  return (
    <div className='bg-[#0c0f17] bg-gradient-to-r flex flex-col from-[#0F2D291A] via-[#122730] via-[#0B0F1800] to-[#0B0F18B0] min-h-screen'>

      <span className="text-6xl self-center mt-10 mb-20  xl:text-8xl font-normal font-['Impact'] tracking-[13.13px]" style={{ background: '-webkit-linear-gradient(45deg, #FFFFFF, #00ffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: '-webkit-linear-gradient(top, #FFFFFF, #00ffff)' }}>Judges</span>

      <div className=' ml-9 md:ml-0 cards flex flex-col xl:gap-48 mb-20  xl:flex-row xl:flex-wrap xl:px-20 justify-center xl:justify-between'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='card1 flex flex-col w-full md:w-1/2 xl:w-1/3 xl:max-w-[350px] mb-10 md:mb-4 xl:mb-0 px-4 relative'>
            <div className='absolute top-0 left-0'>
              <Image alt="1" src={group1} />
            </div>
            <div className='absolute mt-8 ml-9'>
              <Image alt="2" src={group2} />
            </div>
            <div className='absolute w-44 ml-20 mt-14'>
              <Image alt='pfp' src={pfp}/>
            </div>
            <div className='flex flex-col mt-80'>
            <h1 className='text-white font-bold text-center mt-4'>FULL NAME</h1>
            <h2 className='text-white text-center mt-2'>Description</h2>
                </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Judges;
