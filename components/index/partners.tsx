import React from "react";
import p1 from '../../public/partner1.png'
import p2 from '../../public/partner2.png'
import p3 from '../../public/partner3.png'
import p4 from '../../public/partner4.png'
import p5 from '../../public/partner5.png'
import p6 from '../../public/partner6.png'
import p7 from '../../public/partner7.png'
import p8 from '../../public/partner8.png'
import p9 from '../../public/partner9.png'
import p10 from '../../public/partner10.png'
import p12 from '../../public/wstf-logo.svg'
import p13 from '../../public/partner13.png'
import { uuid } from 'uuidv4';
import Image from "next/image";

const data = [
   {
      id : 1,
      img : p1
   },
   {
      id : 2,
      img : p2
   },
   {
      id : 3,
      img : p3
   },
   {
      id : 4,
      img : p4
   },
   {
      id:5,
      img: p5
   },
   {
      id:6,
      img:p6
   },
   {
      id:7,
      img:p7
   },
   {
      id:8,
      img:p8
   },
   {
      id:10,
      img:p10
   },
   {
      id:9,
      img:p9
   },
   {
      id:12,
      img:p12
   },
   {
      id:13,
      img:p13
   }
]
const Partners = () => {

  return (
    <div className="my-20 mb-[10vh] flex justify-center flex-col gap-12 text-white md:max-w-[100%] mx-auto relative">
      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
      Our partners and sponsors for the club 
      </h6>
      <h1 className="font-bold self-center">Our Partners</h1>
      <div className="flex md:flex-row  flex-wrap flex-col items-center justify-evenly gap-10">
        {data.map((data)=>(
            <div key={uuid()} className="" >
                   <Image width={200} height={110} className={`mx-auto cursor-pointer object-contain`} src={data.img.src} alt="Sponsors"/>
             </div>
        ))}
        
      </div>
    </div>
  );
};

export default Partners;
