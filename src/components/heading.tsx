
import LinkButton from "@/components/link-button";
import headshot from "@/components/assets/headshot.png";
import Image from 'next/image'
import { Doto } from 'next/font/google'

const doto = Doto({
  subsets: ["latin"],
  weight: "variable",
  axes: ["ROND"],
  
})



export default function Heading () {

  const nameStyle = doto.className +" drop-shadow-[0_2.2px_2.2px_rgba(71,85,105,0.8)] [font-variation-settings:'ROND'100] font-black text-5xl md:text-7xl"

return (

    <div className="place-items-center grid grid-cols-1 gap-4 md:max-w-md font-bold">
        <div>
          <h1 className={"skew-y-3 skew-x-12 " + nameStyle}>
            Jenna
          </h1>
          <h1 className={"-skew-y-2 -skew-x-12 " + nameStyle}>
            Christensen
          </h1>
        </div>
        <div className="flex items-center drop-shadow-[0_1.5px_1.5px_rgba(71,85,105,0.8)] justify-center">
           <Image
            className="rounded-full"
            src={headshot}
            width={250}
            height={250}
            alt="headshot"
          />
        </div>
          
        <p className="drop-shadow-[0_1.2px_1.2px_rgba(71,85,105,0.8)]  text-white text-xl">
          Toronto Based Software Engineer
        </p> 
        <div className="flex flex-col md:flex-row" >
        <LinkButton text="LinkedIn" href="https://www.linkedin.com/in/jenna-christensen-0731b1b1/"/> 
        <LinkButton text="GitHub" href="https://github.com/JennaBarbara" />
        <LinkButton text="Codeberg" href="https://codeberg.org/JennaBarbara" />
        </div>
      </div>
)
};