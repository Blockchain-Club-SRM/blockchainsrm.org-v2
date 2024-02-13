import type { NextPage } from "next";
import Image from "next/image";
import smallest from '../../public/images/layers_timeLine/smallestStone.png';
import middle from '../../public/images/layers_timeLine/MiddleStone.png';
import secondSmall from '../../public/images/layers_timeLine/2ndSmallestStone.png';
import biggest from '../../public/images/layers_timeLine/BiggestStone.png';
import whole from '../../public/images/layers_timeLine/whole.png';
import bed from '../../public/images/layers_timeLine/oceanbed.png';
import submarine from '../../public/images/layers_timeLine/submarine.png';
import shark from '../../public/images/layers_timeLine/shark.png';
import bubbles from '../../public/images/layers_timeLine/bubbles.png';
import smallBubbles from '../../public/images/layers_timeLine/bubbles2.png';

const TimeLine: NextPage = () => {
  return (
    <div className="absolute bg-[rgb(11,15,24)] ml-[-17px] mt-[2480px] w-screen min-h-screen">
      <div className="absolute custom-text left-[390px]">
        <p className="text-8xl">Timeline</p>
      </div>
      <Image src={whole} className="absolute w-screen top-[20px]"></Image>
      <Image src={bed} className="absolute w-screen top-[-62px] z-10"></Image>
      <Image src={submarine} className="absolute w-[150px] top-[380px] left-[45px]"></Image>
      <Image src={shark} className="absolute w-[120px] top-[-120px]"></Image>
      <div className="absolute text-white w-[60px] left-[145px] top-[70px]">
        <p className="font-Montserrat">11th Apr Registration</p>
      </div>
      <div className="absolute text-white w-[60px] left-[405px] top-[155px]">
        <p className="font-Montserrat">11th Apr Registration</p>
      </div>
      <div className="absolute text-white w-[60px] left-[675px] top-[235px]">
        <p className="font-Montserrat">11th Apr Registration</p>
      </div>
      <div className="absolute text-white w-[60px] left-[1010px] top-[310px]">
        <p className="font-Montserrat">11th Apr Registration</p>
      </div>
      <Image src={bubbles} className="absolute top-[-23px]"></Image>
      <Image src={smallBubbles} className="absolute top-[23px] left-[1225px]"></Image>
    </div>
  );
};

export default TimeLine;
