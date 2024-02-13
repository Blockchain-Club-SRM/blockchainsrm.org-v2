import { useState, useEffect } from "react";
import type { NextPage } from "next";

const Prizes: NextPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="prizes">
      {isMobile ? (
        <div className="flex-col flex bg-slate-950">
          <div className="text-center w-full md:mb-14 text-5xl md:mt-0 md:py-0 md:text-7xl">
            <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
              Prizes
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./Groupdiver1.svg" className="p-10" />
            <div className="w-[104px] h-[83px] text-center">
              <span className="text-amber-300 text-6xl font-normal font-wendy">
                1
              </span>
              <span className="text-amber-300 text-4xl font-normal font-wendy align-top">
                st
              </span>
            </div>
            <div className="w-[168px] h-[53px] text-center text-teal-300 text-[38px] font-bold font-['Quantico'] tracking-widest">
              $5000
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./Groupdiver2.svg" className="p-10" />
            <div className="w-[104px] h-[83px] text-center">
              <span className="text-sky-200 text-6xl font-normal font-wendy">
                2
              </span>
              <span className="text-sky-200 text-4xl font-normal font-wendy align-top">
                nd
              </span>
            </div>
            <div className="w-[168px] h-[53px] text-center text-teal-300 text-[38px] font-bold font-['Quantico'] tracking-widest">
              $5000
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./Groupdiver3.svg" className="p-10" />
            <div className="w-[104px] h-[83px] text-center">
              <span className="text-orange-300 text-6xl font-normal font-wendy">
                3
              </span>
              <span className="text-orange-300 text-4xl font-normal font-wendy align-top">
                rd
              </span>
            </div>
            <div className="w-[168px] h-[53px] text-center text-teal-300 text-[38px] font-bold font-['Quantico'] tracking-widest">
              $5000
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-slate-950">
          <div className="text-center w-full md:mb-14 text-5xl mt-4 md:mt-0 md:py-0 md:text-7xl">
            <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
              Prizes
            </span>
          </div>
          <div className="flex justify-center gap-40 items-center flex-end p-10">
            <div className="flex flex-col justify-center items-center">
              <img
                src="./Groupdiver2.svg"
                className="p-5 md:p-10 max-w-[200px] md:max-w-none"
              />
              <div className="text-center">
                <span className="text-sky-200 text-6xl font-normal font-wendy">
                  2
                </span>
                <span className="text-sky-200 text-4xl font-normal font-wendy align-top">
                  nd
                </span>
              </div>
              <div className="text-center text-teal-300 text-3xl font-bold font-['Quantico'] tracking-widest">
                $5000
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="./Groupdiver1.svg"
                className="p-5 md:p-10 max-w-[200px] md:max-w-none"
              />
              <div className="text-center">
                <span className="text-amber-300 text-6xl font-normal font-wendy">
                  1
                </span>
                <span className="text-amber-300 text-4xl font-normal font-wendy align-top">
                  st
                </span>
              </div>
              <div className="text-center text-teal-300 text-3xl font-bold font-['Quantico'] tracking-widest">
                $5000
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="./Groupdiver3.svg"
                className="p-5 md:p-10 max-w-[200px] md:max-w-none"
              />
              <div className="text-center ">
                <span className="text-orange-300 text-6xl font-normal font-wendy">
                  3
                </span>
                <span className="text-orange-300 text-4xl font-normal font-wendy align-top">
                  rd
                </span>
              </div>
              <div className="text-center text-teal-300 text-3xl font-bold font-['Quantico'] tracking-widest">
                $5000
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prizes;
