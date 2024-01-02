"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-4">
              Hello I'm{"  "}
            </span>
            <TypeAnimation
              sequence={["Shristy", 1000, " a Software Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl ">
            Software Engineer dedicated to improving skills through hands-on
            learning and development work. Proficient in mobile and desktop
            development environments.
          </p>
          <div>
            <button className="px-5 py-2 rounded-full w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-trasparent hover:bg-slate-800 text-white  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full">
                {" "}
                Download CV{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[300px] lg:w-[300px] lg:h-[350px] relative">
            <Image
              src="/Images/profile.png"
              alt="Profile Picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
