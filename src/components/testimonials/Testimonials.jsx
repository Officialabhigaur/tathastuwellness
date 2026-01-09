const Testimonials = () => {
  const cardsData = [
    {
      name: "Wim Knoppert",

      message:
        "A deeply nourishing massage by caring friends Visiting Sudheer and Prachi’s Pancha Karma center was a highlight of our trip. We were truly pampered with deliciously scented warm oils, but what made it special was the genuine care. It didn't just feel like a treatment; it felt like being healed by the caring hands of friends. The combination of the authentic Ayurvedic techniques and the warmth of Sudheer and Prachi made us feel completely relaxed and looked after. If you are in Rishikesh, this is the place to go for a massage that touches the soul.",
    },
    {
      name: "Arlieneke from holland",

      message:
        "Yoga was beautiful and peaceful. Mixture of breathing techniques and beginner yoga poses. Prachi gave personal guidance very gentle and friendly in performing the poses right. She explained every pose by showing and exploring what to do. The atmosphere was meditative and refreshing. Very nice.",
    },
    {
      name: "Ioana-Lorena Popa",

      message:
        "Extremely nice, dedicated and professional people. I tottaly reccommend their services and I am looking forward to returning to Rishikesh and keeping in contact with them, as they helped me a lot to better understand myself. Namaste, Sudheerji 🙏",
    },
    {
      name: "nivedita k",

      message:
        "I had the privilege of experiencing Pranic Healing sessions with Ms. Prachi, and it has been a truly enlightening journey. Because of such experience, I continue to get my healing done through her on continual basis. She has a remarkable ability to identify and highlight blockages in the energy field with incredible precision. She is a gifted healer who see visions of blockages in form of people, situations, area of life, etc. The way she addresses these imbalances is both compassionate and effective, allowing me to feel a deep sense of relief and clarity after each session. Ms. Prachi’s approach is intuitive and thorough, helping me gain a better understanding of the underlying causes of my physical and emotional challenges. I have noticed a significant improvement in my energy levels, mental clarity, and overall well-being. I’m truly grateful for her healing expertise and highly recommend her to anyone seeking holistic support and healing.",
    },
  ];

  const CreateCard = ({ card }) => (
    <>
      <div className="flex flex-wrap justify-center gap-5 mt-16 text-left">
        <div className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white">
          <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
              fill="#2563EB"
            />
          </svg>
          <div className="flex items-center justify-center mt-3 gap-1">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                fill="#FF532E"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                fill="#FF532E"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                fill="#FF532E"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                fill="#FF532E"
              />
            </svg>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                fill="#FF532E"
              />
            </svg>
          </div>
          <p className="text-sm mt-3 text-gray-500">
            {card.message.slice(0, 155) + " read more..."}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div>
              <h2 className="text-lg text-gray-900 font-medium">{card.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      <div className="marquee-row w-full  mx-auto max-w-6xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex gap-4 transform-gpu min-w-[200%] pt-10  pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </>
  );
};

export default Testimonials;
