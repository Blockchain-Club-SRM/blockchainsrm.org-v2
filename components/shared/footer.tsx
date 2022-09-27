import React from "react";
import Logo from "../../public/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-transparent">
      <div className="md:flex md:justify-around ">
        <div className="mb-6 md:mb-0">
          <Logo />
        </div>
        <div className="mb-6 md:mb-0 text-white self-center">
          <p className="">
            Student Driven Community here to <br></br>provide quality to web3
            space.
          </p>
          <ul className="flex gap-4 p-6 content-center">
            <li>
              <a href="/">insta</a>
            </li>
            <li>
              <a href="https://twitter.com/BlockchainSRM">twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/blockchain-club-srm/">
                linkedin
              </a>
            </li>
            <li>
              <a href="/">github</a>
            </li>
          </ul>
          <p>All rights reserved @blockchainsrm</p>
        </div>
        <div>
          <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
            About
          </h2>
          <ul className="text-white dark:text-white">
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Our Events
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Our Team
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
            Support
          </h2>
          <ul className="text-white dark:text-white">
            <li className="mb-2">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
