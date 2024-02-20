import React, { useState } from "react";
import MenuItems from "./menu-item";
import Logo from "../../public/assets/logo.svg";
import Srm from "../../public/assets/srm.png";
import more from "../../public/assets/more_btn.png";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

const LayerHeader = () => {
  const [active, setActive] = useState(false);

  const show = () => {
    setActive(!active);
  };

  const menu = [
    {
      name: "About",
      path: "#layer-about",
    },
    {
      name: "Tracks",
      path: "#layer-tracks",
    },
    {
      name: "Timeline",
      path: "#timeline",
    },
    {
      name: "Prizes",
      path: "#prizes",
    },
    {
      name: "Partners",
      path: "#partners",
    },
    {
      name: "Judges",
      path: "#judges",
    },
      {
        name: "FAQs",
        path: "#faqs",
      },
  ];

  return (
    <div className="navbar relative top-0 left-0 right-0 z-50 bg-transparent">
    <div
      className={` w-full text-white flex justify-between p-2 items-center left-0 right-0 z-50 top-0 ${
        !active && " bg-opacity-100 md:backdrop-blur-none"
      }`}
    >
      <div className="flex items-center space-x-3 2xl:px-32 2xl:py-5">
       
        <Link href={"/"}>
          {/* <img src= {Srm.src} alt="" /> */}
          <img src={Logo.src} alt="" className="h-16 cursor-pointer" />
        </Link>
      </div>
      <nav>
        <div className=" absolute right-6 top-6 md:hidden cursor-pointer">
          <BiMenu onClick={show} size={26} className="cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-2 xl:gap-8 p-3 py-6 lg:w-[50vw] md:justify-center content-center uppercase bg-opacity-100">
          {menu.map((item, index) => {
            return (
              <li
                className="cursor-pointer font-Montserrat font-extralight hover:text-primary-pink "
                key={index}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <MenuItems show={show} active={active} menu={menu} />
      </nav>
    </div>
    </div>
  );
};

export default LayerHeader;
