import React from 'react';
import Image from "next/image"
import type { NextPage } from "next";

import Layer from "../../pages/layer"
import Rectangle from "../../public/assets/Judge/Rectangle 152.png"
import { useEffect, useState } from "react";


const Judges: React.FC = () => {
  return (
    <div className='bg-[#0c0f17] bg-gradient-to-r from-[#0F2D291A] via-[#122730] via-[#0B0F1800] to-[#0B0F18B0] w-[1674px] h-[1241px]'>
      <div className="text-center">
      <span className="text-[101px] font-normal font-['Impact'] tracking-[13.13px]" style={{ background: '-webkit-linear-gradient(45deg, #FFFFFF, #00ffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: '-webkit-linear-gradient(top, #FFFFFF, #00ffff)' }}>Judges</span>
      </div>

      <div className="relative">
    <Image
        className="absolute left-[1105px] w-[348px] h-[297px]"
        alt=""
        src="/mask-group.svg"
        width={348}
        height={297}
    />
    <Image
        className="absolute left-[574px] w-[348px] h-[297px]"
        alt=""
        src="/mask-group.svg"
        width={348}
        height={297}
    />
    <Image
        className="absolute left-[88px] w-[348px] h-[297px]"
        alt=""
        src="/mask-group.svg"
        width={348}
        height={297}
    />
    <Image
        className="absolute top-[575px] left-[86px] w-[348px] h-[297px]"
        alt=""
        src="/mask-group.svg"
        width={348}
        height={297}
    />
    <Image
    className="absolute top-[575px] left-[600px] w-[348px] h-[297px]"
    alt=""
    src="/mask-group.svg"
    width={348}
    height={297}
/>
<Image
    className="absolute top-[575px] left-[1100px] w-[348px] h-[297px]"
    alt=""
    src="/mask-group.svg"
    width={348}
    height={297}
/>

    
    <div className="w-[284px] h-[49px] relative">
        <div className="w-[284px] left-0 [font-family:'Impact-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[5.20px] leading-[normal]">
            FULL NAME
        </div>
    </div>

    {/* Other div components */}
    <Image
        className="absolute left-[128px] w-[273.4px] h-[226.7px]"
        alt=""
        src="/mask-group.svg"
        width={273.4}
        height={226.7}
    />
    <Image
        className="absolute left-[1140px] w-[273.4px] h-[226.7px]"
        alt=""
        src="/mask-group.svg"
        width={273.4}
        height={226.7}
    />
    <Image
        className="absolute left-[611px] w-[273.4px] h-[226.7px]"
        alt=""
        src="/mask-group.svg"
        width={273.4}
        height={226.7}
    />
    <Image
        className="absolute top-[616px] left-[636px] w-[273.4px] h-[226.7px]"
        alt=""
        src="/mask-group.svg"
        width={273.4}
        height={226.7}
    />
    <Image
        className="absolute top-[616px] left-[1138px] w-[273.4px] h-[226.7px]"
        alt=""
        src="/mask-group.svg"
        width={273.4}
        height={226.7}
    />
    <Image
        className="absolute top-[616px] left-[130px] w-[273.4px] h-[226.7px]"
        alt=""
        src="/mask-group.svg"
        width={273.4}
        height={226.7}
    />
    {/* Other Image components */}
    
    <Image
        className="absolute top-[77px] left-[1190px] w-[174px] h-[179px] object-cover"
        alt=""
        src="/ellipse-324@2x.png"
        width={174}
        height={179}
    />
    <Image
        className="absolute top-[77px] left-[181px] w-[174px] h-[179px] object-cover"
        alt=""
        src="/ellipse-324@2x.png"
        width={174}
        height={179}
    />
    <Image
        className="absolute top-[76px] left-[664px] w-[174px] h-[179px] object-cover"
        alt=""
        src="/ellipse-324@2x.png"
        width={174}
        height={179}
    />
     <Image
        className="absolute top-[643px] left-[684px] w-[174px] h-[179px] object-cover"
        alt=""
        src="/ellipse-324@2x.png"
        width={174}
        height={179}
    />
    <Image
        className="absolute top-[643px] left-[1187px] w-[174px] h-[179px] object-cover"
        alt=""
        src="/ellipse-324@2x.png"
        width={174}
        height={179}
    />
    <Image
        className="absolute top-[643px] left-[177px] w-[174px] h-[179px] object-cover"
        alt=""
        src="/ellipse-324@2x.png"
        width={174}
        height={179}
    />
    {/* Other Image components */}
</div>


    </div>
  );
};

export default Judges;
