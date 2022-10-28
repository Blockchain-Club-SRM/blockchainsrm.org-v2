import React from "react";
import Carousel from "./carousel";
import Image from "next/image";
import dummy from "../../public/assets/events_dummy.png";

const Events = () => {
  const cards = [
    {
      key: 1,
      content: (
        <div className="h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>hello 1</p>
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className="h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>2</p>
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className="h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>3</p>
        </div>
      ),
    },
    {
      key: 4,
      content: (
        <div className="h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>4</p>
        </div>
      ),
    },
    {
      key: 5,
      content: (
        <div className="h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>5</p>
        </div>
      ),
    },
    {
      key: 6,
      content: (
        <div className="h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
          <p>6</p>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center gap-12 mb-36">
      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
        Explore Our New & Upcoming Events
      </h6>

      <h1 className="font-bold self-center text-white">Our Events</h1>
      <Carousel
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
};

export default Events;
