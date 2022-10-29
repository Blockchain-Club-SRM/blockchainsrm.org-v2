import Head from "next/head";
import React from "react";
import { Layout } from "../components/shared";
import TeamCard from "../components/team/team-card";

const team = () => {
  const leads = [
    {
      name: "Aditya Jain",
      position: "president",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile.png",
      cover: "/assets/teams/default-cover.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-1.png",
      cover: "/assets/teams/default-cover-1.png",
    },

    {
      name: "Deepak",
      position: "teachhead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-2.png",
      cover: "/assets/teams/default-cover-2.png",
    },

    {
      name: "Yash",
      position: "cryptolead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-3.png",
      cover: "/assets/teams/default-cover-3.png",
    },

    {
      name: "Aditya Jain",
      position: "president",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile.png",
      cover: "/assets/teams/default-cover.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-1.png",
      cover: "/assets/teams/default-cover-1.png",
    },

    {
      name: "Deepak",
      position: "teachhead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-2.png",
      cover: "/assets/teams/default-cover-2.png",
    },

    {
      name: "Yash",
      position: "cryptolead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-3.png",
      cover: "/assets/teams/default-cover-3.png",
    },

    {
      name: "Aditya Jain",
      position: "president",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile.png",
      cover: "/assets/teams/default-cover.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-1.png",
      cover: "/assets/teams/default-cover-1.png",
    },

    {
      name: "Deepak",
      position: "teachhead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-2.png",
      cover: "/assets/teams/default-cover-2.png",
    },

    {
      name: "Yash",
      position: "cryptolead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-3.png",
      cover: "/assets/teams/default-cover-3.png",
    },
  ];
  const associates = [
    {
      name: "Aditya Jain",
      position: "president",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile.png",
      cover: "/assets/teams/default-cover.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-1.png",
      cover: "/assets/teams/default-cover-1.png",
    },

    {
      name: "Deepak",
      position: "teachhead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-2.png",
      cover: "/assets/teams/default-cover-2.png",
    },

    {
      name: "Yash",
      position: "cryptolead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-3.png",
      cover: "/assets/teams/default-cover-3.png",
    },

    {
      name: "Aditya Jain",
      position: "president",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile.png",
      cover: "/assets/teams/default-cover.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-1.png",
      cover: "/assets/teams/default-cover-1.png",
    },

    {
      name: "Deepak",
      position: "teachhead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-2.png",
      cover: "/assets/teams/default-cover-2.png",
    },

    {
      name: "Yash",
      position: "cryptolead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-3.png",
      cover: "/assets/teams/default-cover-3.png",
    },

    {
      name: "Aditya Jain",
      position: "president",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile.png",
      cover: "/assets/teams/default-cover.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-1.png",
      cover: "/assets/teams/default-cover-1.png",
    },

    {
      name: "Deepak",
      position: "teachhead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-2.png",
      cover: "/assets/teams/default-cover-2.png",
    },

    {
      name: "Yash",
      position: "cryptolead",
      socials: "https://www.github.com",
      profile: "/assets/teams/default-profile-3.png",
      cover: "/assets/teams/default-cover-3.png",
    },
  ];
  return (
    <>
      <Head>
        <title>Blockchain Club SRM | Team</title>
      </Head>
      <Layout className="flex flex-col gap-8">
        <h1 className="font-bold text-white self-center">Our Team</h1>
        <h2 className="text-[#00D1FF] mt-4 font-semibold">Leads:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {leads.map((ele, id) => (
            <TeamCard key={id} details={ele}></TeamCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">Associates:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {associates.map((ele, id) => (
            <TeamCard key={id} details={ele}></TeamCard>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default team;
