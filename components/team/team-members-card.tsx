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
        // layout="intrinsic"
        objectFit="cover"
        className={`${
          isLoading ? "animate-pulse" : ""
        } rounded-full bg-[#54115c]`}
        alt=""
        onLoadingComplete={handleImageLoad}
        priority={true}
      />

      <p className="text-center mt-4">{name}</p>
    </div>
  );
};

export default TeamMembersCard;
