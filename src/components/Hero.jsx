import React from "react";
import { FaStar } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { IoMdArrowForward } from "react-icons/io";
import heroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className=" container mx-auto pt-44 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      {/* left col  */}
      <div className="w-full md:w-1/2 space-y-8 ">
        <div className=" flex justify-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full transition-colors hover:bg-gray-100">
          <span>
            <FaStar className=" text-blue-700 hover:text-amber-600 size-5 group-hover:scale-110 transition-transform" />
          </span>
          <span className=" text-sm font-medium ">
            Jump start your growthhh
          </span>
        </div>

        {/* heading  */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-1.5">
          Lorem amet consectetur
          <span className="text-blue-600 relative inline-block">
            {" "}
            startup to fortune 500{" "}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
          {/* Removed <br /> and added a space */}
          adipisicing{" "}
          <span className="inline-block align-middle ml-2 animate-pulse">
            <FcAlarmClock />
          </span>
        </h1>

        <p className=" text-gray-600 text-lg md:text-xl max-w-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          repudiandae placeat accusamus! Minus, explicabo non.
        </p>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            className=" flex-1 px-6 py-4 border border-gray-200 focus:ring-blue-200 transition-all rounded-xl focus:outline-none focus:border-blue-600"
          />
          <button className=" px-8 py-5 bg-blue-600 text-white rounded-xl cursor-pointer transition-all hover:shadow-lg  hover:shadow-blue-200">
            <IoMdArrowForward />
          </button>
        </div>
      </div>
      {/* right col  */}
      <div className=" w-full md:w-1/2 md:mt-0 mt-16 pl-0 md:pl-12">
        <div className=" relative">
          <img
            src={heroImg}
            alt=""
            className=" transition-transform duration-300 rounded-lg relative z-10 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
