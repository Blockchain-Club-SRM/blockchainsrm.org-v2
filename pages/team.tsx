import Head from "next/head";
import React, { SetStateAction, useRef, useState } from "react";
import { Layout } from "../components/shared";
import TeamCard from "../components/team/team-card";
import TeamMembersCard from "../components/team/team-members-card";
const team = () => {
  const leads = [
    {
      name: "Vedant Utage",
      position: "President",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/vedant-utage-043020223/",
        twitter: "https://twitter.com/vedantutage03",
      },
      profile: "./images/prez.png",
      cover: "/assets/teams/1.png",
    },
    {
      name: "Pratham Bhatnagar",
      position: "Vice President",
      socials: {
        github: "https://github.com/pratham-bhatnagar", 
        linkedin: "https://www.linkedin.com/in/pratham-bhatnagar/",
        twitter: "https://twitter.com/prrthamm",
      },
      profile: "./images/pratham-pfp.png",
      cover: "/images/pratham-cover.png",
    },
    {
      name: "Harsh Srivastava",
      position: "Tech lead",
      socials: {
        github: "https://github.com/Srivastava57Harsh", 
        linkedin: "https://www.linkedin.com/in/srivastava57harsh/",
        twitter: "https://twitter.com/_0xharsh",
      },
      profile:
        "https://drive.google.com/uc?export=view&id=1dylr7nujElomVVrvFN47RqRCmeNQ7wpE",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Karan Pargal",
      position: "techLead",
      socials: {
        github: "https://github.com/karanpargal", 
        linkedin: "https://www.linkedin.com/in/karan-pargal/",
        twitter: "https://twitter.com/karan_pargal",
      },
      profile:
        "https://drive.google.com/uc?export=view&id=1K8QbLjaGeKFvTPAAMO5WPtvho24KxeOk",
      cover: "/assets/teams/4.png",
    },
    {
      name: "Prajin Chopra",
      position: "cryptoLead",
      socials: {
        github: "https://github.com/chopraprajin", 
        linkedin: "https://www.linkedin.com/in/chopraprajin",
        twitter: "https://twitter.com/chopraprajin",
      },
      profile:
        "https://drive.google.com/open?id=1FGLDTIK9xAv1Sqeuj48mFc7_Y3wVPUN6",
      cover: "/assets/teams/5.png",
    },
    // {
    //   name: "Pritesh Panda",
    //   position: "cryptolead",
    //   socials: {
    //     github: "/", 
    //     linkedin: "/",
    //     twitter: "/",
    //   },
    //   profile:
    //     "https://drive.google.com/uc?export=view&id=1jJQUN9J1VtODd8mFRKEHQlKARYg1NGwB",
    //   cover: "/assets/teams/6.png",
    // },
    {
      name: "Aman Parida",
      position: "corporateLead",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/aman-parida-794b19251",
        twitter: "https://twitter.com/AmanParida2003?t=oSM3HyY5nW48JVGdDUrFYw&s=09",
      },
      profile:"https://drive.google.com/open?id=1KAyFTVSUF1F_G5vNFrxSn6ftYnY7UKpK",
      cover: "/assets/teams/7.png",
    },
    {
      name: "Raj Kakadia",
      position: "corporatelead",
      socials: {
        github: "https://github.com/rajkadakia", 
        linkedin: "https://www.linkedin.com/in/raj-kadakia-787056256",
        twitter: "https://twitter.com/kadakia_raj?t=U4f-R-HB5GQlSXdazAIqXQ&s=08",
      },
      profile:"https://drive.google.com/open?id=1f1Y_-96_F1aA6ijuuzeVCk7nZTlafPTQ",
      cover: "/assets/teams/D1.png",
    },
    {
      name: "Vansika Sonthalia",
      position: "corporatelead",
      socials: {
        github: "https://github.com/vsonthalia", 
        linkedin: "https://www.linkedin.com/in/vansika-sonthalia-5a113324a/",
        twitter: "https://twitter.com/v4nsika",
      },
      profile:"https://drive.google.com/open?id=1ydrm-bvCguuzkf17gGgBMwpP6HEdHhVq",
      cover: "/assets/teams/9.png",
    },
    // {
    //   name: "Pouravi Pawar",
    //   position: "corporatelead",
    //   socials: {
    //     github: "/", 
    //     linkedin: "/",
    //     twitter: "/",
    //   },
    //   profile:
    //     "/",
    //   cover: "/assets/teams/10.png",
    // },
    {
      name: "Suhani Khanna",
      position: "editorialLead",
      socials: {
        github: "https://github.com/SuhaniKhanna", 
        linkedin: "https://www.linkedin.com/mwlite/in/suhani-khanna-903a1122a",
        twitter: "https://twitter.com/Suhanikhanna30",
      },
      profile:
        "https://drive.google.com/open?id=1M5lhaOvQQWl8p-6TJL432C1Vxi-sSynp",
      cover: "/assets/teams/11.png",
    },
    {
      name: "Heer Mehta",
      position: "editorialLead",
      socials: {
        github: "/", 
        linkedin: "https://www.linkedin.com/in/heer-mehta-7a354a256/",
        twitter: "/",
      },
      profile:
        "https://drive.google.com/open?id=1IzBy145xKeBBV_Lk8Awjk2zIpousuhr2",
      cover: "/assets/teams/12.png",
    },
    {
      name: "Ayushi Gupta",
      position: "editorialLead",
      socials: {
        github: "https://github.com/dreamcatcher1712", 
        linkedin: "https://www.linkedin.com/in/ayushi-gupta-445970237",
        twitter: "https://twitter.com/ayunshiegupta",
      },
      profile:
        "https://drive.google.com/open?id=1M5lhaOvQQWl8p-6TJL432C1Vxi-sSynp",
      cover: "/assets/teams/11.png",
    },
    // {
    //   name: "Ishika Jagatramka",
    //   position: "creativeslead",
    //   socials: {
    //     github: "/", 
    //     linkedin: "/",
    //     twitter: "/",
    //   },
    //   profile:
    //     "https://drive.google.com/uc?export=view&id=1rN6IPBbwbOiTd92I6qQlk0LQr9QSU381",
    //   cover: "/assets/teams/13.png",
    // },
    // {
    //   name: 'Labeeb Khan',
    //   position: 'creativeslead',
    //   socials: 'www.linkedin.com/in/shweta-sanadhya',
    //   profile: 'https://drive.google.com/uc?export=view&id=1YPKT1ZHjFf8BMOt6qewz2gLeBLinE4d7',
    //   cover: "/assets/teams/11.png",
    // },
  ];
  const associates = [
    {
      name: "Abhinav Rajeev Kumar",
      position: "Tech",
      socials: {
        github: "https://github.com/MajorTimberWolf",
        linkedin: "https://www.linkedin.com/in/abhinav-rajeev-kumar",
        twitter: "https://twitter.com/MajorTimbWlf21?t=fzM4vrQ9-gRscspSWfSLxw&s=09",
      },
      profile: "https://drive.google.com/open?id=1rbp3_4d6iaYKfxcbQCOtJX6g1MVVo9Ab",
      cover: "/images/pratham-cover.png",
    },
    {
      name: "Kartikey Seth",
      position: "Tech",
      socials: {
        github: "https://github.com/KartikeyCode", 
        linkedin: "https://www.linkedin.com/in/codekartikey",
        twitter: "https://twitter.com/CodeKartikey?t=WWi0Tz4wRTlg8QCblux6XA&s=09",
      },
      profile:
        "https://drive.google.com/open?id=1sJlivDaDoII7guYI-exLN5GgX46sLCPt",
      cover: "/assets/teams/14.png",
    },
    {
      name: "Ajay",
      position: "Tech",
      socials: {
        github:"https://github.com/CampVamp", 
        linkedin:"https://www.linkedin.com/in/ajay-ram/",
        twitter:"https://twitter.com/Xpodnow",},
      profile:
        "https://drive.google.com/uc?export=view&id=1SvADx44VNZHpVcoJ4JUL53DR6rq2rijh",
    },
    {
      name: "Ahaan Sekhar Das",
      position: "Tech",
      socials: {
        github: "https://github.com/ahaan1984", 
        linkedin: "https://www.linkedin.com/in/ahaan-sekhar-das-5642a3251/",
        twitter: "https://twitter.com/1asd133667",
      },
      profile:
        "https://drive.google.com/open?id=1TmTmRuPYySx5OcKf_izNPdNVvd85E-V0",
      cover: "/assets/teams/D2.png",
    },
    {
      name: "Milind Mishra",
      position: "Tech",
      socials: {
        github: "https://github.com/imilindmishra",
        linkedin: "https://www.linkedin.com/in/milind-mishra-2a3b23257/",
        twitter: "https://twitter.com/milindm91612787",
      },
      profile:
        "https://drive.google.com/open?id=1dk24kXEKpwnRpuJMn249gNXGlOBGC0Pg",
      cover: "/assets/teams/3.png",
    },
    {
      name: "Souvik Basak",
      position: "Tech",
      socials: {
        github: "https://github.com/voidsouvik", 
        linkedin: "https://www.linkedin.com/in/souvik-basak-a55421220/",
        twitter: "https://twitter.com/listen_souvik",
      },
      profile:
        "https://drive.google.com/open?id=1ko_T8T_4meSxTCN7hW3ybyhHJuyb3rF4",
      cover: "/assets/teams/1.png",
    },
    // {
    //   name: "Hem Popat",
    //   position: "Crypto",
    //   socials: {
    //     github: "/", 
    //     linkedin: "/",
    //     twitter: "/",
    //   },
    //   profile:
    //     "https://drive.google.com/uc?export=view&id=1LoBg7H5qOyIYTkkWxwz4_GOYF2WYxmRF",
    //   cover: "/assets/teams/D2.png",
    // },
    {
      name: "Haaniya Iram",
      position: "Crypto",
      socials: {
        github: "https://github.com/haaniyairam", 
        linkedin: "www.linkedin.com/in/ haaniya-iram-687402252",
        twitter: "https://twitter.com/HaaniyaIram",
      },
      profile: "https://drive.google.com/open?id=1765gF7VBNJBAyLJq47ddRJs5MIV8Q4Qr",
      cover: "/assets/teams/20.png",
    },
    {
      name: "Soumya Darshan Kamila",
      position: "Creatives",
      socials: {
        github: "http://github.com/soumyaDKamila", 
        linkedin: "http://www.linkedin.com/in/soumya-darshan-kamila-6279a1213",
        twitter: "https://twitter.com/soumya_kamila",
      },
      profile:
        "https://drive.google.com/open?id=1lBGwoSSDuJOWxU6hvt9mnuvBjQP8jPdz",
      cover: "/assets/teams/D1.png",
    },
    {
      name: "Tanisha Sharma",
      position: "Creatives",
      socials: {
        github: "https://github.com/Tanisha9704", 
        linkedin: "https://www.linkedin.com/in/tanisha-sharma-ba8a911bb",
        twitter: "https://twitter.com/_Tish9704",
      },
      profile: "https://drive.google.com/open?id=14yMAyJEkLAaEccfo9BkRfgvDQrKPr6Yo",
      cover: "/assets/teams/D1.png",
    },
    {
      name: "Harsh Vardhan Upadhyay",
      position: "Creatives",
      socials: {
        github: "https://github.com/Harsh-Vardhan-Upadhyay", 
        linkedin: "https://www.linkedin.com/in/hvu20/",
        twitter: "https://twitter.com/Harshva40316846",
      },
      profile: "https://drive.google.com/open?id=11-UG6PSIzoYQznuok7QFsxsjoKuC0stq",
      cover: "/assets/teams/D1.png",
    },
  ];
  const tech: any[] = [
    {
      name: "Akash",
      position: "member",
      socials: {
        github: "https://github.com/akashpanda122", 
        linkedin: "https://www.linkedin.com/in/akash-panda-dev/",
        twitter:"https://twitter.com/akashpanda_dev",},
      profile:
        "https://drive.google.com/open?id=1NfNhYCwLY73-PPiOT9L1Ycioos-wWW69",
    },
    {
      name: "Ankit",
      position: "member",
      socials: "https://github.com/ankit7241",
      profile:
        "https://drive.google.com/uc?export=view&id=12uyixa-xWgKI6HOOfbVRzWdLN7nugqHr",
    },
    {
      name: "Atul",
      position: "member",
      socials: "https://github.com/AtulRaghuvanshi73",
      profile:
        "https://drive.google.com/uc?export=view&id=1M5o3z44ymykGMShLyhm6kE3mncbfi5ar",
    },
    {
      name: "Varun",
      position: "member",
      socials: "https://github.com/Varun-2538",
      profile:
        "https://drive.google.com/uc?export=view&id=1qNJMje6VmkDF6f-K4zDf6IG1-zhJXWjY",
    },
  ];
  const crypto: any[] = [
    {
      name: "Divyansh",
      position: "member",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter:"/",},
      profile:
        "https://drive.google.com/uc?export=view&id=1S2d6TS98nG-0MOh6E_RqNzTduGJibU1m",
    },
    {
      name: "Jayanth",
      position: "member",
      socials: {
        github: "https://www.github.com/jayanthjayanth", 
        linkedin: "https://www.linkedin.com/in/jayanthvarmav/",
        twitter:"https://www.twitter.com/Cryptojayanth",},
      profile:"https://drive.google.com/uc?export=view&id=1a5IdKoo9MpwEUATxPnD_uh2zxo6pka4E",
    },
    {
      name: "Vidhi",
      position: "member",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter:"/",},
      profile:
        "https://drive.google.com/uc?export=view&id=1uEx2zq-qfrUNjpRp9C3Q1vW8ahtwZqyE",
    },
    {
      name: "Vaibhav",
      position: "member",
      socials: {
        github: "https://github.com/VaibhavRathii", 
        linkedin: "https://www.linkedin.com/in/vaibhav-rathi-3bb887224",
        twitter:"https://twitter.com/Vaibhavrathi02?t=7P5DnuZuxt9461Z9SFB_Sw&s=09",},
      profile:
        "https://drive.google.com/open?id=1R90i3IPC7LCAsFRgI7tWGJsJh-iTxA80",
    },
  ];
  const ops: any[] = [
    {
      name: "Mudit",
      position: "member",
      socials: {
        github: "https://www.linkedin.com/in/mudit-khater-6a3931266", 
        linkedin: "https://www.linkedin.com/in/mudit-khater-6a3931266",
        twitter: "https://twitter.com/MuditKhater108?t=3D2VsKqqQwoQTa-_E5FQEA&s=09",},
      profile:"https://drive.google.com/open?id=1zfNPqkJxeJTxaet-AC5CwpSYyWzpy00k",    },
    {
      name: "Prathmesh",
      position: "member",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter:"/",},
      profile: "https://drive.google.com/uc?export=view&id=1xPCCpqScW4MRUPSz5uReBB9z3qHvwNQd",
    },
    {
      name: "Ayushman",
      position: "member",
      socials: {
        github: "https://github.com/ayushmananal", 
        linkedin: "https://www.linkedin.com/in/ayushman-anal-960737252",
        twitter:"https://twitter.com/ayushmananal",},
      profile:
        "https://drive.google.com/open?id=1yZuDzaC_40RMyNgljY9_fZm5Wku2Nt-S",
    },
    {
      name: "Soumya",
      position: "member",
      socials: {
        github: "https://github.com/thisissoumyaa/",
        linkedin: "https://www.linkedin.com/in/soumya-haswani-0031411b6",
        twitter:"/",},
      profile:
        "https://drive.google.com/open?id=17qfmzF3iaoT4AdVOK4h5QWgGQwmcrcHD",
    },
    {
      name: "Tanmay",
      position: "member",
      socials: {
        github: "https://github.com/Tanmay0909", 
        linkedin: "https://www.linkedin.com/in/tanmay-soni-56491b251",
        twitter:"https://twitter.com/tanmaysoni09?t=NVg8ZcS6k4OOc2r-bQcdQA&s=09",},
      profile:
        "https://drive.google.com/open?id=11Y0CXXfJPDTwkfj-NACgl_FURJI-AqD9",
    },
    {
      name: "Shradha",
      position: "member",
      socials: {
        github: "https://github.com/Shradharai", 
        linkedin: "https://www.linkedin.com/in/shradha-rai-18460a213/",
        twitter:"https://twitter.com/shradharai4u?t=GitXnaemFiYi1fYrXjRinA&s=09",},
      profile: "https://drive.google.com/open?id=1Jh8cykDb3A75MvjJjvPjPe4icxVO2pk6",
    },
    {
      name: "Aditi",
      position: "member",
      socials: {
        github: "https://github.com/AditiSahoo", 
        linkedin: "https://www.linkedin.com/in/aditi-sahoo-475919251/",
        twitter:"https://twitter.com/01AditiSahoo1",},
      profile:
        "https://drive.google.com/open?id=1azRPrX0-utV6Z1y2aDrsm1jWFLyKFdhL",
    },
    {
      name: "Amit",
      position: "member",
      socials: {
        github: "https://github.com/AmiTiwarii", 
        linkedin: "https://www.linkedin.com/in/amit-tiwari-25563226b",
        twitter:"https://twitter.com/Amittiwari2003?t=oWzG8wfiH1gJGDzLp0Ybjg&s=09",},
      profile:
        "https://drive.google.com/open?id=18x7daLNbb6UNznE9lLi9J4ekq6619bkR",
    },
    {
      name: "Seneen",
      position: "member",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter:"/",},
      profile:
        "https://drive.google.com/open?id=1Lj85a18IWUJ94hqQ0Hh5VcEP-ymzs7xi",
    },
    {
      name: "Mehul",
      position: "member",
      socials: {
        github: "https://github.com/kumar-mehul", 
        linkedin: "https://www.linkedin.com/in/kumar-mehul-a70200251",
        twitter:"https://twitter.com/kumarmehul2401?t=gShVp1rvkRhQGGvRuHoxRw&s=09",},
      profile:
        "https://drive.google.com/open?id=1qRqYQKjnPXRyK_nB81eUBf8C3oDxvc5-",
    },
    {
      name: "Aryan",
      position: "member",
      socials: {
        github: "https://github.com/AryanGupta9719", 
        linkedin: "https://www.linkedin.com/in/aryan-gupta-5b6613264/",
        twitter:"https://x.com/aryan9719?s=11",},
      profile:
        "https://drive.google.com/open?id=1ccsxOdOKQ6HC0VQp8zTdlaU6kfk10xQn",
    },
    {
      name: "Hershy",
      position: "member",
      socials: {
        github: "/", 
        linkedin: "/",
        twitter:"/",},
      profile:
        "https://drive.google.com/uc?export=view&id=1hqb9rc8Zmd_NgiKmFnZiRVdZCDpg9hDK",
    },
  ];

  return (
    <>
      <Head>
        <title>Blockchain Club SRM | Team</title>
      </Head>
      <Layout className="flex flex-col gap-8 mt-8">
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
        <h2 className="text-[#00D1FF] mt-8 font-semibold">tech team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {tech.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">crypto team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {crypto.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
        <h2 className="text-[#00D1FF] mt-8 font-semibold">operations team:</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center mb-48">
          {ops.map((ele, id) => (
            <TeamMembersCard key={id} details={ele}></TeamMembersCard>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default team;
