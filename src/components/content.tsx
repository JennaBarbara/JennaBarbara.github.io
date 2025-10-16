export default function Content () {


return (

      <div className="bg-cyan-50/30  rounded-xl p-10 grid grid-cols-1 gap-4 max-w-5xl text-slate-600 text-left text-sm" >

        <h2 className="text-2xl ">About</h2>
        <p>Hi, how are you?  I’m Jenna, a software engineer living in downtown Toronto. I’ve been working as a frontend leaning fullstack developer at startups and growth-stage companies for the past few years. Those are the kind of roles I flourish in. I thrive when working in multidisciplinary teams where I can interface directly with stakeholders to create optimal solutions to match the needs of end users. 

        </p>
        <p>
          Outside of my professional life, I find myself invested in a broad range of hobbies. Lately I’ve been into: 
        </p>
        
        <div className="flex flex-col pl-2 gap-4" >
        <div className="flex flex-col gap-1">
          <p className="font-medium"> Digital art</p>
          <p>
            Right now I’ve been mostly using Clip Studio Paint. I like the program’s vector tools for being able to make clean looking illustrations without needing to spend too much time doing cleanup. 
          </p>
        </div>

         <div className="flex flex-col gap-1">
         <p className="font-medium">
            Sewing 
         </p>
         <p>
           I mostly sew wearable garments for myself from vintage and deadstock fabric. My favourite way to buy fabric is through the Textile Museum of Canada’s Textile Reuse Program. I sometimes find very high quality fabrics that might have otherwise been discarded at low prices through the program. 
         </p>
         </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">
                Running 
            </p>
        <p>
          I find running to be a great way to meditate and explore Toronto’s recreational trails

            </p>
            
         </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">
            Boardgames & Tabletop RPGs
          </p>
        <p>
        My play group and I recently finished a playthrough of the Curse of Strahd D&D campaign. We’ve been playing through our respective board game collections as we plan our next campaign. My current go-to boardgame is Railway Inc. 
            </p>
            
         </div>
         </div>

     

        </div>

)
};
