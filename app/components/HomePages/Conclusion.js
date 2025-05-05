"use client"
import React from "react";
import {  Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

function Conclusion() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-52 px-6 md:px-16 text-white"
      style={{
        backgroundImage: "url('/images/conclusion.png')", // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-[#000000ab] bg-opacity-60" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <Slide direction="up">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
        INVESTING IN GIRLS MEANS INVESTING IN NATIONS
        </h2>
        </Slide>
        <Typewriter
            words={[
              "This is more than training — it’s a mission to lift women and girls out of digital exclusion.",
              "When one woman is empowered, her whole community benefits.",
              "Let’s give them the tools to thrive.",
              "Digital entrepreneurship can be the path that lifts millions out of poverty.",
              "Together, we can.",
            ]}
            loop={3}
            cursor
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={20}
            delaySpeed={4000}
          />
        
        {/* <Slide direction="up">
        <p className="text-lg md:text-md mb-6">
        This is more than training — it’s a mission to lift women and girls out of digital exclusion. When one woman is empowered, her whole community benefits.
        </p>
        </Slide>
        <Slide direction="up">
        <p className="text-lg md:text-md">
        Let’s give them the tools to thrive. Digital entrepreneurship can be the path that lifts millions out of poverty.
        </p>
        <p className="text-lg md:text-md mt-6 italic">Together, we can.</p>
        </Slide> */}

       
       
      </div>
    </div>
  );
}

export default Conclusion;