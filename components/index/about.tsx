import verticalLine from "../../public/Vector 5.svg";
import horz from "../../public/Vector 6.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mt-14 flex justify-center flex-col gap-12 text-white md:max-w-[80%] mx-auto relative">
      <img
        src={verticalLine.src}
        alt=""
        className="absolute z-20 h-3/5 top-1/3 mt-8 px-6 hidden md:block"
      />

      <img
        src={horz.src}
        alt=""
        className="absolute z-20 max-h-32 top-2/4 mt-8 px-6 hidden md:block"
      />

      <img
        src={horz.src}
        alt=""
        className="absolute z-20 max-h-32 bottom-12 mt-8 px-6 hidden md:block"
      />

      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
        Everything About our Club
      </h6>

      <h1 className="font-bold self-center">About Us</h1>

      <h4 className="flex justify-center mt-6 text-center bg-about-gradient rounded-lg p-8 font-light leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>

      <h1 className="text-primary-blue font-bold mx-auto md:mx-0 md:ml-24">
        Our Vision
      </h1>
      <h4 className="md:ml-[20%] font-light leading-8 max-w-3xl">
        Empowering Blockchain Professionals And Enthusiasts, And Instilling
        Knowledge To Be Trailblazers In The Industry. Providing Support And
        Guidance And Educating The Students With Latest Advancements In This
        Technology.
      </h4>

      <h1 className="text-primary-blue font-bold mx-auto md:ml-24">
        Our Mission
      </h1>
      <h4 className="md:ml-[20%] font-light leading-8 max-w-3xl">
        Providing Students With Opportunities And Projects On A Regular Basis.
        Educating Them On New Terms In Blockchain And Encouraging Them To
        Participate In Events, Hackathons, Ideathons And Conferences.{" "}
      </h4>
    </div>
  );
};

export default AboutUs;
