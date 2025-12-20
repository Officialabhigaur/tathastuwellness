import { CalendarDays, Clock, Droplets, Euro, Flower, HandHeart, HeartPulse, Leaf, Salad, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CourseCard() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <section className="flex flex-col items-start px-6 md:px-16 lg:px-24 text-sm max-w-6xl mx-auto">
        <div className="flex items-center mr-auto gap-2 text-green-900 bg-green-50 rounded-full px-3 py-1">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
              stroke="#1E4BAF"
              strokeMiterlimit="5.759"
              strokeLinecap="round"
            />
          </svg>
          <span>Packages</span>
        </div>
        <h1 className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text mt-4">
          Holistic practices for a balanced mind, body, and spirit       </h1>
        <p className="text-slate-500 mt-4 max-w-2xl">
          Embark a journey of self-discovery and holistic  well-being with our ancient wisdom-based practices
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <Flower size={30} className="text-green-800" />
            </div>
            <h2 className="text-xl text-slate-500">Ayurveda Beauty Workshop</h2>

            <div>
              <p className="flex items-center gap-2">
                <Euro size={15} /> <span>120 Euros/person</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />1 day
              </p>
            </div>
            <Link href={`/programs`} className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center  py-2 rounded">
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <HandHeart size={30} className="text-green-800" />
            </div>
            <h2 className="text-xl text-slate-500">
              Ayurveda Massage (Abhyanga) course
            </h2>

            <div>
              <p className="flex items-center gap-2">
                <Euro size={15} /> <span>60 Euros/Hour</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />2 days
              </p>
            </div>
             <Link href="/programs" className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center py-2 rounded">
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <Salad size={30} className="text-green-800" />
            </div>
            <h2 className="text-xl text-slate-500">
              Ayurvedic cooking workshop
            </h2>

            <div>
              <p className="flex items-center gap-2">
                <Euro size={15} /> <span>95 Euros/ person (up to 4 ) </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />1 day
              </p>
            </div>
              <Link href="/programs" className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center py-2 rounded">
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <HeartPulse size={30} className="text-green-800" />
            
            </div>
            <h2 className="text-xl text-slate-500">
              Pulse Diagnose 
            </h2>

            <div>
              <p className="flex items-center gap-2">
                <Euro size={15} /> <span>75 Euros/person</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />1 day
              </p>
            </div>
             <Link href="/programs" className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center py-2 rounded">
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <Sparkles size={30} className="text-green-800" />
            </div>
            <h2 className="text-xl text-slate-500">Astrology session</h2>

            <div>
              <p className="flex items-center gap-2">
                <Euro size={15} /> <span>120 Euros/Hour</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />2 days
              </p>
            </div>
            <Link href="/programs" className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center py-2 rounded">
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <Droplets size={30} className="text-green-800" />
            </div>
            <h2 className="text-xl text-slate-500">Panchkarma</h2>

            <div>
              <p className="flex items-center gap-2">
                <Euro size={15} /> <span>1550 Euros </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />
                21 day
              </p>
            </div>
              <Link href="/programs" className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center py-2 rounded">
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent space-y-3 transition duration-500">
            <div className="w-15 flex items-center justify-center h-15  rounded-full bg-green-200">
              <Leaf size={30} className="text-green-800" />
            </div>
            <h2 className="text-xl text-slate-500">Rejuvenation packages </h2>

            <div>
              <p className="flex  gap-2">
                <Euro size={15} />{" "}
                <span>85 Euros / day (Including Stay and food) </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} />
                Around 3 Hours
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={15} />
                1-7 Days
              </p>
            </div>
           <Link href="/programs"  className="bg-green-900 cursor-pointer text-white w-full text-xl inline-block text-center py-2 rounded">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
