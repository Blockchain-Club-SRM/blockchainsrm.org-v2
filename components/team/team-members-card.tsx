import React, { useState } from "react";
import Image from "next/image";

const TeamMembersCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    console.log("check");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col p-2 justify-between relative  text-white">
      <Image
        width={120}
        height={120}
        quality={100}
        src={profile}
        objectFit="cover"
        className={`${
          isLoading ? "animate-pulse" : "bg-[#54115c]"
        } rounded-full `}
        alt=""
        onLoadingComplete={handleImageLoad}
        loading="eager"
      />

      <p className="text-center mt-4">{name}</p>
    </div>
  );
};

export default TeamMembersCard;
