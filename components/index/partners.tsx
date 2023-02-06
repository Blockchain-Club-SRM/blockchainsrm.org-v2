import React from "react";
import p1 from '../../public/partner1.png'
import p2 from '../../public/partner2.png'
import p3 from '../../public/partner3.png'
import p4 from '../../public/partner4.png'
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
    <div className="my-14 flex justify-center flex-col gap-12 text-white md:max-w-[100%] mx-auto relative">
      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
      Our partners and sponsors for the club 
      </h6>

      <h1 className="font-bold self-center">Our Partners</h1>
      <div className="md:flex ">
        {data.map((data)=>(
            <div className="mx-12 md:my-12 " >
                   <img  className="mx-auto" src={data.img.src} alt="img" />
             </div>
        ))}
        
      </div>
    </div>
  );
};

export default Partners;
