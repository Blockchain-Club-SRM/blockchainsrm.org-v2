import React from "react";
import Image from "next/image";
import jellyFishLeft from "../../public/assets/layer/jellyfishLeft.svg";
import jellyFishRight from "../../public/assets/layer/jellyFishRight.svg";
import prizeBg from "../../public/assets/layer/prizebg.svg";
import HorizontalScrollCarousel from "./Carousel/tracksCarousel";
import Marquee from "react-easy-marquee";

const Tracks = () => {
  const items = [
    { id: 1, title: "Cryptography" },
    { id: 2, title: "DeFi" },
    { id: 3, title: "Social on Chain" },
    { id: 4, title: "Open Track" },
  ];

  return (
    <div className="relative bg-slate-950 min-h-[95vh] pt-20">
      <Image
        src={jellyFishLeft}
        alt="jellyfish"
        className="absolute top-32 opacity-50"
      />
      <Image
        src={jellyFishRight}
        alt="jellyfish"
        className="absolute bottom-10 opacity-50 right-0"
      />
      <div id="layer-tracks" className="text-center text-5xl md:text-7xl tracking-widest">
        <span className="bg-clip-text bg-gradient-to-t from-cyan-700 to-slate-50 text-transparent font-black uppercase font-['Impact']">
          Tracks
        </span>
      </div>
      <div className="hidden lg:block pt-10">
        <HorizontalScrollCarousel items={items} />
      </div>
      <div className="flex lg:hidden pt-10">
        <Marquee
          duration={10000}
          background="transparent"
          height="400px"
          width="100%"
          pauseOnHover={true}
        >
          {items.map((items) => (
            <div
              key={items.id}
              className="group relative sm:h-[400px] sm:w-[400px] w-[300px] h-[300px]  overflow-hidden bg-transparent" // Set background to transparent
            >
              <div
                  style={{
                    backgroundImage: `url(${prizeBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
                <p className="bg-transparent p-8 text-3xl font-black uppercase text-white">
                  {items.title}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
export default Tracks;