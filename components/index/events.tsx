import React from "react";
import Carousel from "./carousel";
import Modal from "./eventModal";

import dummy from "../../public/assets/events_dummy.png";
import E1 from "../../public/assets/events/E1.png";
import E3 from "../../public/assets/events/E3.png";

const Events = () => {
  const cards = [
    {
      key: 1,
      content: (
        <div className="event-card cursor-pointer group">
          <img src={`/images/inauguration.png`}  className="aspect-video h-[300px] w-[400px] shadow-lg rounded-md" alt="Events"/>
          <div className=" hidden text-center flex-col sm:gap-2 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-xl text-[#00D1FF] group-hover:mt-72">Inauguration</p>
            <p className="text-xl text-white">12 May 2022</p>
          </div>
        </div>
      ),
      img: "/images/inauguration.png",
      heading: "Inauguration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt sapien nec turpis egestas, pellentesque suscipit turpis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque commodo a erat quis consequat.  ",
      date: "12 may ",
    },
    {
      key: 2,
      content: (
        <div className="event-card cursor-pointer group ">
          <img src={`./images/decode.jpeg`} className="aspect-video h-[300px] w-[400px] shadow-lg rounded-md" alt="Events"/>
          <div className=" hidden text-center flex-col sm:gap-2 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-xl text-[#00D1FF] group-hover:mt-80">De-code</p>
            <p className="text-xl text-white">23 Sept 2022</p>
          </div>
        </div>
      ),
      img: "/images/decode.jpeg",
      heading: "De-Code",
      desc: "De-Code was organised by Blockchain Club SRM to help students comprehend the relationship between blockchain and emerging technologies. More than 250 students attended the event on September 23, 2022, from 2:00 to 5:00 p.m. in the G N Ramachandran Hall of the Biotechnology Building. Mr. Krishna, Blockchain Architect at Roni Analytics, and Mr. Chandrashekhar, Product Manager at Lumos Lab, were the keynote speakers. Sponsors of the event were Octaloop, Lumos Lab, and Roni Analytics.",
      date: "23 sept",
    },
    {
      key: 4,
      content: (
        <div className="event-card cursor-pointer group ">
          <img src={`/images/convulent.jpg`} className="aspect-video h-[300px] w-[400px] shadow-lg rounded-md" alt="Events"/>
          <div className="hidden text-center flex-col sm:gap-2 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-xl text-[#00D1FF] group-hover:mt-96">Convulent</p>
            <p className="text-xl text-white">28 Feb 2023</p>
          </div>
        </div>
      ),
      img: "/images/convulent.jpg",
      heading: "Convulent",
      desc: "The event proved to be a success and a meaningful discussion with many famous industrial people as speakers. They covered topics like Introduction to Web3, Distributed Databases, Relayers and Smart Contracts, Router protocol, Cross-chain communication, Bitcoin SV, Rust tutorial on Smart Contract Deployment, ESG Scores and Sustainable Development through 5ire, Solidity and Advanced Defi, App Dev in Web3 and Zero-knowledge Proof. Each session ended with a great discussion along with a Q/A session.",
      date: "28 Feb 2023",
    },
    {
      key: 3,
      content: (
        <div className="event-card cursor-pointer group ">
          <img src={`/images/byzantine.jpeg`} className="aspect-video h-[300px] w-[400px] shadow-lg rounded-md" alt="Events"/>
          <div className="hidden text-center flex-col sm:gap-2 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-xl text-[#00D1FF] group-hover:mt-96">Byzantine</p>
            <p className="text-xl text-white">13 June 2022</p>
          </div>
        </div>
      ),
      img: "/images/byzantine.png",
      heading: "Byzantine",
      desc: "Mr. Aishwary Gupta, who dispelled misunderstandings and offered insights into the world of Blockchain, including Crypto and Web3, was the speaker during an interactive session on Blockchain and its applications, organised by the Blockchain Club SRM.",
      date: "13 june",
    },
    
  ];
  return (
    <>
      <div
        className="relative"
        id="events"
      >
        <div className="flex flex-col justify-center gap-12 my-36 relative">
          <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
            Explore Our New & Upcoming Events
          </h6>

          <h1 className="font-bold self-center text-white">Our Events</h1>

          <Carousel cards={cards} showArrows={true} className="carousel" />

          <img
            src="assets/event-top-hand.png"
            alt=""
            className="absolute left-0 transform -translate-x-1/2 -translate-y-1/2 scale-75 -z-10 top-1/2"
          />

          <img
            src="assets/event-bottom-hand.png"
            alt=""
            className="absolute right-0 transform translate-x-1/2 translate-y-1/2 scale-50 -z-10 bottom-0"
          />
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Events;
