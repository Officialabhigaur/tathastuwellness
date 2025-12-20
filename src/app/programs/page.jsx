import {
  BadgeEuro,
  Brain,
  ChevronDown,
  CircleCheckBig,
  Clock,
  Heart,
  Infinity,
  MoveRight,
  Sparkles,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="mt-20  flex flex-col min-h-screen">
      <section className="relative bg-gray-100 pt-8 pb-12 px-4 sm:px-10">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 flex flex-col gap-6 pt-2">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8ffd0bd] text-green-800 dark:text-green-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={15} />
                  Most Popular
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-green-900 dark:text-white">
                  Vedic Astrology Natal Chart Reading
                </h1>
                <p className="text-lg md:text-xl text-green-700 dark:text-gray-300 leading-relaxed max-w-xl">
                  Discover your life's blueprint through ancient wisdom. Gain
                  clarity on your career, relationships, and health patterns.
                </p>
              </div>

              <div className="grid grid-cols-2  gap-4 py-4 border-y border-dashed border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 text-green-800">
                  <div className="size-10 rounded-full bg-background-light dark:bg-surface-dark flex items-center justify-center text-text-secondary">
                    <Clock />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase font-semibold">
                      Duration
                    </p>
                    <p className="text-sm font-bold text-black dark:text-white">
                      60 Minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-green-800">
                  <div className="size-10 rounded-full bg-background-light dark:bg-surface-dark flex items-center justify-center text-text-secondary">
                    <BadgeEuro />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase font-semibold">
                      Price
                    </p>
                    <p className="text-sm font-bold text-black dark:text-white">
                      $150.00 USD
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-green-800">
                  <div className="size-10 rounded-full bg-background-light dark:bg-surface-dark flex items-center justify-center text-text-secondary">
                    <Video />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase font-semibold">
                      Location
                    </p>
                    <p className="text-sm font-bold text-black dark:text-white">
                      Zoom / Online
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-green-800">
                  <div className="size-10 rounded-full bg-background-light dark:bg-surface-dark flex items-center justify-center text-text-secondary">
                    <Star />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase font-semibold">
                      Rating
                    </p>
                    <p className="text-sm font-bold text-black dark:text-white">
                      4.9/5 (120+)
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-10 pt-2">
                <button className="flex-1 sm:flex-none py-4  px-8 bg-green-800  cursor-pointer text-white text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <span>Book Session Now</span>
                  <MoveRight />
                </button>
                <button className="flex-1 sm:flex-none cursor-pointer py-4 px-8 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 text-text-main dark:text-white text-base font-bold rounded-xl transition-all flex items-center justify-center">
                  Gift this Service
                </button>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[40%] shrink-0">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  alt="Mystical book with astrological charts and crystals on a dark wooden table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Close up of astrological charts and crystals"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHV42t-i9nFIzlAexQOP63a5bt1AUgNkeFb8ZM48zCOflW8Md2d3Y-a-x27QYVKQSopA23HOM6RDzLcgNsZgDqrjave6-OUuMYhlUUEnW0UcU39m1dJqZUjquqNpdQKRnSylpslAxoTRLzaUtUVVT7KsiWlDHjh8Efhae_ssGi5F78DeYX-6dJ82JSXhk9R5hBPaK80lRtcVRWeOPcvHMBCvSdp0Cm3FcY6caa1R8J7XT7-vZ0-gTGhEjRhQV4imeB7EjLMmBYZ31z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Portrait of practitioner"
                        className="size-12 rounded-full object-cover border-2 border-primary"
                        data-alt="Portrait of smiling female practitioner"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlmFVLFErX9DNCYsPF0mi3YPH0b4nWb5P7MgGywlZ1jKv_8k95i3WJ33ReiMi5hSdGqJyG_UeA-BnPClxFpE86RK0KunrztFSjifYm3iWPhQCRfeF8LSxOGnOAgIZdd9bzNhAH7tkFeLLKQSSQsqj69DQ_Yuw4ZOyFbi-tl9isrb5hVRhTtWErP-YwSDb4AwBh6-BvkzQKIizRgY2NCUNonlkp-bwFMGDEI-uSqbloeHGmVppZBhinZC5f6hSYZjxKGbLvXscGvBLv"
                      />
                      <div>
                        <p className="text-sm font-bold text-text-main dark:text-white">
                          Priya Sharma
                        </p>
                        <p className="text-xs text-text-secondary">
                          Senior Astrologer, 15y exp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-10 bg-white dark:bg-surface-dark">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-green-900 dark:text-white">
                Unveiling Your Cosmic Map
              </h2>
              <div className="space-y-4 text-green-800 dark:text-gray-300">
                <p>
                  Your natal chart is a snapshot of the sky at the exact moment
                  of your birth. In Vedic Astrology (Jyotish), this map reveals
                  the karmic patterns you carry and the potential that lies
                  ahead.
                </p>
                <p>
                  Unlike generic horoscopes, this reading is deeply personal. We
                  analyze the position of the planets, Nakshatras (lunar
                  mansions), and dashas (planetary periods) to provide
                  actionable guidance for your current life stage.
                </p>
                <p>
                  Whether you are standing at a career crossroads, seeking a
                  soulmate, or looking to improve your health, the stars offer a
                  guiding light rooted in thousands of years of observation.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 dark:bg-background-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5 relative">
                <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 text-6xl">
                  <Infinity className="text-green-200" size={60} />
                </span>
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                  What We Cover
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="text-green-900" size={20} />
                    <span className="text-text-main dark:text-gray-200">
                      Detailed analysis of your Ascendant, Moon, and Sun signs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="text-green-900" size={20} />
                    <span className="text-text-main dark:text-gray-200">
                      Career path and financial prosperity indicators.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="text-green-900" size={20} />
                    <span className="text-text-main dark:text-gray-200">
                      Relationship compatibility and timing for marriage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="text-green-900" size={20} />
                    <span className="text-text-main dark:text-gray-200">
                      Health vulnerabilities and remedial measures
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheckBig className="text-green-900" size={20} />
                    <span className="text-text-main dark:text-gray-200">
                      Upcoming planetary periods for the next 5 years.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-10 bg-gray-100 dark:bg-background-dark">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4 dark:text-white">
              Transformative Benefits
            </h2>
            <p className="text-green-800 dark:text-gray-400 max-w-2xl mx-auto">
              Beyond prediction, our readings empower you to make conscious
              choices aligned with your true nature.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all group">
              <div className="size-12 rounded-lg bg-green-100 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Brain className="text-green-900" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                Mental Clarity
              </h3>
              <p className="text-sm text-green-800 dark:text-gray-400 leading-relaxed">
                Understand the root cause of your anxieties and mental patterns.
                Gain peace by knowing which challenges are temporary.
              </p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all group">
              <div className="size-12 rounded-lg bg-green-100 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Heart className="text-green-900" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                Harmonious Relationships
              </h3>
              <p className="text-sm text-green-800 dark:text-gray-400 leading-relaxed">
                Discover your relationship needs and karmic connections.
                Navigate conflicts with compassion and foresight.
              </p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all group">
              <div className="size-12 rounded-lg bg-green-100 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="text-green-900" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                Aligned Success
              </h3>
              <p className="text-sm text-green-800 dark:text-gray-400 leading-relaxed">
                Stop swimming upstream. Identify the careers and timings that
                support your natural talents and destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl text-green-900 font-bold mb-10 text-center dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-text-main dark:text-white">
                <span>What do I need to provide for the reading?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  <ChevronDown />
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                We need your exact date, time, and place of birth. The accuracy
                of the reading depends heavily on the accuracy of your birth
                time. If you are unsure, please let us know beforehand as we may
                need to perform a birth time rectification.
              </div>
            </details>

            <details className="group bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-text-main dark:text-white">
                <span>Is this reading fatalistic?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  <ChevronDown />{" "}
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                Not at all. Vedic Astrology believes in a mix of destiny and
                free will. The chart shows the terrain, but you are the one
                driving the vehicle. Our goal is to empower you to navigate your
                terrain skillfully, not to scare you with unchangeable
                predictions.
              </div>
            </details>

            <details className="group bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-text-main dark:text-white">
                <span>Can I record the session?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  <ChevronDown />
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                Yes, absolutely. We encourage you to record the session so you
                can revisit the insights later. We can also provide a recording
                via Zoom if requested at the beginning of the call.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-10 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-white/5">
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-green-900 font-black mb-6 dark:text-white">
            Ready to understand your journey?
          </h2>
          <p className="text-lg  dark:text-gray-400 mb-8 max-w-2xl mx-auto text-green-800">
            Book your session today and take the first step towards clarity,
            healing, and purpose. Slots for this month are filling up fast.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="h-14 px-10 bg-primary hover:bg-green-900 hover:text-white cursor-pointer text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Book Now - $150
            </button>
            <button className="h-14 px-10 bg-transparent border border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 text-text-main dark:text-white text-lg font-bold rounded-xl transition-all cursor-pointer">
              Contact for Questions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
