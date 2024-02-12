import type { NextPage } from "next";

const Prizes: NextPage = () => {
  return (
    <div className="relative w-full h-96 lg:h-screen overflow-hidden text-center text-white font-khula" style={{ backgroundColor: "rgba(11,15,24)" }}>
      <img
        className="absolute mt-[25%] ml-[32%] w-[35%] h-[35%] lg:mt-[20%] lg:ml-[30%] lg:w-[40%] lg:h-[40%]"
        alt=""
        src="./Groupdiver1.svg"
      />
      <img
        className="absolute mt-[35%] ml-[0%] w-[30%] h-[30%] lg:mt-[25%] lg:ml-[0%] lg:w-[35%] lg:h-[35%]"
        alt=""
        src="./Groupdiver2.svg"
      />
      <img
        className="absolute mt-[30%] ml-[63%] w-[40%] h-[40%] lg:mt-[23%] lg:ml-[60%] lg:w-[45%] lg:h-[45%]"
        alt=""
        src="./Groupdiver3.svg"
      />
      <img
        className="absolute mt-[15%] ml-[0%] w-[20%] h-[20%] lg:mt-[10%] lg:ml-[0%] lg:w-[15%] lg:h-[15%]"
        alt=""
        src="./Groupfish.svg"
      />
      <img
        className="absolute mt-[30%] ml-[25%] w-[5%] h-[5%] lg:mt-[20%] lg:ml-[25%] lg:w-[5%] lg:h-[5%]"
        alt=""
        src="./Groupfish1.svg"
      />
      <img
        className="absolute mt-[30%] ml-[70%] w-[5%] h-[5%] lg:mt-[20%] lg:ml-[70%] lg:w-[5%] lg:h-[5%]"
        alt=""
        src="./Groupfish2.svg"
      />
      <img
        className="absolute mt-[15%] ml-[75%] w-[20%] h-[20%] lg:mt-[10%] lg:ml-[80%] lg:w-[15%] lg:h-[15%]"
        alt=""
        src="./Groupjelly.svg"
      />
      <div className="flex justify-center">
        <div className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-normal font-['Impact'] tracking-[4px] lg:tracking-[13.13px]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 104, 113, 1))', WebkitBackgroundClip: 'text', color: 'transparent' }}>Prizes</div>
      </div>
      <div className="absolute mt-[48%] ml-[40%] lg:mt-[35%] lg:ml-[47%] w-[104px] h-[83px] text-center font-wendy"><span className="text-amber-300 text-4xl lg:text-7xl font-normal font-wendy">1</span><span className="text-amber-300 align-top text-2xl lg:text-7xl font-normal font-wendy">st</span></div>
      <div className="absolute w-[104px] h-[83px] mt-[35%] ml-[20%] lg:ml-[25%] lg:mt-[30%] text-center font-wendy"><span className="text-sky-200 text-4xl lg:text-7xl font-normal font-wendy">2</span><span className="text-sky-200 align-top text-2xl lg:text-7xl font-normal font-wendy">nd</span></div>
      <div className="absolute w-[104px] h-[83px] mt-[35%] ml-[57%] lg:ml-[70%] lg:mt-[30%] text-center font-wendy"><span className="text-orange-300 text-4xl lg:text-7xl font-normal font-wendy">3</span><span className="text-orange-300 align-top text-2xl lg:text-7xl font-normal font-wendy">rd</span></div>
      <div className="absolute mt-[55%] ml-[20%] lg:mt-[40%] lg:ml-[20%] transform -translate-x-1/2">
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-teal-300 font-['Quantico']">$5000</div>
      </div>
      <div className="absolute mt-[60%] ml-[52%] lg:mt-[45%] lg:ml-[51%] transform -translate-x-1/2">
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-teal-300 font-['Quantico'] tracking-widest">$5000</div>
      </div>
      <div className="absolute mt-[55%] ml-[80%] lg:mt-[40%] lg:ml-[80%] transform -translate-x-1/2">
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-teal-300 font-['Quantico']">$5000</div>
      </div>
    </div>
  );
};

export default Prizes;
