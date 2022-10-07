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
      path: "/",
    },
    {
      name: "About us",
      path: "/",
    },
    {
      name: "Our Team",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/",
    },
  ];

  return (
    <div className="absolute w-full text-white flex justify-between  p-2 items-center left-0 right-0 z-50 top-0">
      <img src={Logo.src} alt="" className="h-16" />
      <nav>
        <div className="absolute right-6 top-12 md:hidden">
          <BiMenu onClick={show} size={26} className="cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-3 py-6 content-center uppercase bg-navbar-gradient backdrop-blur-md">
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        <MenuItems show={show} active={active} menu={menu} />
      </nav>
      <Link href="https://github.com/">
        <img src={more.src} alt="" className="invisible md:visible h-14" />
      </Link>
    </div>
  );
};

export default Header;
