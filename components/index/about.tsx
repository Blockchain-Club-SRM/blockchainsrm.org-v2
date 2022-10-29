import verticalLine from "../../public/Vector 5.svg";
import horz from "../../public/Vector 6.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mt-14 flex justify-center flex-col gap-12 text-white md:max-w-[80%] mx-auto relative">
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
      <div className="lg:grid grid-cols-3 grid-rows-3 lg:max-h-52">
        <img
          src={horz.src}
          alt=""
          className="px-6 max-h-32 hidden lg:block col-start-1 col-end-3 row-span-2"
        />
        <h4 className="lg:-mt-12 ml-0 lg:-ml-[5%] xl:-ml-[15%] font-light leading-8 max-w-3xl col-start-2 row-span-2 col-span-2">
          Empowering Blockchain Professionals And Enthusiasts, And Instilling
          Knowledge To Be Trailblazers In The Industry. Providing Support And
          Guidance And Educating The Students With Latest Advancements In This
          Technology.
        </h4>
      </div>

      <h1 className="text-primary-blue font-bold mx-auto md:ml-24">
        Our Mission
      </h1>
      <div className="lg:grid grid-cols-3 grid-rows-3 lg:max-h-52">
        <img
          src={horz.src}
          alt=""
          className="px-6 max-h-32 hidden lg:block col-start-1 col-end-3 row-span-2"
        />
        <h4 className="lg:-mt-12 ml-0 lg:-ml-[5%] xl:-ml-[15%] font-light leading-8 max-w-3xl col-start-2 row-span-2 col-span-2">
          Providing Students With Opportunities And Projects On A Regular Basis.
          Educating Them On New Terms In Blockchain And Encouraging Them To
          Participate In Events, Hackathons, Ideathons And Conferences.{" "}
        </h4>
      </div>
      {/* Images */}
      <img
        src={verticalLine.src}
        alt=""
        className="absolute z-20 h-3/5 top-1/3 mt-8 px-6 hidden lg:block"
      />
      <img
        src="assets/mission-hand.png"
        alt=""
        className="absolute -right-48 scale-75 -z-10 bottom-[-20%]"
      />
      <img
        src="assets/vision-statue.png"
        alt=""
        className="absolute -right-48 scale-75 -z-10"
      />
    </div>
  );
};

export default AboutUs;
