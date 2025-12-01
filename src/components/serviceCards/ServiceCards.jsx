import { CircleCheckBig } from "lucide-react";

export default function ServiceCards() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <div>
        <h2 className="text-2xl text-green-900  sm:text-4xl  font-semibold text-center ">
          Our Services
        </h2>
        <p className="text-sm text-slate-500 text-center  mt-2 max-w-6xl mx-auto">
          We offer a diverse range of holistic services that blend ancient
          Indian wisdom with modern well-being practices, helping you restore
          balance, gain deeper insight, and experience true harmony in your
          body, mind, and spirit. Through Ayurveda, Pranic Healing, Vedic
          Astrology, and experiential workshops, we guide you on a
          transformative journey toward health, clarity, and inner peace.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
          <div className="max-w-90 w-full hover:-translate-y-0.5 transition duration-300">
            <img className="rounded-xl" src="/scroll3.jpeg" alt="" />
            <h3 className="text-xl text-slate-900 font-medium mt-3">
              Vedic Astrology
            </h3>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Gain profound insights into your life's path, strengths, and
              challenges through the ancient science of celestial bodies.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Understand career and financial prospects.</span>
              </li>
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>
                  Insights into relationships and emotional well-being.
                </span>
              </li>
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Identify potential health issues and remedies.</span>
              </li>
              <li>
                <a href="#" className=" text-green-800">
                  Learn more...
                </a>
              </li>
            </ul>
          </div>

          <div className="max-w-90 w-full hover:-translate-y-0.5 transition duration-300">
            <img className="rounded-xl" src="/scroll6.jpeg" alt="" />

            <h3 className="text-xl text-slate-900 font-medium mt-3">
              Pranic Healing
            </h3>
            <p className="text-sm text-gray-500 font-medium mt-1">
              A non-invasive, no-touch energy healing system that utilizes
              "prana" or life energy to balance and harmonize the body's energy.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Alleviate stress and promote emotional balance.</span>
              </li>
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Aid in pain management and spiritual growth.</span>
              </li>
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Gentle, non-invasive sessions tailored to you.</span>
              </li>
              <li>
                <a href="#" className=" text-green-800">
                  Learn more...
                </a>
              </li>
            </ul>
          </div>

          <div className="max-w-90 w-full hover:-translate-y-0.5 transition duration-300">
            <img
              className="rounded-xl"
              src="scroll1.jpeg"
              alt=""
            />
            <h3 className="text-xl text-slate-900 font-medium mt-3">
              Ayurvedic Consultation
            </h3>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Discover your unique constitution through pulse diagnosis and
              receive personalized guidance to balance your health and
              well-being.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Natural, chemical-free approach to wellness.</span>
              </li>
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Identify imbalances in the doshas and organs.</span>
              </li>
              <li className="flex  gap-2">
                <CircleCheckBig className="text-green-900" />
                <span>Personalized treatment plans for balance.</span>
              </li>
              <li>
                <a href="#" className=" text-green-800">
                  Learn more...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
