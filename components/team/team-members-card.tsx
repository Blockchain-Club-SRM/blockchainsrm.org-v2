import React from "react";
import Image from "next/image";

const TeamMembersCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col p-2 justify-between items-center relative text-white">
      <div className="w-32 h-32 rounded-full bg-[#54115c] overflow-hidden">
        <Image
          width={320}
          height={320}
          quality={70}
          blurDataURL="LNLgw]ae68kC~Wf6Inj@00oLRPay"
          placeholder="blur"
          src={profile}
          className="object-cover"
          alt=""
        />
      </div>
      <p className="text-center mt-2">{name}</p>
    </div>
  );
};

export default TeamMembersCard;
