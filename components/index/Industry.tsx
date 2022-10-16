import React from 'react'
const Industry = () => {


    const data = [
        {
          id: 1,
          name: "Monkey Ape",
          designation: "by @jsmith",
          img: "https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900",
          logo: "https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900",
        },
        {
          id: 1,
          name: "Moonfall",
          designation: "by @jsmith",
          img: "https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900",
          logo: "https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900",
        },
        
      ];
  return (
    <div className="mt-14 flex justify-center flex-col gap-12 text-white md:max-w-[80%] mx-auto relative">
         <h6 className="text-transparent bg-clip-text bg-subheading-gradient max-w-max self-center font-normal">
        supported by
      </h6>

      <h1 className="font-bold self-center">Industry Leaders</h1>
    <div className='md:flex justify-evenly '>
      {data.map((data, index) => (
            <div
              className=" mx-8 p-4 mt-5 overflow-hidden rounded-lg min-w-[20%] md:w-[35%] card"
              key={index}
            >
              <img
                className="mx-auto  rounded-lg"
                src={data.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-md  teamName flex ">
                 <img src={data.logo} alt=""  className='rounded-2xl w-9 mx-3'/>
                {data.name}
                <br />
                {data.designation}
              </p>
               
            </div>

          ))}
        </div>
    </div>
  )
}

export default Industry