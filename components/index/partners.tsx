import React from "react";
import p1 from '../../public/partner1.png'
import p2 from '../../public/partner2.png'
import p3 from '../../public/partner3.png'
import p4 from '../../public/partner4.png'
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
]
const Partners = () => {

  return (
    <div className="my-20 flex justify-center flex-col gap-12 text-white md:max-w-[100%] mx-auto relative">
      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
      Our partners and sponsors for the club 
      </h6>
      <h1 className="font-bold self-center">Our Partners</h1>
      <div className="flex md:flex-row flex-col items-center justify-evenly gap-10">
        {data.map((data)=>(
            <div key={uuid()} className="" >
                   <Image width={200} height={90} className="mx-auto object-contain" src={data.img.src} alt="Sponsors" />
             </div>
        ))}
        
      </div>
    </div>
  );
};

export default Partners;
