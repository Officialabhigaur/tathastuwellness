import React from "react";
import AvatarGroup from "../avatargroup/AvatarGroup";
import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col sm:justify-center max-md:gap-20 md:flex-row pt-25 sm:pt-40 sm:px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col sm:items-center space-y-4  sm:space-y-6">
        <AvatarGroup />
        <h1 className="sm:text-center text-2xl text-left sm:text-5xl font-bold  md:text-6xl  max-w-6xl ">
          Rediscover Balance with Ayurveda, Pranic Healing & Vedic Wisdom
        </h1>
        <p className="sm:text-center text-gray-600 text-sm sm:text-xl  max-w-4xl ">
         A Holistic Wellness Experience That Blends Ayurveda, Pranic Energy, and Vedic Astrology to Transform Your Entire Being.
        </p>
        <div className="flex items-center gap-4  ">
          <button className="bg-green-800 text-[.9rem] p-2  sm:text-sm cursor-pointer  text-white sm:px-5 sm:py-3 rounded">
            Book Consultation
          </button>
          <button className="border text-[.9rem] border-green-800 cursor-pointer text-green-800 sm:text-sm p-2  sm:px-5 sm:py-3 rounded">
            Explore Services
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
