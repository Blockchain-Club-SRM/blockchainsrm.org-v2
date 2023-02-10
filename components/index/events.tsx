import React from "react";
import Carousel from "./carousel";
import Image from "next/image";
import dummy from "../../public/assets/events_dummy.png";
import Modal from "./eventModal";
import blogo from '../../public/images/blogo.jpeg'
const Events = () => {
  const cards = [
    {
      key: 1,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
      img: '/images/inauguration.png',
      heading : "Inauguration",
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien nec turpis egestas, pellentesque suscipit turpis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo a erat quis consequat.  ",
      date : "12 may "

    },
    {
      key: 2,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
      img : '/images/decode.png',
      heading : "De-Code",
      desc : "De-Code was organised by Blockchain Club SRM to help students comprehend the relationship between blockchain and emerging technologies. More than 250 students attended the event on September 23, 2022, from 2:00 to 5:00 p.m. in the G N Ramachandran Hall of the Biotechnology Building. Mr. Krishna, Blockchain Architect at Roni Analytics, and Mr. Chandrashekhar, Product Manager at Lumos Lab, were the keynote speakers. Sponsors of the event were Octaloop, Lumos Lab, and Roni Analytics.",
      date : "23 sept"
      
    },
    {
      key: 3,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
      img : "/images/byzantine.png",
      heading : "Byzantine",
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien nec turpis egestas, pellentesque suscipit turpis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo a erat quis consequat.  ",
      date : "13 june"

    },
    {
      key: 4,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
      heading : "DS Hack",
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien nec turpis egestas, pellentesque suscipit turpis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo a erat quis consequat.  ",
      date : "1-4 sept"
    },
    {
      key: 4,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
      heading : "DS Hack",
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien nec turpis egestas, pellentesque suscipit turpis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo a erat quis consequat.  ",
      date : "1-4 sept"
    },
    {
      key: 4,
      content: (
        <div className="max-h-[70%] w-[70%]">
          <Image src={dummy} alt="Events" />
        </div>
      ),
      heading : "DS Hack",
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien nec turpis egestas, pellentesque suscipit turpis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo a erat quis consequat.  ",
      date : "1-4 sept"
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
      <Carousel cards={cards} showArrows={true} className="carousel"  />

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
