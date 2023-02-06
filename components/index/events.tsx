import React from "react";
import Carousel from "./carousel";
import Image from "next/image";
import dummy from "../../public/assets/events_dummy.png";
import Modal from "./eventModal";

const Events = () => {
  const cards = [
    {
      key: 1,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
    },
    {
      key: 4,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
    },
    {
      key: 5,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
    },
    {
      key: 6,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>6</p>
        </div>
      ),
    },
  ];
  return (
    <>
    <div
      className="flex flex-col justify-center gap-12 my-36 relative"
      id="events"
    >
      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
        Explore Our New & Upcoming Events
      </h6>

      <h1 className="font-bold self-center text-white">Our Events</h1>
      <img
        src="assets/events-hand-top.png"
        alt=""
        className="absolute -right-56 scale-75 -z-10 top-[-25%]"
      />
      <Carousel cards={cards} showArrows={true} className="carousel" />

      <img
        src="assets/events-hand-bottom.png"
        alt=""
        className="absolute -left-64 scale-75 -z-10 bottom-[-75%]"
      />
    </div>
    <Modal />
    </>
  );
};

export default Events;
