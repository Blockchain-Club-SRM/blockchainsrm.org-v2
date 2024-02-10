import Image from "next/image";
import bubble from "../../public/partnersbubble.png";
import styles from "./partners.module.css";
import text from "../../public/partnerstext.png";
import jellyfish1 from "../../public/partnersjellyfish1.png";

export default function Partners() {
  // Generate an array of delay values for bubbles
  const bubbleDelays = Array.from({ length: 11 }, (_, index) => index);

  return (
    <div className="bg-cover bg-[url(/partnersbg.png)] h-screen flex flex-col relative">
      <Image alt="Partners" className="self-center md:w-auto w-80 z-0 mt-12" src={text} />
      <Image alt="jellyfish" className="z-0 self-end mr-44 hidden md:block" src={jellyfish1} />

      <div className="bubbles flex flex-col">
        <div className="" id="row1">
          {/* Map over bubbleDelays to create bubble elements */}
          {bubbleDelays.map((delay, index) => (
            <div key={index} className={`${styles.bubble}`} style={{ animationDelay: `${delay}s` }}>
              <Image src={bubble} className="w-64" alt="bubble" />
            </div>
          ))}
        </div>
        <div className="mt-96" id="row2">
          {/* Map over bubbleDelay2 to create bubble elements */}
          {bubbleDelays.map((delay, index) => (
            <div key={index} className={`${styles.bubble}`} style={{ animationDelay: `${delay}s` }}>
              <Image src={bubble} className="w-64" alt="bubble" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
