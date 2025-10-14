"use client"

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/shadcn-io/background-gradient-animation";
import { Github } from 'lucide-react';

export default function BackgroundGradientAnimationDemo() {
  const backgroundStart = "rgb(173, 152, 177)"
  const backgroundEnd = "rgb(190, 209, 255)"
  const colorA = "220, 224, 233"
  const colorB =  "217, 228, 255"
  const colorC = "220, 224, 233"
  const colorD = "217, 228, 255"
  const colorE = "220, 224, 233"


  return (
    <BackgroundGradientAnimation
          gradientBackgroundStart = {backgroundStart}
          gradientBackgroundEnd = {backgroundEnd}
          firstColor = {colorA}
          secondColor = {colorB}
          thirdColor = {colorC}
          fourthColor = {colorE}
          fifthColor = {colorB}
          pointerColor = {colorD}
          blendingValue = "hard-light"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center">
       <div className="grid grid-cols-1 gap-4 max-w-md">
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-slate-800/20 to-slate-800/80 text-7xl">
          Jenna Christensen
        </h1>
        <p className="text-slate-800/80 text-xl">
          Toronto Based Frontend Engineer
        </p> 
          <a className="mt-6 bg-white/50 hover:bg-white focus:outline-offset-2 text-slate-500 font-bold py-2 px-4 rounded text-md" href="https://www.linkedin.com/in/jenna-christensen-0731b1b1/">
            LinkedIn
          </a>
             <a className="bg-white/50 hover:bg-white focus:outline-offset-2 text-slate-500 font-bold py-2 px-4 rounded text-md" href="https://github.com/JennaBarbara">
           GitHub
          </a>
             <a className="bg-white/50 hover:bg-white focus:outline-offset-2 text-slate-500 font-bold py-2 px-4 rounded text-md" href="https://codeberg.org/JennaBarbara">
            Codeberg
          </a>
        
       </div>
      </div>
    </BackgroundGradientAnimation>
  );
}