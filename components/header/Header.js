import React, { useState } from "react";
// import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { MenuOutlined } from "@material-ui/icons";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const Header = () => {
  const [active, setActive] = useState(false);

  const show = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full text-white flex justify-around  p-2 items-center">
      <div className="object-scale-down">
        <Logo />
      </div>
      <nav>
        <div className="absolute right-6 top-12 md:hidden">
          <MenuOutlined onClick={show} />
        </div>
        <ul className="hidden md:flex gap-8 p-3 content-center uppercase bg-black/50 backdrop-blur-md">
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
    </div>
  );
};

export default Header;
