import React from "react";
import p from "../../public/assets/partner1.png"
const Partners = () => {
  const data = [
    {
      id: 1,
      img: "https://drive.google.com/uc?export=view&id=1MDmUn7HhOGM9cDCY0DqCOyfbh8Ku9IRv",
    },
    {
      id: 2,
      img: "https://drive.google.com/uc?export=view&id=1Z87FYvvzl3Zvvrpr9iR5k87iJpm9zisb",
    },
    {
      id: 3,
      img: "https://drive.google.com/uc?export=view&id=1lsJjmuog5fFVAif7OlOoO84DNdyo0YyC",
    },
    {
      id: 4,
      img: "https://drive.google.com/uc?export=view&id=1vXnPs1KToH7gqY1-6loRBJ_We_Y6yA9J",
    },
  ];
  return (
    <div className="my-14 flex justify-center flex-col gap-12 text-white md:max-w-[100%] mx-auto relative">
      <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
      Our partners and sponsors for the club 
      </h6>

      <h1 className="font-bold self-center">Our Partners</h1>
      <div className="md:flex ">
        {data.map((data, index) => (
             <div className="mx-12 md:my-12 ">
                   <img  className="mx-auto" src={data.img} alt="hello" />
             </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
