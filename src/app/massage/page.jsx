import { Award, BookOpenText, Calendar1, ChevronDown, Clock, Leaf, MapPinHouse, MoveRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative w-full mt-20">
        <div className="mx-auto max-w-[1280px] px-4 py-6 md:px-8 lg:px-10">
          <div
            className="relative flex min-h-[480px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-8 md:p-16 items-start justify-center"
            data-alt="Close up of hands massaging a back with herbal oil in a spa setting"
            style={{
              backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("https://lh3.googleusercontent.com/aida-public/AB6AXuD599CYf3Ge8_GDnbvPruG-f7F9jMnpbfgarDCkuwHChf5aA413M-nNuXAg5iL3s9SBluDvsOCzLZuSkszXF-ndqkEkqf7981MOdZj9N1eDk69lmBojec5HfDcrsIzojyEPzlKc_iT6w6KGyaz0afIHoga3-mL5i-rH9lcQof9K6rOo0-X0pAY8rZulss1QKDrutbtYM6gPHBOKIvTWtJm5yeXtJopWiYxrmliQQWGBCDDy0_KvubJvdzagfuiOw3f4FP867ti-LhxB")
    `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-4 max-w-[640px]">
              <span className="inline-flex w-fit items-center rounded-full  backdrop-blur-sm border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-400">
                Certification Course
              </span>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                Ayurvedic Massage (Abhyanga)
              </h1>
              <h2 className="text-gray-100 text-lg font-medium leading-relaxed md:text-xl">
                Master the ancient art of healing touch in this comprehensive
                2-day intensive course. Learn the philosophy, oils, and
                techniques of Abhyanga.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-green-600 text-green-900 text-base font-bold transition-transform hover:scale-105"
                href="#enroll"
              >
                Enroll Now
              </a>
              <a
                className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold transition-colors hover:bg-white/20"
                href="#curriculum"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Content Layout --> */}
      <div className="layout-container mx-auto flex max-w-[1280px] flex-col lg:flex-row gap-8 px-4 py-10 md:px-8 lg:px-10">
        {/* <!-- Left Column: Content --> */}
        <div className="flex flex-1 flex-col gap-12 lg:w-2/3">
          {/* <!-- About Section --> */}
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-text-main dark:text-text-main-dark">
              About the Course
            </h3>
            <p className="text-green-800 dark:text-text-muted-dark leading-relaxed text-lg">
              Abhyanga is a unique form of massage therapy that originates from
              Ayurveda, the traditional medicine system of India. Unlike
              conventional massage, Abhyanga involves the generous application
              of warm, medicated herbal oils tailored to an individual's Dosha
              (body type).
            </p>
            <p className="text-green-800 dark:text-text-muted-dark leading-relaxed text-lg">
              This certification course is designed for wellness enthusiasts,
              massage therapists, and yoga practitioners who wish to deepen
              their understanding of Ayurvedic healing. By the end of this
              intensive weekend, you will be confident in performing a full-body
              Abhyanga sequence.
            </p>
          </section>
          {/* <!-- Feature Section / Highlights --> */}
          <section className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-text-main dark:text-text-main-dark">
              Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 transition-shadow hover:shadow-md">
                <div className="text-text-main dark:text-text-main-dark">
                  <BookOpenText />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold leading-tight">
                    Ancient Wisdom
                  </h4>
                  <p className="text-text-muted dark:text-text-muted-dark text-sm">
                    Foundations of Ayurveda and Dosha theory.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 transition-shadow hover:shadow-md">
                <div className="text-text-main dark:text-text-main-dark">
                  <Leaf />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold leading-tight">
                    Hands-on Practice
                  </h4>
                  <p className="text-text-muted dark:text-text-muted-dark text-sm">
                    Guided sessions to master strokes &amp; pressure points.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 transition-shadow hover:shadow-md">
                <div className="text-text-main dark:text-text-main-dark">
                  <Award />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold leading-tight">
                    Certification
                  </h4>
                  <p className="text-text-muted dark:text-text-muted-dark text-sm">
                    Recognized certificate upon successful completion.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Curriculum Accordion --> */}
          <section className="flex flex-col gap-4" id="curriculum">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold tracking-tight text-text-main dark:text-text-main-dark">
                Detailed Curriculum
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <details
                className="group flex flex-col rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark px-5 py-3 transition-colors hover:border-primary/50"
                open=""
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 outline-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-primary-content">
                      1
                    </span>
                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark md:text-base">
                      Fundamentals of Ayurveda &amp; Anatomy
                    </p>
                  </div>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="pl-9 pt-2 pb-2">
                  <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                    An in-depth morning session covering the history of
                    Ayurveda, understanding the three Doshas (Vata, Pitta,
                    Kapha), and identifying contraindications for massage
                    therapy.
                  </p>
                </div>
              </details>
              <details className="group flex flex-col rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark px-5 py-3 transition-colors hover:border-primary/50">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 outline-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-primary-content">
                      2
                    </span>
                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark md:text-base">
                      Oils, Preparation &amp; Workspace
                    </p>
                  </div>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="pl-9 pt-2 pb-2">
                  <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                    Learn how to select the correct medicated oils for different
                    body types, how to warm the oils properly, and how to set up
                    a calm, healing environment for your client.
                  </p>
                </div>
              </details>
              <details className="group flex flex-col rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark px-5 py-3 transition-colors hover:border-primary/50">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 outline-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-primary-content">
                      3
                    </span>
                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark md:text-base">
                      Practical: Front Body Sequence
                    </p>
                  </div>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="pl-9 pt-2 pb-2">
                  <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                    Hands-on practice starting with the feet, legs, abdomen,
                    chest, and arms. Focus on the direction of strokes
                    (Anuloma/Pratiloma) and pressure application.
                  </p>
                </div>
              </details>
              <details className="group flex flex-col rounded-xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark px-5 py-3 transition-colors hover:border-primary/50">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 outline-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-primary-content">
                      4
                    </span>
                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark md:text-base">
                      Practical: Back &amp; Head Sequence
                    </p>
                  </div>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="pl-9 pt-2 pb-2">
                  <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                    Completing the full body sequence with the back, neck, and
                    head massage (Shiroabhyanga). Includes post-massage care
                    instructions and client advice.
                  </p>
                </div>
              </details>
            </div>
          </section>
          {/* <!-- Instructor Bio --> */}
          <section className="rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark p-6 md:p-8">
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-text-main dark:text-text-main-dark">
              Meet Your Instructor
            </h3>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="shrink-0">
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary md:h-32 md:w-32">
                  <img
                    alt="Portrait of Dr. Ananya Sharma, Ayurvedic Practitioner"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYjn424dpoNUyaJOEYIbCP095hFyxI1mOiP0JvMIl83y8K15h9z2nl3oez7EYRB0a2-sYdxYyH4Hx_k8iYAgRsaUUOQb8bnA85YXFTrroLFy60ltxTG7MzJ18rInlRogC3N0-29xpvy1MXHs07Pz3l-OzQotaHi6vFx9wlW8jnW8xboSVIAg_De59zPFCSU2tdi55kxhhH-m79z2Fnc8l-ZipBHnTcVhh2HZ04gzUugKiijatvagBSSjTl8s_w_jljnXPOSPmEMgV3"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-text-main dark:text-text-main-dark">
                  Dr. Ananya Sharma
                </h4>
                <p className="text-sm font-medium text-green-400">
                  Ayurvedic Physician (BAMS) &amp; Yoga Therapist
                </p>
                <p className="text-green-900 ">
                  With over 15 years of clinical experience in Kerala and
                  California, Dr. Sharma brings authentic lineage-based
                  knowledge to her teaching. She is passionate about making the
                  complex science of Ayurveda accessible and practical for
                  modern living.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Testimonials --> */}
          <section className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-text-main dark:text-text-main-dark">
              Student Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark p-6">
                <div className="flex gap-1 text-yellow-400">
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                </div>
                <p className="text-text-muted dark:text-text-muted-dark italic">
                  "This course changed my approach to bodywork completely. The
                  energy Dr. Sharma brings is incredible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <img
                      alt="Male student portrait"
                      className="h-full w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBei9JDR3FqeZcdCXhrwnG8KjBrr22Jx4KEnogCpxURiOwZPCpVZ8-yg8rrYyoEOD48TTAD-wBwJHdxeqKpBgRrCONPFBSax5j0Lj7TFGT1JwjZM4w91Yyx3M9L9LlxiYGfT3WfLwIPpmCghmFyWpGhvgkVKiBVpUYwx44ZwJ7FwxyizHyeqGKKnlNZr2QDsRi4E4yJsBX-Ur3QG71sSoZnOqCiTti5hwCvnCyRtzyQS6BoR-fbU_ZYsAJJQg-kM5RI8hrLid_tIDz3"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark">
                      Michael R.
                    </p>
                    <p className="text-xs text-text-muted dark:text-text-muted-dark">
                      Massage Therapist
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-border-dark p-6">
                <div className="flex gap-1 text-yellow-400">
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px] fill-current">
                    star
                  </span>
                </div>
                <p className="text-text-muted dark:text-text-muted-dark italic">
                  "I loved the hands-on aspect. By Sunday afternoon, I felt
                  confident enough to practice on friends."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <img
                      alt="Female student portrait"
                      className="h-full w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwsli7ChJD-iMZeFXduGqe1DgKUTEjeC5KXFHrNe0kR1fyLmjYppAB28NKGvUQZ9JyOqnFrCb6oEviY9f9bWgAGXILineF4AIK63YdDRvQA1NEeCLJO57CFSirNTEbSvgIVf9X7xf1_PYRazJt72B4sfgGWJhKOhgIeeVRkSj9DDWUGfPz3v7tdpk3L8yCDYkrX18NnyP3Vz4oWf473Msq67XEUSEigMNBdByt2pKv62uUHlVh2fRPR1SPG_XWo1qLjEUwwRa_OLjD"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark">
                      Sarah J.
                    </p>
                    <p className="text-xs text-text-muted dark:text-text-muted-dark">
                      Yoga Instructor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- FAQ --> */}
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-text-main dark:text-text-main-dark">
              Frequently Asked Questions
            </h3>
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-gray-200 dark:border-border-dark bg-transparent p-4">
                <h4 className="font-bold text-text-main dark:text-text-main-dark">
                  Do I need prior massage experience?
                </h4>
                <p className="mt-2 text-sm text-green-900 ">
                  No, this course is open to beginners. However, an interest in
                  Ayurveda or bodywork is recommended.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-border-dark bg-transparent p-4">
                <h4 className="font-bold text-text-main dark:text-text-main-dark">
                  Are oils provided?
                </h4>
                <p className="mt-2 text-sm text-green-900">
                  Yes, all organic medicated oils required for the practical
                  sessions are included in the course fee.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-border-dark bg-transparent p-4">
                <h4 className="font-bold text-text-main dark:text-text-main-dark">
                  What should I bring?
                </h4>
                <p className="mt-2 text-sm text-green-900">
                  Bring two large towels, comfortable loose clothing, a
                  notebook, and an open mind.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Right Column: Sticky Sidebar --> */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 flex flex-col gap-6" id="enroll">
            {/*  Course Details Card  */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-lg">
              <div className="bg-surface-light dark:bg-surface-dark p-6 pb-4 border-b border-gray-200 dark:border-border-dark">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-900">
                    Course Fee
                  </span>
                  <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-1 text-xs font-bold text-red-600 dark:text-red-400">
                    Only 4 spots left
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-text-main dark:text-text-main-dark">
                    $450
                  </span>
                  <span className="text-sm text-green-900">
                    / person
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                  <Calendar1 className="text-green-400"/>
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-text-main-dark">
                        October 14th - 15th, 2023
                      </p>
                      <p className="text-xs text-green-900">
                        Sat &amp; Sun
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                  <Clock className="text-green-400" />
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-text-main-dark">
                        10:00 AM - 4:00 PM
                      </p>
                      <p className="text-xs text-green-900">
                        Includes 1hr lunch break
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                   <MapPinHouse className="text-green-400"/>
                    <div>
                      <p className="text-sm font-bold text-text-main dark:text-text-main-dark">
                        Vedic Wellness Center
                      </p>
                      <p className="text-xs text-text-muted dark:text-text-muted-dark">
                        123 Healing Way, Santa Monica, CA
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-200 dark:border-border-dark" />
                <div className="flex flex-col gap-3">
                  <button className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-green-800 text-white text-base font-bold shadow-sm transition-transform active:scale-95 hover:bg-opacity-90">
                    Enroll Now
                  </button>
                  <p className="text-center text-xs text-green-900">
                    Secure payment via Stripe. 100% money-back guarantee if
                    canceled 7 days prior.
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Teaser  */}
            <div className="rounded-2xl bg-green-100 p-6 border border-green-300">
              <h4 className="font-bold text-text-main dark:text-text-main-dark">
                Have questions?
              </h4>
              <p className="mt-2 text-sm text-text-muted dark:text-text-muted-dark">
                Not sure if this course is right for you? Talk to our student
                counselor.
              </p>
              <a
                className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                href="#"
              >
                Contact Us{" "}
               <MoveRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
