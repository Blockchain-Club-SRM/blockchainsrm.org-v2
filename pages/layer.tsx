import Image from "next/image"
import LayerHeader from "../components/shared/layerheader"
import ninenine from "../public/99.png"
import text from "../public/layertext.png"
import ship from "../public/ship.png"
import Link from "next/link"

export default function Layer(){
    return(
        <div className="min-h-screen bg-cover bg-[url(../public/layerbg.png)]">
            <LayerHeader/>
            <div className="main flex flex-col">

            <Image alt="layer" src={text} className="self-center mt-16"/>
            <Image alt="ship" src={ship} className="absolute top-[22rem] -left-5 w-[83rem]" />
            <Image alt="99" src={ninenine} className=" self-center mt-[40rem]" />
            <div className="buttons flex mt-16 self-center gap-14 mb-72">
            <Link  href="https://layer-2.devfolio.co/" >  <h1 className="bg-[#849fa2] hover:scale-110 transition-transform h-16 backdrop-blur-sm w-72 text-center p-4 rounded-full bg-opacity-50 tracking-[3.38px] border-2 border-[#d2cccc] font-Montserrat text-white text-lg ">Devfolio</h1>  </Link>
            <Link  href="https://layer-2.devfolio.co/" >  <h1 className="bg-black h-16 hover:scale-110 transition-transform backdrop-blur-sm w-72 text-center p-4 rounded-full bg-opacity-30 tracking-[3.38px] border-2 border-[#d2cccc] font-Montserrat text-white text-lg ">Learn More</h1>  </Link>
            </div>
            </div>
        </div>
    )
}