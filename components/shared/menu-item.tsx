import React from "react";
import Link from "next/link";

const MenuItems = ({ show, active, menu }: any) => {
  return (
    <div>
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase gap-8 bg-black/50 backdrop-blur-md justify-center md:hidden "
            : "hidden"
        }
      >
        <div
          onClick={show}
          className="cursor-pointer font-semibold hover:text-primary-pink"
        >
          x
        </div>
        {menu.map((item: any, index: any) => {
          return (
            <li key={index} className="hover:text-primary-pink">
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItems;
