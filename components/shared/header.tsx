import React, { useState } from "react";
import MenuItems from "./menu-item";
import Logo from "../../public/assets/logo.svg";
import Srm from "../../public/assets/srm.png";
import more from "../../public/assets/more_btn.png";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState(false);

  const show = () => {
    setActive(!active);
  };

  const menu = [
    {
      name: (
        <button className="relative inline-flex items-center justify-center mb-0 p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            LAYER 2.0
          </span>
        </button>
      ),
      path: "/layer",
    },
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Events",
      path: "/#events",
    },
    {
      name: "About us",
      path: "/#about-us",
    },
    {
      name: "Our Team",
      path: "/team",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div
      className={`w-full text-white flex justify-between p-2 items-center left-0 right-0 z-50 top-0 ${!active && "backdrop-blur-md md:backdrop-blur-none"
      }`}
    >
      <div className="flex items-center space-x-3">
        <img src={Srm.src} alt="" className="h-16 cursor-pointer" />
        <Link href={"/"}>
          <img src={Logo.src} alt="" className="h-16 cursor-pointer" />
        </Link>
      </div>
      <nav>
        <div className="absolute right-6 top-6 md:hidden cursor-pointer">
          <BiMenu onClick={show} size={26} className="cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-5 py-7 lg:w-[60vw] md:justify-center content-center uppercase backdrop-blur-md" style={{ display: 'flex', alignItems: 'center' }}>
          {menu.map((item, index) => {
            return (
              <li
                className="cursor-pointer hover:text-primary-pink"
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
  );
};

export default Header;
