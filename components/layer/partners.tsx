import { motion } from "framer-motion";
import Image from "next/image";
import bubble from "../../public/partnersbubble.png";
import styles from "./partners.module.css";
import text from "../../public/partnerstext.png";
import jellyfish1 from "../../public/partnersjellyfish1.png";

export default function Partners() {
  return (
    <motion.div className="bg-cover bg-[url(/partnersbg.png)] h-screen flex flex-col relative">
      <div className="text-center w-full md:mb-14 text-5xl mt-4 md:mt-0 md:py-0 md:text-7xl">
        <span className="bg-clip-text pl-2 md:pl-0 bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
          Partners
        </span>
      </div>{" "}
      <Image
        alt="jellyfish"
        className="z-0 self-end mr-44 hidden md:block"
        src={jellyfish1}
      />
      {/* Add the marquee effect to the bubbles container */}
      <motion.div
        initial={{ x: "100%" }} // Initial position
        animate={{ x: "-100%" }} // Move div to the left
        transition={{
          duration: 10, // Adjust the duration as needed
          repeat: Infinity, // Repeat indefinitely
        }}
        className="bubbles-container hidden xl:flex gap-40"
      >
        {/* Preload the images */}
        <Image src={bubble} alt="bubble" />
        <Image src={bubble} alt="bubble" />
        <Image src={bubble} alt="bubble" />
        <Image src={bubble} alt="bubble" />
      </motion.div>
      <motion.div
        initial={{ x: "100%" }} // Initial position
        animate={{ x: "-100%" }} // Move div to the left
        transition={{
          duration: 10, // Adjust the duration as needed
          repeat: Infinity, // Repeat indefinitely
        }}
        className="bubbles-container mt-16  hidden xl:flex gap-40"
      >
        {/* Preload the images */}
        <Image src={bubble} alt="bubble" />
        <Image src={bubble} alt="bubble" />
        <Image src={bubble} alt="bubble" />
        <Image src={bubble} alt="bubble" />
      </motion.div>
    </motion.div>
  );
}
