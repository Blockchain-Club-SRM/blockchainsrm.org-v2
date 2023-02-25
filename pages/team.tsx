import Head from "next/head";
import React, { SetStateAction, useRef, useState } from "react";
import { Layout } from "../components/shared";
import TeamCard from "../components/team/team-card";
import TeamMembersCard from "../components/team/team-members-card";
const team = () => {
  const leads = [
    {
      name: "Aditya",
      position: "president",
      socials: "https://www.linkedin.com/in/aditya-jain-b5040a1b8/",
      profile: "https://drive.google.com/uc?export=view&id=1C0bQc95LJq0OKzlMQc0YHIO978-0mJh0",
      cover: "/assets/teams/1.png",
    },
    {
      name: "Sreyom",
      position: "vicepresident",
      socials: "https://www.github.com/sreyom31",
      profile: "https://drive.google.com/uc?export=view&id=1kWm0fJJeYuDXL_0XSwPW9WBKPjUxqERv",
      cover: "/assets/teams/2.png",
    },

    {
      name: "Sarvottam",
      position: "vicepresident",
      socials: "https://www.linkedin.com/in/sarvottammishra",
      profile: "https://drive.google.com/uc?export=view&id=1g89fN8PE-pvpCNJK-Gf23QGZEo6bAaZA",
      cover: "/assets/teams/3.png",
    },
    {
      name: 'Pranay',
      position: 'cryptolead',
      socials: 'https://www.linkedin.com/in/pranay-goenka-241931227/',
      profile: 'https://drive.google.com/uc?export=view&id=1Le4ZMiRn7zCj41vagb-flEi_I1VKzUyA',
      cover: "/assets/teams/4.png",
    },
    {
      name: 'Yash',
      position: 'cryptolead',
      socials: 'https://www.linkedin.com/in/yash-khandelwal-76384b227',
      profile: 'https://drive.google.com/uc?export=view&id=1-lzuiC95b9TWUOjOc5HP2l-ysD_r6MS2',
      cover: "/assets/teams/5.png",
    },
    {
      name: 'Pranay',
      position: 'cryptolead',
      socials: 'https://www.linkedin.com/in/pranay-goenka-241931227/',
      profile: 'https://drive.google.com/uc?export=view&id=1jJQUN9J1VtODd8mFRKEHQlKARYg1NGwB',
      cover: "/assets/teams/6.png",
    },
    {
      name: 'Ayushya',
      position: 'corporatelead',
      socials: 'https://www.linkedin.com/in/torque44/',
      profile: 'https://drive.google.com/uc?export=view&id=1M5WHPYm_10tPbfM0ldaxDVJ6FRkn28JS',
      cover: "/assets/teams/7.png",
    },
    {
      name: 'Yuvraj',
      position: 'corporatelead',
      socials: 'https://www.linkedin.com/in/yuvraj-patel-014364152',
      profile: 'https://drive.google.com/uc?export=view&id=1RkR4wdLJCmboZ8KstmXQ5OU2Ne3pzxMO',
      cover: "/assets/teams/D1.png",
    },
    {
      name: 'Ujjwal',
      position: 'corporatelead',
      socials: 'Ujjwal Gupta',
      profile: 'https://drive.google.com/uc?export=view&id=1DlqDks_VTGeuF6sYal3FbQfgscgyifrr',
      cover: "/assets/teams/9.png",
    },
    {
      name: 'Toshak',
      position: 'corporatelead',
      socials: 'https://www.linkedin.com/in/toshak-kamal-kaushik-362954166/',
      profile: 'https://drive.google.com/uc?export=view&id=1ou0xD39AOvdRrrBgssIb_qK0aSuNuJxF',
      cover: "/assets/teams/10.png",
    },
    {
      name: 'Saatvik',
      position: 'editoriallead',
      socials: 'https://www.linkedin.com/in/saatvik-yadav-8698b41ba',
      profile: 'https://drive.google.com/uc?export=view&id=198ffJMO0FfX0vS4feGpHVJy7-wThOllu',
      cover: "/assets/teams/11.png",
    },
    {
      name: 'Vibha',
      position: 'editoriallead',
      socials: 'https://www.linkedin.com/in/lakshmi-vibha/',
      profile: 'https://drive.google.com/uc?export=view&id=1IOg1SahJ0bBlv1YwZu_EUxZfbTyb8QCy',
      cover: "/assets/teams/12.png",
    },
    {
      name: 'Arpit',
      position: 'creativeslead',
      socials: 'https://www.linkedin.com/in/arpit-goyal-b476271a0',
      profile: 'https://drive.google.com/uc?export=view&id=1rN6IPBbwbOiTd92I6qQlk0LQr9QSU381',
      cover: "/assets/teams/13.png",
    },
    // {
    //   name: 'Shweta',
    //   position: 'creativeslead',
    //   socials: 'www.linkedin.com/in/shweta-sanadhya',
    //   profile: 'https://drive.google.com/uc?export=view&id=1YPKT1ZHjFf8BMOt6qewz2gLeBLinE4d7',
    //   cover: "/assets/teams/11.png",
    // },
  ];
  const associates = [
    {
      name: 'Abhivansh',
      position: 'Tech',
      socials: 'https://github.com/AbhivanshBhatnagar',
      profile: 'https://drive.google.com/uc?export=view&id=1qaz6CCA9QnHdqA6pjkeZRWgcbFvd0RFg',
      cover: '/assets/teams/14.png'
    },
    {
      name: 'Harashnabin',
      position: 'Tech',
      socials: 'https://github.com/HarashnabinRoy',
      profile: 'https://drive.google.com/uc?export=view&id=18SILoYRR4EUVe3clA1B5Cpmr_ZZhrEs4',
      cover: '/assets/teams/D2.png'
    },
    {
      name: 'Farhaan',
      position: 'Tech',
      socials: 'https://github.com/mdfarhaan',
      profile: 'https://drive.google.com/uc?export=view&id=1GQNNHyrgEgKwtvaa3-R4FogV8sUYdvec',
      cover: '/assets/teams/3.png'
    },
    {
      name: 'Pratham',
      position: 'Tech',
      socials: 'https://github.com/pratham-bhatnagar',
      profile: 'https://drive.google.com/uc?export=view&id=198EiEUHUw_NNYzEXDBajFC8SxyoT4-bc',
      cover: '/assets/teams/D1.png'
    },
    {
      name: 'Siddhardha',
      position: 'Tech',
      socials: 'https://github.com/Siddhardha123',
      profile: 'https://drive.google.com/uc?export=view&id=1X-BRkanJJopk11IOrPiHXbWxoSgHRauj',
      cover: '/assets/teams/1.png'
    },
    {
      name: 'Maharsi',
      position: 'Crypto',
      socials: 'https://www.linkedin.com/in/maharsi-bhagat',
      profile: 'https://drive.google.com/uc?export=view&id=1LoBg7H5qOyIYTkkWxwz4_GOYF2WYxmRF',
      cover: '/assets/teams/D2.png'
    },
    {
      name: 'Vedant',
      position: 'Crypto',
      socials: 'https://www.linkedin.com/in/vedant-utage-043020223/',
      profile: 'WhatsApp Image 2022-11-06 at 8.34.36 PM - Vedant Utage.jpeg',
      cover: '/assets/teams/20.png'
    },
    {
      name: 'Aditya',
      position: 'Editorial',
      socials: 'https://github.com/ADITYAz2002',
      profile: 'https://drive.google.com/uc?export=view&id=1_lCaUFtjVWGsXdMSZwBDPRpC8o3eirxt',
      cover: '/assets/teams/D1.png'
    },
  ];
  const tech: any[] = [
    {
      name: 'Aditya',
      position: 'member',
      socials: 'https://github.com/adityaaggarwal12',
      profile: 'https://drive.google.com/uc?export=view&id=1b2-Z753l8pcvUSpR7rThGfGn6tiRJTWq'
    },
    {
      name: 'Ajay',
      position: 'member',
      socials: 'https://github.com/CampVamp',
      profile: 'https://drive.google.com/uc?export=view&id=1SvADx44VNZHpVcoJ4JUL53DR6rq2rijh'
    },
    {
      name: 'Akshit',
      position: 'member',
      socials: 'https://github.com/Akshit56',
      profile: 'https://drive.google.com/uc?export=view&id=1At5kY5Q0eJTbxN3sNMGY5AFe0HsGnMef'
    },
    {
      name: 'Ankit',
      position: 'member',
      socials: 'https://github.com/ankit7241',
      profile: 'https://drive.google.com/uc?export=view&id=12uyixa-xWgKI6HOOfbVRzWdLN7nugqHr'
    },
    {
      name: 'Anubhav',
      position: 'member',
      socials: 'https://github.com/Anubhav-Pathak',
      profile: 'https://drive.google.com/uc?export=view&id=1nQzfjzRepNbuDAxU9TVF45XQKTvsZG9G'
    },
    {
      name: 'Archit',
      position: 'member',
      socials: 'https://www.linkedin.com/in/archit-nanda-37a369214',
      profile: 'https://drive.google.com/uc?export=view&id=1RrMBm4E0XfNYpmjtq8Fg97zrMffBZ2Ad'
    },
    {
      name: 'Arnold',
      position: 'member',
      socials: 'https://github.com/ArnoldMichaelBenny',
      profile: 'https://drive.google.com/uc?export=view&id=1QnFaiBOzkedh4eaTvzIW6E0G-e4YWcav'
    },
    {
      name: 'Atul',
      position: 'member',
      socials: 'https://github.com/AtulRaghuvanshi73',
      profile: 'https://drive.google.com/uc?export=view&id=1M5o3z44ymykGMShLyhm6kE3mncbfi5ar'
    },
    {
      name: 'Ayush',
      position: 'member',
      socials: 'https://github.com/ayush8880',
      profile: 'https://drive.google.com/uc?export=view&id=1gFyxd6M0SSEBmc-drNRg9gHncVReyclD'
    },
    {
      name: 'Devansh',
      position: 'member',
      socials: 'https://github.com/Devansh-Mehra',
      profile: 'https://drive.google.com/uc?export=view&id=1CDPdZTXg4GgP9KmdXpDgakuvx4V58s-R'
    },
    {
      name: 'Divyansh',
      position: 'member',
      socials: 'https://github.com/PolarPanda35',
      profile: 'https://drive.google.com/uc?export=view&id=1S2d6TS98nG-0MOh6E_RqNzTduGJibU1m'
    },
    {
      name: 'Anand',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1Zqe_TUJ6IPw2mJlXCkNbfAWl_yMx8Wzc'
    },
    {
      name: 'Gaurav',
      position: 'member',
      socials: 'https://github.com/Gaurav232003',
      profile: 'https://drive.google.com/uc?export=view&id=1y68XhHI5dZUz_Arz37E5MMvIAUKo4Cl5'
    },
    {
      name: 'Harsh',
      position: 'member',
      socials: 'https://github.com/Srivastava57Harsh',
      profile: 'https://drive.google.com/uc?export=view&id=1tD2RysPkvV9LMNAo7rDzGmmPQyxOItbU'
    },
    {
      name: 'Harshit',
      position: 'member',
      socials: 'https://github.com/aroraharshit09',
      profile: 'https://drive.google.com/uc?export=view&id=1cFNOHXKTiYOQNmXtO6Iiyes-rdEKNFK2'
    },
    {
      name: 'Jaivardhan',
      position: 'member',
      socials: 'https://github.com/SmratJay',
      profile: 'https://drive.google.com/uc?export=view&id=1-DWcloq4R0N5B8DBCDVB3B3SEAC6WLr8'
    },
    {
      name: 'Arun',
      position: 'member',
      socials: 'https://github.com/heyitsmearun',
      profile: 'https://drive.google.com/uc?export=view&id=18Q1ocOzJsItjtlxKrfTv3xVXPzZ-wXCj'
    },
    {
      name: 'Kartikey',
      position: 'member',
      socials: 'https://github.com/KartikeyCode',
      profile: 'https://drive.google.com/uc?export=view&id=1EhX9hu9sL4658RofwaqtNGs8CSlDTNav'
    },
    {
      name: 'Khushi',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1Kc4AjHSCTQOejQU7C1bsuNZB1aG42lKc'
    },
    {
      name: 'Lakshyal',
      position: 'member',
      socials: 'https://github.com/lakshya-dhariwal',
      profile: 'https://drive.google.com/uc?export=view&id=1NEUjOhUbfWk3G6-CxzW0_63DDTbWwoVV'
    },
    {
      name: 'Nandavardhan',
      position: 'member',
      socials: 'https://github.com/NandavardhanRadhakrishnan',
      profile: 'https://drive.google.com/uc?export=view&id=1bCRO-dYroXTgtyIwkz591K_8LflrPfle'
    },
    {
      name: 'Nilesh',
      position: 'member',
      socials: 'https://github.com/Nileshgarg13',
      profile: 'https://drive.google.com/uc?export=view&id=1VHuDOjJYzyjhmaF6IzlyvLo854b7mm1K'
    },
    {
      name: 'Preet',
      position: 'member',
      socials: 'https://github.com/AEX0TIC',
      profile: 'https://drive.google.com/uc?export=view&id=1hjraYXyF6K0LcejsB9rgVfRd8mlBOTB-'
    },
    {
      name: 'Pulkit',
      position: 'member',
      socials: 'https://github.com/Pulkit1802',
      profile: 'https://drive.google.com/uc?export=view&id=1DDxywu4RDP1xV9VlWURxoQwhKadfmM8X'
    },
    {
      name: 'Sagar',
      position: 'member',
      socials: 'https://www.linkedin.com/in/sagar-singhal-27a241251',
      profile: 'https://drive.google.com/uc?export=view&id=1GTadoUA3N52escoGUEjDmEJdNYVh7b1e'
    },
    {
      name: 'Shantanu',
      position: 'member',
      socials: 'https://github.com/Shantanu505',
      profile: 'https://drive.google.com/uc?export=view&id=1r6AQnAOfpzbJTNM7YjQRGHk1JUcBjkID'
    },
    {
      name: 'Shounak',
      position: 'member',
      socials: 'https://www.linkedin.com/in/shounak-chandra/',
      profile: 'https://drive.google.com/uc?export=view&id=1Bv_OBxA-3njzPOqKMwtoKjxNDEkbonZ6'
    },
    {
      name: 'Souvik',
      position: 'member',
      socials: 'https://github.com/voidsouvik',
      profile: 'https://drive.google.com/uc?export=view&id=14iz5XD_gM2tu2bypd5uxGwxinsRXQ2Uq'
    },
    {
      name: 'Ilhan',
      position: 'member',
      socials: 'https://github.com/SYSHIL',
      profile: 'https://drive.google.com/uc?export=view&id=1Kz8k7fT-u0wAl3B69fHRr_F4O5869dp8'
    },
    {
      name: 'Varun',
      position: 'member',
      socials: 'https://github.com/Varun-2538',
      profile: 'https://drive.google.com/uc?export=view&id=1qNJMje6VmkDF6f-K4zDf6IG1-zhJXWjY'
    },
    {
      name: 'Yatharth',
      position: 'member',
      socials: 'https://www.linkedin.com/in/yatharth-singh-chouhan-82093b227',
      profile: 'https://drive.google.com/uc?export=view&id=1B4UyJwiqIcnPRNCRHaowv9mZ-IJXLHHu'
    }
  ];
  const crypto: any[] = [
    {
      name: 'Abhinav',
      position: 'member',
      socials: 'https://www.linkedin.com/in/abhinav-kumar-b325341ba',
      profile: 'https://drive.google.com/uc?export=view&id=1UuATK4zyggWklj0xQxtxMlMoYDTudcO6',
    },
    {
      name: 'Ahamed',
      position: 'member',
      socials: 'https://github.com/ahameddd',
      profile: 'https://drive.google.com/uc?export=view&id=1TUszYDv_fUPfdxX6JMe0B_LmOwrsnss_',
    },
    {
      name: 'Anirruth',
      position: 'member',
      socials: 'https://github.com/Anirruth',
      profile: 'https://drive.google.com/uc?export=view&id=1C47wrYfIPPGKqrT9ccubRxn9Lk64kSdQ',
    },
    {
      name: 'Aryan',
      position: 'member',
      socials: 'https://www.linkedin.com/in/aryan-aminbhave-2a3418251',
      profile: 'https://drive.google.com/uc?export=view&id=1s2P7ggOngZLSNJaOzTtKRxxUBgebk-C1',
    },
    {
      name: 'Shiv',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1bvS0R6Ptv1a-nqgCDH-6J2jwDghFvcZm',
    },
    {
      name: 'Hem',
      position: 'member',
      socials: 'https://github.com/hem-318/',
      profile: 'https://drive.google.com/uc?export=view&id=1Y2m3JcRyUOsm42pN-Q2ZCZOJK5lan_WY',
    },
    {
      name: 'Jayanth',
      position: 'member',
      socials: 'https://www.linkedin.com/in/jayanthvarma-v',
      profile: 'https://drive.google.com/uc?export=view&id=1a5IdKoo9MpwEUATxPnD_uh2zxo6pka4E',
    },
    {
      name: 'Likith',
      position: 'member',
      socials: 'https://www.linkedin.com/in/likith-bharadwaj-087b50224',   
      profile: 'https://drive.google.com/uc?export=view&id=1GdvRSp5yH7NKx654sCDin3hxxLOHTRvs',
    },
    {
      name: 'Madhur',
      position: 'member',
      socials: 'https://github.com/Maddyboy579',
      profile: 'https://drive.google.com/uc?export=view&id=1CAjUDc6rRqauD9T5Uny87dCkSvXwCLOv',
    },
    {
      name: 'Mayukh',
      position: 'member',
      socials: 'https://github.com/MayukhTunga',
      profile: 'https://drive.google.com/uc?export=view&id=1ky2T5sONzlq7TEgzXhnvlx2c0y5SVf0k',
    },
    {
      name: 'Niketan',
      position: 'member',
      socials: 'https://github.com/cyanide91225',
      profile: 'https://drive.google.com/uc?export=view&id=1JzLK-NYdSLLHQddhWMsuQsR4GkVIYXOr',
    },
    {
      name: 'Omar',
      position: 'member',
      socials: 'https://github.com/OmarFarooq9',
      profile: 'https://drive.google.com/uc?export=view&id=11VOUCNnXRemLAz3QCv8tyDMG9KHVjhyW',
    },
    {
      name: 'Piyush',
      position: 'member',
      socials: 'https://www.linkedin.com/mwlite/in/piyush-chandra-673a96244',
      profile: 'https://drive.google.com/uc?export=view&id=1GYpcHSY68XdvyPRLhSBh84iXEoldf5g0',
    },
    {
      name: 'Prajin',
      position: 'member',
      socials: 'https://github.com/chopraprajin',
      profile: 'https://drive.google.com/uc?export=view&id=1pFnl4fAD7Gw5HMQ3_BPgT2GAF5WOQPKy',
    },
    {
      name: 'Pritesh',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1p3ffsp9N_rrVtyvNxH_JUcEJEoM-WFZL',
    },
    {
      name: 'HAANIYA',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1-gYBO_RuefKG2vybnjM8fLx_ylMK_-Bp',
    },
    {
      name: 'Saksham',
      position: 'member',
      socials: 'https://github.com/sakshamyxdv',
      profile: 'https://drive.google.com/uc?export=view&id=1p2-9ZUKASjynB5JL-iw2OsWU2wo0aTY1',
    },
    {
      name: 'Sourav',
      position: 'member',
      socials: 'https://www.linkedin.com/in/sourav-maheswary-833a64175',   
      profile: 'https://drive.google.com/uc?export=view&id=1EMnnnZDPQCo9w0ZmmJ7x_-BV9i4zeibD',
    },
    {
      name: 'Srinivas',
      position: 'member',
      socials: 'https://github.com/srinivasg0',
      profile: 'https://drive.google.com/uc?export=view&id=1yRsddVkWowQ5ag-l5CZt6njSCx43OB75',
    },
    {
      name: 'Suhani',
      position: 'member',
      socials: 'https://github.com/Suhanikheterpal',
      profile: 'https://drive.google.com/uc?export=view&id=1kHFFIkbfCRqb-ceE2u0k0z2a0g3dXtbm',
    },
    {
      name: 'Vidhi',
      position: 'member',
      socials: 'https://www.linkedin.com/in/vidhi-singh-75963024a',        
      profile: 'https://drive.google.com/uc?export=view&id=1uEx2zq-qfrUNjpRp9C3Q1vW8ahtwZqyE',
    },
    {
      name: 'Virprakaash',
      position: 'member',
      socials: 'https://www.linkedin.com/in/virprakaash-roy-312661191/',   
      profile: 'https://drive.google.com/uc?export=view&id=1eZMMI4at5PLXxuWOQ9Ne6DdzFP8Eko4B',
    },
    {
      name: 'Yashwanth',
      position: 'member',
      socials: 'https://github.com/YashwanthVN',
      profile: 'https://drive.google.com/uc?export=view&id=18oCyH5IDCC1L0HHEiOZM1f56IedAfg14',
    }
  ];
  const ops: any[] = [
    {
      name: 'Aman',
      position: 'member',
      socials: 'https://www.linkedin.com/in/aman-parida-794b19251',
      profile: 'IMG-20211102-WA0017~3 - AMAN PARIDA (RA2211009010228).jpg'
    },
    {
      name: 'Anirban',
      position: 'member',
      socials: 'https://www.linkedin.com/in/anirban-chakrabarty-29976a170',
      profile: 'https://drive.google.com/uc?export=view&id=1JmwSn_XYtdo7Kc2hloiH1kWGT8T0Vbgo'
    },
    {
      name: 'Anushka',
      position: 'member',
      socials: 'https://www.linkedin.com/in/anushka-jha-843256233',
      profile: 'https://drive.google.com/uc?export=view&id=1nYsyjfDiE2e5eAgaQSEcOmQPrm2wVG_c'
    },
    {
      name: 'Arnav',
      position: 'member',
      socials: 'https://github.com/arnav5246',
      profile: 'https://drive.google.com/uc?export=view&id=1XKKND9FnkM7SPST7wFCGMtwqv2qBQe5D'
    },
    {
      name: 'Ayush',
      position: 'member',
      socials: 'https://github.com/coderayush31',
      profile: 'https://drive.google.com/uc?export=view&id=1jbpiMF_whoIuKIi5ADpPGCfoMhpoIhLQ'
    },
    {
      name: 'Ayushman',
      position: 'member',
      socials: 'https://www.linkedin.com/in/ayushman-anal-960737252',
      profile: 'https://drive.google.com/uc?export=view&id=1P6tJ9YsMEH1X5wukAmPVSmX1pLVI-j_J'
    },
    {
      name: 'Diya',
      position: 'member',
      socials: 'https://www.linkedin.com/in/diya-sharma-925a67257',
      profile: 'https://drive.google.com/uc?export=view&id=1jZ1xfHebWSwatIpXRBgOkpXnUE6LHTj-'
    },
    {
      name: 'Hamza',
      position: 'member',
      socials: 'https://www.linkedin.com/in/mohamed-hamza-4ab14a24b',
      profile: 'https://drive.google.com/uc?export=view&id=1qmN-ghrDjwNOjIfxzIt88-8MAs0rcQJQ'
    },
    {
      name: 'Jai',
      position: 'member',
      socials: 'https://www.linkedin.com/in/jai-singh-708373250',
      profile: 'https://drive.google.com/uc?export=view&id=16-7gKwzgpg9ulLMMew-cGKfAOnOw1taU'
    },
    {
      name: 'Kanupriya',
      position: 'member',
      socials: 'https://www.linkedin.com/in/kanupriya-johari',
      profile: 'https://drive.google.com/uc?export=view&id=1MspSOgppZ2dRnXqq8FeRSbihPxN87c4A'
    },
    {
      name: 'Khushi',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=13bR9yiYOVlKBKT1EkpTOXIyhI3PUcBRx'
    },
    {
      name: 'Pouravi',
      position: 'member',
      socials: 'https://www.linkedin.com/in/pouravi-pawar-6918aa251/',
      profile: 'https://drive.google.com/uc?export=view&id=1-zRijgm_HNbikrbHJUlS-4_r1wkfAG4t'
    },
    {
      name: 'Prathmesh',
      position: 'member',
      socials: 'https://www.linkedin.com/in/prathamesh-sawant-a85341ab',
      profile: 'https://drive.google.com/uc?export=view&id=1xPCCpqScW4MRUPSz5uReBB9z3qHvwNQd'
    },
    {
      name: 'Raj',
      position: 'member',
      socials: 'https://www.linkedin.com/in/raj-kadakia-787056256',
      profile: 'https://drive.google.com/uc?export=view&id=1nNGHWSY-AkLJSdAcoLb6ATjvo8nuL-zM'
    },
    {
      name: 'Rytham',
      position: 'member',
      socials: 'https://github.com/rythamsaini',
      profile: 'https://drive.google.com/uc?export=view&id=1ReuzYbl_D2sTriUtO5OK3tQBwERq-vU0'
    },
    {
      name: 'Sahiti',
      position: 'member',
      socials: 'https://github.com/Sahitihas',
      profile: 'https://drive.google.com/uc?export=view&id=1xaIDrjXxwXMzKpM18WKlYQfoJbpD_fIx'
    },
    {
      name: 'Sargam',
      position: 'member',
      socials: 'https://github.com/SargamTripathi',
      profile: 'picture - SARGAM TRIPATHI (RA2111003011363).jpg'
    },
    {
      name: 'Shreya',
      position: 'member',
      socials: 'https://www.linkedin.com/in/shreya-chinnari-27a759255',
      profile: 'https://drive.google.com/uc?export=view&id=1akZkcv9lPDvK247SU5Q7-tcMAgXnubmO'
    },
    {
      name: 'Shubh',
      position: 'member',
      socials: 'https://www.linkedin.com/in/shubh-shah-a12a9924a/',
      profile: 'https://drive.google.com/uc?export=view&id=1DuOuOpRLIdlP2HWYwyFxd06f1aOjOflS'
    },
    {
      name: 'Soumya',
      position: 'member',
      socials: 'https://www.linkedin.com/in/soumya-haswani-0031411b6',
      profile: 'https://drive.google.com/uc?export=view&id=1TC47JrhuMHU6xtm7P9kjJZ3NO6CJDSIT'
    },
    {
      name: 'Soumya',
      position: 'member',
      socials: 'https://www.linkedin.com/in/soumya-upadhyay-175306258',
      profile: 'https://drive.google.com/uc?export=view&id=1ZkSCsDdlR6WpHg2mkcymWIOpps0hnaE6'
    },
    {
      name: 'Suchi',
      position: 'member',
      socials: 'http://www.linkedin.com/in/suchi-arora774000',
      profile: 'https://drive.google.com/uc?export=view&id=19f0tG0kbQlJcQGXxKA5gkvpwvrq4BK_S'
    },
    {
      name: 'Adnan',
      position: 'member',
      socials: 'https://www.linkedin.com/in/syed-adnan-hussainy-60920b223',
      profile: 'https://drive.google.com/uc?export=view&id=1i_lepzmIhROD7xEyX_tWsmjRw-bBset6'
    },
    {
      name: 'Tanmay',
      position: 'member',
      socials: 'https://github.com/Tanmay0909',
      profile: 'https://drive.google.com/uc?export=view&id=10u3ul79rtt0vJm5lNxW_N3Li9kNMigCF'
    },
    {
      name: 'Tuhina',
      position: 'member',
      socials: 'https://github.com/tuhina-tripathi',
      profile: 'https://drive.google.com/uc?export=view&id=1ewAy4M-jk87GSrAHixm7gh2CfcM2fuNx'
    },
    {
      name: 'Yash',
      position: 'member',
      socials: 'https://www.linkedin.com/in/yash-saini-3a56531b7',
      profile: 'https://drive.google.com/uc?export=view&id=1VQ71i0roomAZGnkJS7DTA2XVpq_2jLsl'
    },
    {
      name: 'Hazik',
      position: 'member',
      socials: 'https://github.com/hazik18',
      profile: 'https://drive.google.com/uc?export=view&id=1-rli2kzg3n1I3qdetQPisnPQj5VGeVM_'
    },
    {
      name: 'Hitartha',
      position: 'member',
      socials: 'https://www.linkedin.com/in/hitartha-dutta-569b3b250/',
      profile: 'IMG_20221120_181244_351 - Hitartha Dutta.jpg'
    },
    {
      name: 'Ishika',
      position: 'member',
      socials: 'https://github.com/im2532',
      profile: 'https://drive.google.com/uc?export=view&id=1Mq_N64yhgOvTQZSm3DQqb3fqP2ExLj-p'
    },
    {
      name: 'Jhalak',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1B6udNI18o36UwPTdm6jdwtvhrrW289z9'
    },
    {
      name: 'Labeeb',
      position: 'member',
      socials: 'https://www.linkedin.com/in/labeeb-khan-7627671aa',
      profile: 'https://drive.google.com/uc?export=view&id=1mnYF0rChS7zqNzcfX-9-PZL7SLvrJaal'
    },
    {
      name: 'Manikanta',
      position: 'member',
      socials: 'https://www.linkedin.com/in/puppala-manikanta-sai-patel',
      profile: 'https://drive.google.com/uc?export=view&id=1w6t4d1f9DoG2ImCTnxy8LqwoKbc9Vbal'
    },
    {
      name: 'Tanisha',
      position: 'member',
      socials: 'https://github.com/Tanisha9704',
      profile: 'https://drive.google.com/uc?export=view&id=1hEYkZbn01vB4mqCW_RBib83CTtut3oMo'
    },
    {
      name: 'Tiyasa',
      position: 'member',
      socials: 'https://github.com/tiyasakundu',
      profile: 'https://drive.google.com/uc?export=view&id=1kLEorICBCIsuehAcVFrJredeT0TAP-o6'
    },
    {
      name: 'Ayushi',
      position: 'member',
      socials: 'https://github.com/dreamcatcher1712',
      profile: 'https://drive.google.com/uc?export=view&id=1M1Od4h9ttCcHNkekqXdELDcy5LtTIFA3'
    },
    {
      name: 'Heer',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1FQbbmsOnBE6v2V9z3JU5ZnLS-uAj0qGd'
    },
    {
      name: 'Hershy',
      position: 'member',
      socials: '',
      profile: 'https://drive.google.com/uc?export=view&id=1hqb9rc8Zmd_NgiKmFnZiRVdZCDpg9hDK'
    },
    {
      name: 'Sayantani',
      position: 'member',
      socials: 'http://linkedin.com/in/sayantani-chattopadhyay-33b71b256',
      profile: 'https://drive.google.com/uc?export=view&id=15rE2-oZ06ztnWZHqYj2gjVs-6uM38ncf'
    },
    {
      name: 'Shradha',
      position: 'member',
      socials: 'https://github.com/Shradharai',
      profile: 'https://drive.google.com/uc?export=view&id=1BPnIi3UMVnHTghCVK-5cK3p9yi3VSQvy'
    },
    {
      name: 'Suhani',
      position: 'member',
      socials: 'https://www.linkedin.com/in/suhani-khanna-903a1122a/',
      profile: 'https://drive.google.com/uc?export=view&id=1R2gKKfNwKLGdKGk3TuTyy0AF0NEKk5Ui'
    },
    {
      name: 'Harish',
      position: 'member',
      socials: 'https://www.linkedin.com/in/sai-harish-07615a252',
      profile: 'https://drive.google.com/uc?export=view&id=1qosqJxrdJ04WCQyjHyZ6VjLNpnPvYoZk'
    }
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
