
import LinkButton from "@/components/link-button";
import headshot from "@/components/assets/IMG_8937 2.png";
import Image from 'next/image'


export default function Heading () {





return (

    <div className="place-items-center grid grid-cols-1 gap-4 max-w-md font-bold mt-20">
        <div className="flex items-center justify-center">
           <Image
            className="rounded-full"
            src={headshot}
            width={250}
            height={250}
            alt="headshot"
          />
        </div>
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/40 to-white/90 text-5xl">
          Jenna Christensen
        </h1>
        <p className="text-white text-xl">
          Toronto Based Software Engineer
        </p> 
        <div className="flex flex-col md:flex-row" >
        <LinkButton text="LinkedIn" href="https://www.linkedin.com/in/jenna-christensen-0731b1b1/"/> 
        <LinkButton text="GitHub" href="https://github.com/JennaBarbara" />
        <LinkButton text="Codeberg" href="https://codeberg.org/JennaBarbara" />
        <LinkButton text="Bluesky" href="https://bsky.app/profile/jenbarb.bsky.social" />
        </div>


      </div>
)
};