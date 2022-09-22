import React from "react";
import Close from "@material-ui/icons/Close";

const MenuItems = ({ show, active }) => {
  return (
    <div>
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase gap-8 bg-black/50 backdrop-blur-md justify-center md:hidden "
            : "hidden"
        }
      >
        <Close onClick={show} />
        <li>
          <a href="/">Home</a>
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
    </div>
  );
};

export default MenuItems;
