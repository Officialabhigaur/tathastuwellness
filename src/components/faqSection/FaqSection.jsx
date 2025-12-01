"use client";
import { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Ayurveda and how can it help me?",
      answer:
        "Ayurveda is an ancient Indian science of natural healing that focuses on balancing the body, mind, and spirit. Through diet, lifestyle, herbs, therapies, and daily routines, Ayurveda helps improve digestion, immunity, mental clarity, sleep, and overall well-being.",
    },
    {
      question: "What is included in an Ayurvedic consultation?",
      answer:
        "An Ayurvedic consultation includes pulse diagnosis (Nadi Pariksha), dosha assessment, lifestyle analysis, and personalized health recommendations. The practitioner identifies imbalances in your body and suggests diet, herbs, routines, and treatments for restoring balance.",
    },
    {
      question: "What is Pulse Diagnosis (Nadi Pariksha)?",
      answer:
        "Pulse diagnosis is a traditional Ayurvedic method where the practitioner reads the pulse to understand your doshas, body constitution, stress level, digestion strength, and overall health. It helps detect imbalances before they become physical symptoms.",
    },
    {
      question: "What is Pranic Healing, and how does it work?",
      answer:
        "Pranic Healing is an energy-based healing technique that uses prana (life energy) to cleanse, balance, and energize the body. Practitioners work on the aura and chakras through scanning, balancing, and energy alignment—without physical touch.",
    },
  ];
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <div className="max-w-3xl   mx-auto flex flex-col items-center justify-center px-4 md:px-0">
        <p className="text-green-800 text-sm font-medium">FAQ's</p>
        <h1 className="text-2xl sm:text-3xl text-green-900 font-semibold text-center">
          Looking for answer?
        </h1>

        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-3xl ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqSection;
