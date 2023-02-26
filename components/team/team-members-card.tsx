import React from "react";

const TeamMembersCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col p-2 justify-between relative text-white">
      
      <img src={profile} className="w-[7rem] h-[7rem] object-cover rounded-full " alt="" />
       <p className="text-center mt-4">{name}</p>
         
    </div>
  );
};

export default TeamMembersCard;