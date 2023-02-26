import React, { useState } from "react";
import MenuItems from "./menu-item";
import Logo from "../../public/assets/logo.svg";
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
      path: "/",
    },
  ];

  return (
    <div
      className={`fixed w-full text-white flex justify-between  p-2 items-center left-0 right-0 z-50 top-0 ${
        !active && " backdrop-blur-md md:backdrop-blur-none"
      }`}
    >
      <Link href={"/"}>
        <img src={Logo.src} alt="" className="h-16 ml-12 cursor-pointer" />
      </Link>
      <nav>
        <div className="absolute right-6 top-6 md:hidden cursor-pointer">
          <BiMenu onClick={show} size={26} className="cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-3 py-6 lg:w-[50vw] md:justify-center content-center uppercase bg-navbar-gradient backdrop-blur-md">
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
      <div className="cursor-pointer">
        <Link href="https://github.com/Blockchain-Club-SRM">
          <img
            src={more.src}
            alt=""
            className="invisible md:visible h-12 mr-12"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
