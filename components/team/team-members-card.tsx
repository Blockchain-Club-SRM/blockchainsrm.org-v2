import React from "react";

const TeamMembersCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col bg-team-gradient p-4 rounded-xl justify-between relative text-white xl:max-w-[20%]">
      
      <img src={profile} className="w-[7rem] h-[7rem] -mt-[10%] z-0 rounded-[50%] " alt="" />
       <p className="text-center mt-4">{name}</p>
         
    </div>
  );
};

export default TeamMembersCard;