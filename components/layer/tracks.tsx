import React, { useState } from "react";
import Image from "next/image";
import jellyFishLeft from "../../public/assets/layer/jellyfishLeft.svg";
import jellyFishRight from "../../public/assets/layer/jellyFishRight.svg";
import prizeBg from "../../public/assets/layer/prizebg.svg";
import HorizontalScrollCarousel from "./Carousel/tracksCarousel";
import Marquee from "react-easy-marquee";

const Tracks = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, title: "Cryptography", description: "Be the Bond. Dive into the intriguing realm of FHE, ZK Proofs, DID, dStorage, MPC, and more to crack the code on privacy, security, and innovation in blockchain technology! Get ready to encrypt, decrypt, and unlock the potential of cutting-edge cryptographic techniques, leaving no loose ends!" },
    { id: 2, title: "DeFi", description: "Code the future of finance-Create accessible and inclusive financial systems powered by decentralized technologies, crafting decentralized lending to sculpting automated market makers, dive into concepts like flash loans and yield farming." },
    { id: 3, title: "Social on chain", description: "Revolutionize Social Networking with blockchain technology Reshape how we connect and share. Power up your ideas with concepts of Metaverse, AR/VR, and immersive Social experience using Al. Shape the next generation of social networking here at Layer. (Disclaimer: Don't be the next Drake)" },
    { id: 4, title: "Open track", description: "No limits. No boundaries. Unleash your innovative and creative mind!" },
  ];

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

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
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative sm:h-[400px] sm:w-[400px] w-[300px] h-[300px]  overflow-hidden bg-transparent ${selectedItem === item.id ? 'flipped' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <div
                style={{
                  backgroundImage: `url(${prizeBg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s",
                  transform: selectedItem === item.id ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
                <p className={`bg-transparent p-8 text-3xl font-black uppercase text-white ${selectedItem === item.id ? 'hidden' : ''}`}>
                  {item.title}
                </p>
                {selectedItem === item.id && (
                  <div className="bg-transparent w-full h-full overflow-hidden text-ellipsis flex whitespace-normal justify-center text-center items-center">
                    <p className="text-xl font-light text-white">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Tracks;
