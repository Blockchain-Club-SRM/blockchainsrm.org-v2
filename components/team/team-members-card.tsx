import React from "react";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const TeamMembersCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;

  return (
    <div className="flex flex-col bg-team-gradient p-4 rounded-xl relative text-white w-max">
      <div className="w-32 h-32 relative">
        <Image
          layout="fill"
          quality={100}
          blurDataURL="LNLgw]ae68kC~Wf6Inj@00oLRPay"
          placeholder="blur"
          src={profile}
          className="object-cover rounded-lg bg-[#54115c]"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center my-4">
        <h5 className="text-[1rem]">{name}</h5>
      </div>
      <div className="flex justify-center gap-1">
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-white text-xl" />
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="text-white text-xl" />
        </a>
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
};

export default TeamMembersCard;
