import React from "react";
import Image from "next/image";

const TeamCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col bg-team-gradient p-4 rounded-xl relative text-white xl:max-w-[22%]">
      <div className="flex justify-center items-center mb-2"> {/* Reduce margin-bottom to reduce space */}
        <Image
          src={cover}
          blurDataURL="L5AcANr@01KO1NNv}T,p4VxG_KEf"
          placeholder="blur"
          alt=""
          width={300}
          height={200}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-center items-center mb-2"> {/* Reduce margin-bottom to reduce space */}
        <div className="w-24 h-24 relative rounded-full">
          <Image
            blurDataURL="LLK-LRofFyae~UofIpWA00j[DhWA"
            placeholder="blur"
            src={profile}
            alt=""
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex my-2 justify-between items-center gap-1 flex-wrap">
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <h5 className="text-[1rem] mb-0">{name}</h5> {/* Add mb-0 to remove bottom margin */}
            <Image src="/assets/teams/check.svg" width={15} height={15} alt="" />
          </div>
          <p className="text-gray-400">@{position}</p>
        </div>
        <button className="py-2 px-6 border-[#F81DFB] border-2 rounded-full">
          <a href={socials} target="_blank" rel="noopener noreferrer">
            Socials
          </a>
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
