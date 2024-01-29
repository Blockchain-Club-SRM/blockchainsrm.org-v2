import React from "react";
import Logo from "../../public/assets/logo.svg";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
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
      path: "/team",
    },
  ];

  const supportMenu = [
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Mail",
      path: "mailto:blockchainclubsrm@gmail.com",
    },
  ];

  const socialMenu = [
    {
      key: "Instagram",
      path: "https://www.instagram.com/blockchainsrm/",
      icon: <AiOutlineInstagram size={26} className="cursor-pointer" />,
    },
    {
      key: "Twitter",
      path: "https://twitter.com/BlockchainSRM",
      icon: <AiOutlineTwitter size={26} className="cursor-pointer" />,
    },
    {
      key: "LinkedIn",
      path: "https://www.linkedin.com/company/blockchain-club-srm/",
      icon: <AiFillLinkedin size={26} className="cursor-pointer" />,
    },
    {
      key: "Github",
      path: "https://github.com/Blockchain-Club-SRM",
      icon: <AiFillGithub size={26} className="cursor-pointer" />,
    },
  ];

  return (
    <footer className="p-4 sm:p-6 bg-transparent relative ">
      <img
        src="assets/footer-cube.png"
        alt=""
        className="absolute scale-50 -left-64 -top-20 "
      />
      <img
        src="assets/footer-hand.png"
        alt=""
        className="absolute scale-75 -right-40 md:-top-56"
      />
      <div className="md:flex md:justify-around relative">
        <div className="mb-6 md:mb-0">
          <img src={Logo.src} alt="" className="h-16 md:h-16" />
        </div>
        <div className="mb-6 md:mb-0 text-white self-center">
          <p className="">
            Student Driven Community here to <br></br>provide quality to web3
            space.
          </p>
          <ul className="flex gap-4 p-6 content-center">
            {socialMenu.map((item) => {
              return (
                <li key={item.key} className="hover:text-[#AD1AAF]">
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <p>All rights reserved @blockchainsrm</p>
        </div>
        <div>
          <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
            About
          </h2>
          <ul className="text-white dark:text-white">
            {menu.map((item, index) => {
              return (
                <li key={index} className="mb-2 hover:text-[#AD1AAF]">
                  <Link href={item.path} rel="noopener noreferrer">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
            Support
          </h2>
          <ul className="text-white dark:text-white">
            {supportMenu.map((item, index) => {
              return (
                <li key={index} className="mb-2 hover:text-[#AD1AAF]">
                  <Link href={item.path} rel="noopener noreferrer">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
