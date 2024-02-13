import { useState, useEffect } from "react";
import { NextPage } from "next";

const TimeMain: NextPage = () => {
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
  };

  useEffect(() => {
    calculateTimeUntil();
    const interval = setInterval(() => {
      calculateTimeUntil();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Time">
      <b className="absolute top-[1145px] text-[80px] left-[calc(50%_-_280px)] tracking-[9.49px] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
        {days.toString().padStart(2, "0")}
      </b>
      <b className="absolute top-[1145px] text-[80px] left-[calc(50%_-_70px)] tracking-[9.49px] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
        {hours.toString().padStart(2, "0")}
      </b>
      <b className="absolute top-[1145px] text-[80px] left-[calc(50%_-_-170px)] tracking-[9.49px] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
        {minutes.toString().padStart(2, "0")}
      </b>
      <div className="absolute top-[1240px] left-[465px] w-[98px] h-[29px] text-center text-white text-3xl font-light font-['Montserrat'] tracking-[3.90px]">
        Days
      </div>
      <div className="absolute top-[1240px] left-[680px] w-[98px] h-[29px] text-center text-white text-3xl font-light font-['Montserrat'] tracking-[3.90px]">
        Hours
      </div>
      <div className="absolute top-[1240px] left-[880px] w-[98px] h-[29px] text-center text-white text-3xl font-light font-['Montserrat'] tracking-[3.90px]">
        Minutes
      </div>
    </div>
  );
};

export default TimeMain;

