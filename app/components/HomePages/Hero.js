"use client";
import Link from "next/link";
import React from "react";
import { AttentionSeeker, Fade, Hinge, Slide } from "react-awesome-reveal";
import { BiRightArrowAlt } from "react-icons/bi";

function Hero() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/graduates.png')] bg-cover bg-center z-0" />

      {/* Black overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 " />

      {/* Content goes here */}
      <div className="relative  flex flex-col justify-center  min-h-screen  pt-20 py-20 px-6 md:px-16">
        <div className="grid grid-cols-3 gap-4 w-full max-w-6xl ">
          <div className="col-span-2">
            <Slide direction="up">
              <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold capitalize">
                EMPOWERING{" "}
                <span className="text-teal-500 capitalize">
                  WOMEN AND GIRLS{" "}
                </span>{" "}
                IN NIGERIA THROUGH DIGITAL ENTREPRENEURSHIP
              </h1>
            </Slide>

            <Slide direction="up">
              <div className="mt-6 space-y-2 text-slate-200">
                <p className="text-lg font-medium">
                  <span className="text-white">Presented by:</span> Newton
                  Academy
                </p>
                <p className="text-lg font-medium">
                  <span className="text-white">Date:</span> Tuesday, March 25th,
                  2025
                </p>
              </div>
            </Slide>
            {/* CTA Button */}
            <button className="mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full shadow-md transition duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
