"use client"

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/shadcn-io/background-gradient-animation";

import Heading from "@/components/heading";
import Content from "@/components/content";

export default function BackgroundGradientAnimationDemo() {
  const backgroundStart = "rgb(96, 134, 199)"
  const backgroundEnd = "rgb(199, 210, 240)"
  const colorA = "165, 202, 216"
  const colorB =  "217, 228, 255"



  return (
 
    <BackgroundGradientAnimation
          gradientBackgroundStart = {backgroundStart}
          gradientBackgroundEnd = {backgroundEnd}
          firstColor = {colorA}
          secondColor = {colorB}
          thirdColor = {colorA}
          fourthColor = {colorA}
          fifthColor = {colorB}
          pointerColor = {colorA}
          blendingValue = "soft-light"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white   text-3xl text-center overflow-auto">
        <div className="flex flex-col items-center justify-center gap-12 m-10">
          <Heading />
          <Content />
        </div>
      </div>
      </BackgroundGradientAnimation>
     
    

  );
}