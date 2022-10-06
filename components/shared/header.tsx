import React, { useState } from "react";
import MenuItems from "./menu-item";
import Logo from "../../public/assets/logo.svg";
import more from "../../public/assets/more_btn.png";
import Image from "next/image";
import { MenuOutlined } from "@material-ui/icons";

const Header = () => {
  const [active, setActive] = useState(false);

  const show = () => {
    setActive(!active);
  };

  return (
    <div className="absolute w-full text-white flex justify-between  p-2 items-center left-0 right-0 z-50 top-0">
      <div className="">
        <img src={Logo.src} alt="" className="h-16"/>
      </div>
      <nav>
        <div className="absolute right-6 top-12 md:hidden">
          <MenuOutlined onClick={show} />
        </div>
        <ul className="hidden md:flex gap-8 p-3 py-6 content-center uppercase bg-navbar-gradient backdrop-blur-md">
          <li>
            <a href="https://tailwindcss.com/">Home</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Our Team</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>

        <MenuItems show={show} active={active} />
      </nav>
        <a href="https://github.com/" >
          <img src={more.src} alt="" className="invisible md:visible h-14"/>
        </a>
    </div>
  );
};

export default Header;
