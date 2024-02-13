import React, { useState, useEffect } from "react";
import Image from "next/image";
import LayerHeader from "../components/shared/layerheader";
import Footer from "../components/layer/footer";
import About from "../components/layer/about";
import ninenine from "../public/99.png";
import text from "../public/layertext.png";
import ship from "../public/ship.png";
import Link from "next/link";
import { RiseLoader } from "react-spinners";
import Judges from "../components/judges/judges";
import Prizes from "../components/layer/prizes";
import Partners from "../components/layer/partners";
import Tracks from "../components/layer/tracks";
import Faq from "../components/layer/faq";

export default function Layer() {
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const calculateTimeUntil = () => {
    const targetDate = new Date("2024-03-12");
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    // console.log(remainingDays, remainingHours, remainingMinutes);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    calculateTimeUntil();
    const timerInterval = setInterval(() => {
      calculateTimeUntil();
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div
          className={`h-screen bg-dark-purple flex justify-center items-center transition-all duration-200 ease-out ${
            loading ? "opacity-100" : "opacity-0"
          }`}
        >
          <RiseLoader color="#00D1FF" />
        </div>
      ) : (
        <>
          <div className="min-h-screen bg-cover bg-[url(/layerbg.png)]">
            <LayerHeader />
            <div className="main flex flex-col">
              <Image
                alt="layer"
                loading="eager"
                src={text}
                className="self-center mt-16 xl:w-auto w-80"
              />
              <Image
                loading="eager"
                alt="ship"
                src={ship}
                className=" xl:block absolute  top-[22rem] -left-3 w-[82rem] hidden"
              />
              <div className="mt-[40rem] pr-9 md:pr-9 xl:mr-0 xl:w-auto w-96 flex justify-center space-x-10">
                <div className="days flex flex-col items-center space-y-2">
                  <div className="md:text-center text-start text-2xl mt-4 md:mt-0 md:py-0 md:text-5xl">
                    <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
                      {days}
                    </span>
                  </div>
                  <p className="text-white">Days</p>
                </div>
                <div className="hours flex flex-col items-center space-y-2">
                  <div className="md:text-center text-start text-2xl mt-4 md:mt-0 md:py-0 md:text-5xl">
                    <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
                      {hours}
                    </span>
                  </div>
                  <p className="text-white">Hours</p>
                </div>
                <div className="mins flex flex-col items-center space-y-2">
                  <div className="md:text-center text-start text-2xl mt-4 md:mt-0 md:py-0 md:text-5xl">
                    <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
                      {minutes}
                    </span>
                  </div>
                  <p className="text-white">Minutes</p>
                </div>{" "}
              </div>
              <div className="buttons flex flex-col md:flex-row mt-16 self-center gap-14 mb-72 ">
                <Link href="https://layer-2.devfolio.co/">
                  {" "}
                  <h1 className="bg-[#849fa2] hover:scale-110 transition-transform h-16 backdrop-blur-sm w-72 text-center p-4 rounded-full bg-opacity-50 tracking-[3.38px] border-2 border-[#d2cccc] font-Montserrat text-white text-lg ">
                    Devfolio
                  </h1>{" "}
                </Link>
                <Link href="https://layer-2.devfolio.co/">
                  {" "}
                  <h1 className="bg-black h-16 hover:scale-110 transition-transform backdrop-blur-sm w-72 text-center p-4 rounded-full bg-opacity-30 tracking-[3.38px] border-2 border-[#d2cccc] font-Montserrat text-white text-lg ">
                    Learn More
                  </h1>{" "}
                </Link>
              </div>
            </div>
          </div>
          <About />
          <Tracks />
          <Prizes />
          <div className="test">
            <Partners />
          </div>
          <Judges />
          <Faq />
          <Footer />
        </>
      )}
    </div>
  );
}
