import React from "react";
import Image from "next/image";

const TeamMembersCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col p-2 justify-between relative text-white">
      <Image
        width={120}
        height={120}
        quality={70}
        blurDataURL="LNLgw]ae68kC~Wf6Inj@00oLRPay"
        placeholder="blur"
        src={profile}
        className="object-cover rounded-lg bg-[#54115c]"
        alt=""
      />
      <p className="text-center mt-4">{name}</p>
    </div>
  );
};

export default TeamMembersCard;
