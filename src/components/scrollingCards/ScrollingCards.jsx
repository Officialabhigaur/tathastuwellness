"use client";
import { useState } from "react";

const ScrollingCards = () => {
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Explore Local Places with Guided Travel Support",
      image: "/scroll1.jpeg",
    },
    {
      title: "Enjoy Peaceful Evenings & Dinner Together",
      image: "/scroll2.jpeg",
    },
    {
      title: "Transformative Workshops & Hands-On Learning",
      image: "/scroll3.jpeg",
    },
    {
      title: "Holistic Energy & Healing Therapies",
      image: "scroll4.jpeg",
    },

    {
      title: "Authentic Ayurvedic Consultations",
      image: "/scroll5.jpeg",
    },
    {
      title: "Enjoy Peaceful Evenings & Dinner Together",
      image: "/scroll7.jpeg",
    },
    {
      title: "Transformative Workshops & Hands-On Learning",
      image: "/scroll6.jpeg",
    },
    {
      title: "Holistic Energy & Healing Therapies",
      image: "scroll4.jpeg",
    },
  ];

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div className="px-3">
        <h2 className="text-2xl text-green-900  sm:text-4xl font-semibold text-center mx-auto">
          A Complete Pathway to Holistic Wellness
        </h2>
        <p className="text-sm text-slate-500 text-justify sm:text-center mt-2 max-w-6xl mx-auto">
          Experience a unique blend of Ayurveda, Pranic Healing, Vedic
          Astrology, and traditional Indian workshops — all designed to restore
          balance, vitality, and inner peace. Our integrated approach addresses
          the mind, body, and spirit, offering natural techniques, personalized
          guidance, and transformative healing experiences.
        </p>
      </div>
      <div
        className="overflow-hidden w-full relative max-w-8xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData].map((card, index) => (
              <div
                key={index}
                className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};

export default ScrollingCards;
