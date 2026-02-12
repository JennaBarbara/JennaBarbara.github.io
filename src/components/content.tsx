import Card from "@/components/card"

export default function Content () {


return (

    <div className="flex flex-col items-center gap-12 pb-12">
        <Card title="About" >
   <p>
     My name is Jenna, and I am a software engineer based in downtown Toronto. I have spent most of my career working as a frontend-focused full stack engineer at startups and mid-level companies.I thrive in environments where I can take ownership and interface with real-world problems.
   </p>
   <p>
    I enjoy working in multidisciplinary teams and value the opportunity to collaborate directly with stakeholders to translate ideas into user centered solutions that thoughtfully and effectively meet the needs of end users.
    </p>

        


    </Card>
    <Card title="Personal Projects">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          Number Pyle
        </h3>
        <p>
          Number Pyle was originally conceived of as a paper and dice game by a Toronto game designer. The game involves trying to make vertical/horizontal lines between matching numbers on a grid. I adapted the rule-set to make it available as a browser game using React and Typescript. I also extended the rule-set to create a few different game modes that took advantage of the digital format. The game can be played <a className="text-slate-600 font-bold" href="https://jennabarbara.github.io/number-pyle/">online here</a> and the game source code can be found <a className="text-slate-600 font-bold" href="https://github.com/JennaBarbara/number-pyle">here</a>.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          The Freesewing Sophie Slip 
        </h3>
        <p>
          I contributed to Freesewing, an open source JavaScript library for garment construction by developing a customizable dress design which conforms to the body measurements provided by users. The design, which I titled the Sophie Slip, can be found on <a className="text-slate-600 font-bold" href="https://freesewing.eu/designs/sophie/">the official FreeSewing website</a> and a branch with my code contributions can be found <a className="text-slate-600 font-bold" href="https://codeberg.org/JennaBarbara/freesewing/src/branch/sophie-slip-design">here</a>. 
        </p>
      </div>
         <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          The Zine Machine
        </h3>
        <p>
          The Zine Machine is a web app I created that allows users to convert their images files into a PDF for printing classic 8 page zines. This 8 page zine format is popular in the indie comics community, but can be a fit annoying to format digitally. I built the app using React and Typescript. I used the jsPDF library for PDF generation, and the dnd kit library to enable users to reorder their images with drag and drop. The app can be found <a className="text-slate-600 font-bold" href="https://jennabarbara.github.io/zine-machine/">here</a> and the source code can be found <a className="text-slate-600 font-bold" href="https://github.com/JennaBarbara/zine-machine">here</a>.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">
          Raccoons to Riches
        </h3>
        <p>
          I made the art assets, in addition to some UI design and code contributions on an upcoming videogame, called Raccoons to Riches. The game was built with the Godot Engine. It is a roguelike deckbuilder about running an item shop in a fantasy setting. The steam page can be found <a className="text-slate-600 font-bold" href="https://store.steampowered.com/app/3778620/Raccoons_to_Riches/">here</a>. 
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
