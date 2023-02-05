import React from "react";

const TeamCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col bg-team-gradient p-4 rounded-xl relative text-white xl:max-w-[20%]">
      <img src={cover} alt="" />
      <img src={profile} className="w-[5rem] h-[5rem] -mt-[10%] z-0 rounded-[50%] " alt="" />
      <div className="flex my-8 justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h5>{name}</h5>
            <img src="/assets/teams/check.svg" alt="" />
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
