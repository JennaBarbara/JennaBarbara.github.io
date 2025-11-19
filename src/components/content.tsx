import Card from "@/components/card"

export default function Content () {


return (

    <div className="flex flex-col items-center gap-12 pb-12">
        <Card title="About" >
        <p>Hi, how are you?  I&apos;m Jenna, a software engineer living in downtown Toronto. I&apos;ve been working as a frontend leaning fullstack developer at startups and growth-stage companies for the past few years. Those are the kind of roles I flourish in. I thrive when working in multidisciplinary teams where I can interface directly with stakeholders to create optimal solutions to match the needs of end users. 

        </p>
  
        


    </Card>
    <Card title="Personal Projects">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          Number Pyle
        </h3>
        <p>
          Number Pyle was originally conceived of as a paper and dice game by a Toronto game developer. The game involves trying to make vertical/horizontal lines between matching numbers on a grid. I adapted it into a browser game using React and Typescript. The game can be played <a className="text-slate-600 font-bold" href="https://jennabarbara.github.io/number-pyle/">online here</a> and the game source code can be found <a className="text-slate-600 font-bold" href="https://github.com/JennaBarbara/number-pyle">here</a>.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          The Freesewing Sophie Slip 
        </h3>
        <p>
          Freesewing is an open-source platform for generating made-to-measure sewing patterns. The designs the patterns are based on are written as javascript code. I wanted to sew myself a slip dress, so I decided to try using the FreeSewing API to draft a new design. The Sophie Slip can be found on the official FreeSewing website,  <a className="text-slate-600 font-bold" href="https://freesewing.eu/designs/sophie/">here</a> and  a branch with my code contributions can be found <a className="text-slate-600 font-bold" href="https://codeberg.org/JennaBarbara/freesewing/src/branch/sophie-slip-design">here</a>. 
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          Raccoons to Riches
        </h3>
        <p>
          I made all of the art assets and some limited UI design and code contributions on this upcoming videogame, built with the Godot Engine. It&apos;s a roguelike deckbuilder about running an item shop in a fantasy setting. The steam page can be found <a className="text-slate-600 font-bold" href="https://store.steampowered.com/app/3778620/Raccoons_to_Riches/">here</a>. 
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          This Is Your Life
        </h3>
        <p>
        This project was a simple web app for automatically generating a character backstory following the “This is your Life” rules from the supplementary D&D sourcebook “Xanathar&apos;s Guide to Everything 5e”. I made this back when I was first learning Angular, so it&apos;s pretty barebones, but it&apos;s still a fun little tool if you&apos;re into tabletop RPGs. The app can be found <a className="text-slate-600 font-bold" href="https://jennabarbara.github.io/This-Is-Your-Life/">here</a>. 
        </p>
      </div>

    </Card>
    <Card title="Hobbies">
       <p>
          Outside of my professional life, I find myself invested in a broad range of hobbies. Lately I&apos;ve been into: 
        </p>
        
        <div className="flex flex-col pl-2 gap-4" >
        <div className="flex flex-col gap-1">
          <p className="font-medium"> Digital art</p>
          <p>
            Right now I&apos;ve been mostly using Clip Studio Paint. I like the program&apos;s vector tools for being able to make clean looking illustrations without needing to spend too much time doing cleanup. 
          </p>
        </div>

         <div className="flex flex-col gap-1">
         <p className="font-medium">
            Sewing 
         </p>
         <p>
           I mostly sew wearable garments for myself from vintage and deadstock fabric. My favourite way to buy fabric is through the Textile Museum of Canada&apos;s Textile Reuse Program. I sometimes find very high quality fabrics that might have otherwise been discarded at low prices through the program. 
         </p>
         </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">
                Running 
            </p>
        <p>
          I find running to be a great way to meditate and explore Toronto&apos;s recreational trails

            </p>
            
         </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">
            Boardgames & Tabletop RPGs
          </p>
        <p>
        My play group and I recently finished a playthrough of the Curse of Strahd D&D campaign. We&apos;ve been playing through our respective board game collections as we plan our next campaign. My current go-to boardgame is Railway Inc. 
            </p>
            
         </div>
         </div>

    </Card>
    </div>


)
};
