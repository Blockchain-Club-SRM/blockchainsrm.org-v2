import { motion } from "framer-motion";
import Image from "next/image";
import bubble from "../../public/partnersbubble.png";
import styles from "./partners.module.css";
import text from "../../public/partnerstext.png";
import jellyfish1 from "../../public/partnersjellyfish1.png";

export default function Partners() {
  return (
    <motion.div className="bg-cover bg-[url(/partnersbg.png)] flex flex-col min-h-screen border">
      <Image alt="Partners" className="self-center md:w-auto w-80 z-0 mt-12" src={text} />
      <Image alt="jellyfish" className="z-0 self-end mr-44 hidden md:block" src={jellyfish1} />

      {/* Add the marquee effect to the bubbles container */}
      <motion.div
        initial={{ x: "100%", y: 0  }} // Initial position
        animate={{ x: "-100%", y: -20 }} // Move div to the left
        transition={{
          duration: 20, // Adjust the duration as needed
          repeat: Infinity, // Repeat indefinitely
          type: "tween"
        }}
        style={{
          whiteSpace: "nowrap", // Prevent text from wrapping
          position: "absolute" // Position the div absolutely
        }}
        className="bubbles-container overflow-hidden mt-44 flex gap-40 border p-32"
      >
        {/* Preload the images */}
        <Image src={bubble} alt="bubble" className="animate-bounce transition-all duration-100" />
        <Image src={bubble} alt="bubble" className="animate-bounce transition-all duration-200" />       
        <Image src={bubble} alt="bubble" className="animate-bounce transition-all duration-300" />
        <Image src={bubble} alt="bubble" className="animate-bounce transition-all duration-400" />
      </motion.div>
    </motion.div>
  );
}
// import { motion } from "framer-motion";
// import Image from "next/image";
// import bubble from "../../public/partnersbubble.png";
// import styles from "./partners.module.css";
// import text from "../../public/partnerstext.png";
// import jellyfish1 from "../../public/partnersjellyfish1.png";

// export default function Partners() {
//   return (
//     <motion.div className={`bg-cover ${styles.bgImage} h-screen flex flex-col relative`}>
//       <Image alt="Partners" className={`self-center md:w-auto w-80 z-0 ${styles.partnerText}`} src={text} />
//       <Image alt="jellyfish" className={`z-0 self-end mr-44 hidden md:block ${styles.jellyfish}`} src={jellyfish1} />

//       {/* Add the marquee effect to the bubbles container */}
//       <motion.div
//         initial={{ x: "100%", y: 0 }} // Initial position
//         animate={{ x: "-100%", y: -20 }} // Move div to the left and up
//         transition={{
//           duration: 20, // Adjust the duration as needed
//           repeat: Infinity, // Repeat indefinitely
//           type: "tween", // Use tween animation for smoother motion
//         }}
//         style={{
//           whiteSpace: "nowrap", // Prevent text from wrapping
//           position: "absolute", // Position the div absolutely
//         }}
//         className={`${styles.bubbles} overflow-hidden mt-44 flex gap-40`}
//       >
//         {/* Preload the images */}
//         <Image src={bubble} alt="bubble" />
//         <Image src={bubble} alt="bubble" />
//         <Image src={bubble} alt="bubble" />
//         <Image src={bubble} alt="bubble" />
//       </motion.div>
//     </motion.div>
//   );
// }
