import React from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const TeamCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col bg-team-gradient p-4 rounded-xl relative text-white w-max">
      <Image
        src={profile}
        blurDataURL="L5AcANr@01KO1NNv}T,p4VxG_KEf"
        placeholder="blur"
        alt=""
        width={200}
        height={200}
        className="object-cover rounded-md"
      />

      <div className="flex my-8 justify-between items-center gap-4 flex-wrap">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h5 className=" text-[1rem]">{name}</h5>
          </div>
          <p className="text-gray-400">@{position}</p>
        </div>
        <div className="flex justify-between gap-1">
          <a href={socials} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-white text-xl" />
          </a>
          <a href={socials} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="text-white text-xl" />
          </a>
          <a href={socials} target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle className="text-white text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
