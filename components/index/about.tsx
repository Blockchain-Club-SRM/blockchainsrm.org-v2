import React from "react";

const AboutUs = () => {
    return(
        <div className="mt-14 flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#F81DFB]">
                    Everything About our Club
                </div>
            </div>
            
            <div className="font-semiBold text-6xl text-white flex justify-center mt-6">
                About Us
            </div>

            <div className="flex justify-center text-white text-3xl font-light mt-6">
                <div className="bg-white bg-opacity-10 rounded-lg py-6 px-[200px] tracking-wider">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

            <div className="text-6xl text-[#00D1FF] mt-24 ml-[200px]">
                Our Vision
                <div className="text-3xl mt-24 px-[100px] text-white font-light tracking-wider">
                    Empowering Blockchain Professionals And Enthusiasts, And Instilling Knowledge To Be Trailblazers In The Industry. Providing Support And Guidance And Educating The Students With Latest Advancements In This Technology.
                </div>
            </div>

            <div className="text-6xl text-[#00D1FF] mt-24 ml-[200px]">
                Our Mission
                <div className="text-3xl mt-24 px-[100px] text-white font-light tracking-wider">
                    Providing Students With Opportunities And Projects On A Regular Basis. Educating Them On New Terms In Blockchain And Encouraging Them To Participate In Events, Hackathons, Ideathons And Conferences.                </div>
            </div>

            <div className="mt-10">
                Blank Space, remove when adding components below
            </div>
        </div>
    )
}

export default AboutUs;