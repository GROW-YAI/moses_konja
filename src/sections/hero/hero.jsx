import React from "react";
import { heroBg } from "../../assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-0 flex items-center justify-center h-[70vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-0 text-center px-4 sm:px-6 lg:px-8">
        {/* Tagline container */}
        <div className="inline-block bg-white bg-opacity-90 px-4 py-2 mb-4 rounded-md shadow-md">
          <h5 className="text-sm sm:text-base md:text-lg font-semibold text-red-950">
            Empowering Smallholder Farmers
          </h5>
        </div>

        {/* Main heading */}
        <h1 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white leading-snug max-w-3xl mx-auto mb-6">
          Providing Hybrid Oil Palm Seedlings & Sustainable Agricultural Solutions
        </h1>

        {/* Call-to-action button */}
        <a href="#about">
          <button className="relative h-12 w-40 border border-red-950 bg-slate-300 text-red-950 font-medium shadow-lg transition-all duration-500 hover:text-white hover:shadow-red-950 overflow-hidden rounded-md">
            <span className="absolute inset-0 bg-red-950 scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
            <span className="relative z-10">LEARN MORE</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
