import * as React from "react";

function Footer() {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "rgba(11,15,24)" }}
    >
      <div className="flex gap-5 mt-5 justify-center items-center px-5 max-w-full">
        <a
          href="https://www.instagram.com/blockchainsrm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="./instagram.svg"
            className="h-10 w-10 object-contain"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="./facebook.svg"
            className="h-10 w-10 object-contain"
            alt="facebook"
          />
        </a>
        <a
          href="https://www.discord.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="./discord.svg"
            className="h-10 w-10 object-contain"
            alt="discord"
          />
        </a>
        <a
          href="https://www.telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="./telegram.svg"
            className="h-10 w-10 object-contain"
            alt="telegram"
          />
        </a>
        <a
          href="www.linkedin.com/company/blockchain-club-srm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="./linkedin.svg"
            className="h-10 w-10 object-contain"
            alt="linkedin"
          />
        </a>
        <a
          href="https://twitter.com/BlockchainSRM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="./twitter.svg"
            className="h-10 w-10 object-contain"
            alt="twitter"
          />
        </a>
      </div>
      <div className="flex gap-5 justify-between px-5 mt-20 w-full text-3xl tracking-wider text-center text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">Powered by @Devfolio</div>
        <div className="flex-auto">Crafted by @</div>
      </div>
    </div>
  );
}

export default Footer;
