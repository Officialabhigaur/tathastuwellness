import { BadgeCheck, Calendar, ChefHat, ChevronDown, Droplet, Salad, SmilePlus, Sun, SunDim, UserSearch, Utensils } from "lucide-react";
import React from "react";

const beauty = () => {
  return (
    <>
      <main className="flex-grow mt-20">
        <section className="relative bg-gray-100 w-full py-10 px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[1260px] w-full flex flex-col gap-6 md:gap-8 md:flex-row items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
              <div className="flex flex-col gap-3 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-400 dark:bg-primary/20 w-fit">
                 <Calendar size={15}/>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Next: Oct 24th, 2023
                  </span>
                </div>
                <h1 className="text-green-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Ayurveda Beauty Workshop
                </h1>
                <p className="text-green-800 dark:text-slate-300 text-base md:text-lg font-normal leading-relaxed">
                  Unlock your natural radiance with ancient wisdom. Join us for
                  a transformative day of self-care, herbal alchemy, and
                  holistic beauty practices tailored to your dosha.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-green-900 text-white transition-colors  text-base font-bold shadow-lg shadow-primary/25">
                  <span className="truncate">Book Spot - $150</span>
                </button>
                
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-2">
                <BadgeCheck size={20} />
                <span>Certified Practitioner Led • All Materials Included</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div
                className="aspect-[4/3] w-full bg-center bg-no-repeat bg-cover rounded-2xl shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500"
                data-alt="Flat lay of ayurvedic herbs, oils, and mortar on a wooden table"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4a-wjYq308z4XBAQ8SfzlVdJnILBf_gzgL99yGGHC9X-dcFC_vQ_L58laqlznR5Iuh7uLUwX3Wv7Zjn4S7EplUx6_rJkqX55yaRKOxOQsZi3c7mRKxXAq_RbNmPkK4qvcK-VYyl5FQds02aeHIwe762HBFFrdNUqscFoo_Eh6a2Gn-fUEuRaCC2xpSuoL4s749615T4_F-LfWIa7mxrRzt2mjB9zAn3du_-nc7cb3GOBbTf9TNNoViulHloIsJbw6kfqLezd3kXyM")',
                }}
              ></div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-card-dark transition-colors">
          <div className="max-w-[960px] w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-green-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                What You Will Learn
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-[720px]">
                Dive deep into the practical applications of Ayurvedic beauty
                rituals tailored for modern life.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800/50 p-6 hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#111813] transition-colors">
                 <ChefHat className="text-green-900"/>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                    Dosha Analysis
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Understand your unique skin type based on Vata, Pitta, and
                    Kapha energies and how to balance them.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800/50 p-6 hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#111813] transition-colors">
                 <Salad className="text-green-900"/>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                    Herbal Mask Making
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Learn to craft your own chemical-free face masks using
                    common kitchen ingredients and rare herbs.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800/50 p-6 hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#111813] transition-colors">
                  <SmilePlus className="text-green-900" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                    Face Yoga
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Master simple facial exercises to tone muscles, improve
                    circulation, and reduce signs of aging naturally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-gray-100 py-16 px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <h2 className="text-green-900 dark:text-white text-3xl font-bold leading-tight">
                Workshop Schedule
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                A perfectly paced day designed for learning, relaxation, and
                hands-on practice.
              </p>
              <div
                className="hidden md:block w-full h-48 rounded-xl bg-cover bg-center mt-4"
                data-alt="Serene tea pouring moment"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1nHA_M0inR6CdrQ5jmWy0xMX_A01JBXNev33s8hbtP5yz9dHRTqTZxKJpkyate37Pz73ql4wAT40M4_6FEjWDRSRWQz5BzgsVKxWq4VwzoKyNs3LGYQdKcuIKOnZRZPfZh3VRokkpuWXf1I6TSOyD1Xl6913hdg0ZInZBUU7TdJPZlWg3cUwTE2t7qYP49iGM5HppxwvnUxXiDd_NawPnDCPQNl-LB_paayn68wIghsHD2tlSZ6yxySCtZx_gG2nSjQwpBG1WiCjt')",
                }}
              ></div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-[40px_1fr] gap-x-4">
                <div className="flex flex-col items-center gap-1 pt-1">
                  <div className="flex items-center justify-center size-8 rounded-full bg-green-100 text-primary">
                 <SunDim className="text-green-400"/>
                  </div>
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full min-h-[40px]"></div>
                </div>
                <div className="flex flex-col pb-8">
                  <span className="text-green-400 font-bold text-sm">
                    9:00 AM
                  </span>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Introduction &amp; Philosophy
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Understanding the roots of beauty in Ayurveda.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                  <div className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  <UserSearch />
                  </div>
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full min-h-[40px]"></div>
                </div>
                <div className="flex flex-col pb-8">
                  <span className="text-green-400 font-bold text-sm">
                    10:30 AM
                  </span>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Dosha Analysis Session
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Interactive quiz and physical assessment.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                  <div className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                   <Utensils />
                  </div>
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full min-h-[40px]"></div>
                </div>
                <div className="flex flex-col pb-8">
                  <span className="text-green-400 font-bold text-sm">
                    12:00 PM
                  </span>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Sattvic Lunch Break
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Organic vegetarian meal provided.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                  <div className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    <Droplet />
                  </div>
                </div>
                <div className="flex flex-col pb-0">
                  <span className="text-green-400 font-bold text-sm">
                    1:00 PM
                  </span>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                    Practical: Mask Making &amp; Face Yoga
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Hands-on creation session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-card-dark transition-colors">
          <div className="max-w-[960px] w-full flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
              <div
                className="aspect-[3/4] rounded-2xl bg-center bg-cover shadow-lg"
                data-alt="Portrait of an Indian woman in traditional saree smiling warmly"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHbtkB3ye2FzPxr6wiNFViy1gD-AbVfZXG98op2R8kfLTWaHYC7g8byM3Tswuq9BthOdqvaqqOVgoQRxZ5FD1qvQFGM-MxZdWj8FWMV0zhUOZ7jsbB-WwbfxVgV134_mpPtt1RaVmQuxlHTDR6_4Nis3sgaYt6PR5RSaI3NUKwQZtM7Mvtw3FjcLyQQruFOLHG8UA00s1fa-M-NibXhizAO7rKoofBuVU1SXsd-or_E8UINukNZN4--XQJ40xys2SfrjgWL_r2jUo3')",
                }}
              ></div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <div>
                <span className="text-green-400 font-bold uppercase tracking-wider text-sm mb-2 block">
                  Your Instructor
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  Dr. Ananya Sharma
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  With over 15 years of experience in Ayurvedic medicine and
                  holistic dermatology, Dr. Sharma combines ancient Vedic
                  knowledge with modern skin science. She has guided thousands
                  of individuals to discover their inner and outer radiance.
                </p>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 dark:text-white">
                    15+
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 dark:text-white">
                    5k+
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Students Taught
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        <section className="w-full py-16 px-4 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-card-dark transition-colors border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-[720px] w-full flex flex-col gap-8">
            <h2 className="text-green-900 dark:text-white text-3xl font-bold text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group rounded-xl bg-background-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 open:bg-white dark:open:bg-slate-800 transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 dark:text-white select-none">
                  Is lunch provided?
                    <ChevronDown />
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Yes, a wholesome, vegetarian Ayurvedic lunch (Sattvic meal) is
                  included in the workshop price. We also provide herbal teas
                  throughout the day. Please let us know of any allergies upon
                  booking.
                </div>
              </details>
              <details className="group rounded-xl bg-background-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 open:bg-white dark:open:bg-slate-800 transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 dark:text-white select-none">
                  Do I need prior knowledge of Ayurveda?
                    <ChevronDown />
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Not at all! This workshop is designed for beginners. We will
                  cover the basics of Doshas (body types) and how they relate to
                  skincare in simple, easy-to-understand terms.
                </div>
              </details>
              <details className="group rounded-xl bg-background-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 open:bg-white dark:open:bg-slate-800 transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 dark:text-white select-none">
                  What is the cancellation policy?
                     <ChevronDown />
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full refunds are available for cancellations made up to 48
                  hours before the event. Cancellations within 48 hours may be
                  credited towards a future workshop.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default beauty;
