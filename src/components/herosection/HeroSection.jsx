import React from "react";
import AvatarGroup from "../avatargroup/AvatarGroup";
import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex px-4 flex-col sm:justify-center max-md:gap-20 md:flex-row pt-30 sm:pt-40 sm:px-4 md:px-16 lg:px-24 xl:px-32    w-full h-[65vh] sm:h-[80vh] bg-[url('/hero-wellness.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col sm:items-center space-y-4  sm:space-y-6">
        <AvatarGroup />
        <h1 className="sm:text-center text-2xl text-left sm:text-5xl font-bold  md:text-6xl  max-w-6xl text-white">
          Rediscover Balance with Ayurveda, Pranic Healing & Vedic Wisdom
        </h1>
        <p className="sm:text-center  text-sm sm:text-xl  max-w-4xl text-gray-100 ">
          A Holistic Wellness Experience That Blends Ayurveda, Pranic Energy,
          and Vedic Astrology to Transform Your Entire Being.
        </p>
        <div className="flex items-center gap-4  ">
          <button className="bg-green-800 text-[.9rem] p-2   sm:text-sm cursor-pointer  text-white font-semibold sm:px-5 sm:py-3 rounded">
            Book Consultation
          </button>
          <button className=" text-[.9rem] cursor-pointer   bg-[#b9f9b5]  duration-300   sm:text-sm p-2 font-semibold  text-green-800 sm:px-5 sm:py-3 rounded">
            Explore Services
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;
