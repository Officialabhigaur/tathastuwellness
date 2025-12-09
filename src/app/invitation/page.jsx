import {
  HousePlus,
  MapPinHouse,
  Mountain,
  PartyPopper,
  PhoneCall,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex gap-10  pt-30 p-5 items-start bg-green-100">
      <div className="w-[70%] rounded-xl h-full min-h-screen bg-white p-10 shadow-2xl">
        <h1 className="text-5xl font-bold text-green-900">
          Heartily Invitation to India
        </h1>
        <p className="mt-3 text-2xl text-gray-600">
          Dear friends from Netherlands,
        </p>
        <p className="mt-8 text-2xl text-gray-600 text-justify">
          We're excited to invite you to experience the warmth and richness of
          Indian culture, Ayurveda, Panchkarma, and hospitality in our home.
          Imagine immersing yourself in the vibrant colors, aromas, and rhythms
          of India, while rejuvenating your body and mind with ancient Ayurvedic
          practices.
        </p>

        <div className="flex  gap-10 mt-10">
          <img src="/panchkarma.png" alt="" className="rounded-xl w-[250px] " />
          <div>
            <h2 className="text-3xl font-bold text-green-700">
              Discover Ayurveda and Panchakarma
            </h2>
            <p className="text-2xl text-gray-600 mt-3">
              Rejuvenate your body and mind: Experience the healing power of
              Ayurveda and Panchakarma, tailored to your individual needs.
            </p>
          </div>
        </div>

        <div className="flex gap-10 items-start mt-20">
          <div className="space-y-5">
            <h2 className="text-3xl text-green-700 font-bold">
              Live like a Local: Indian Lifestyle and Traditions
            </h2>

            <div className="flex gap-2">
              <HousePlus
                className="text-green-800 "
                size={30}
                strokeWidth={3}
              />

              <p className="text-xl  text-gray-700 w-fit">
                <strong>Stay with us:</strong> Live with our family &amp; relax
                in nature in our cozy home surrounded by Himalayan mountains and
                local culture
              </p>
            </div>
            <div className="flex gap-2">
              <UtensilsCrossed
                className="text-green-800 "
                size={30}
                strokeWidth={3}
              />

              <p className="text-xl text-gray-700 w-fit">
                <strong>Savor Indian cuisine:</strong> Enjoy delicious,
                home-cooked meals prepared with love and care, using fresh,
                local ingredients.
              </p>
            </div>
            <div className="flex gap-2">
              <PartyPopper
                className="text-green-800 "
                size={30}
                strokeWidth={3}
              />

              <p className="text-xl text-gray-700 w-fit">
                <strong>Explore Indian traditions:</strong> Participate in
                cultural events, festivals, and rituals, gaining a deeper
                understanding of India's rich heritage.
              </p>
            </div>
            <div className="flex gap-2">
              <Mountain className="text-green-800 " size={30} strokeWidth={3} />

              <p className="text-xl text-gray-700 w-fit">
                <strong>Explore India's hidden gems:</strong> Visit local
                markets, temples, and scenic spots, experiencing the beauty and
                diversity of India.
              </p>
            </div>
            <div className="flex gap-2">
              <Users className="text-green-800 " size={30} strokeWidth={3} />

              <p className="text-xl text-gray-700 w-fit">
                <strong>Rejuvenate your spirit:</strong> Connect with
                like-minded individuals, sharing experiences and making new
                friends.
              </p>
            </div>
          </div>
          <img src="/food.png" alt="" className="w-[250px] rounded-xl" />
        </div>

        <div className="space-y-5 mt-15">
          <h2 className="text-3xl text-green-700 font-bold">Details</h2>
          <p className=" text-gray-700 text-xl">
            Your stay can be flexible, from a few days to several weeks or
            months.
          </p>

          <div className="flex gap-2">
            <Users className="text-green-800 " size={30} strokeWidth={3} />

            <p className="text-xl text-gray-700 w-fit">
              <strong>Accommodation:</strong> Cozy home stay with our family
            </p>
          </div>

          <div className="flex gap-2">
            <Users className="text-green-800 " size={30} strokeWidth={3} />

            <p className="text-xl text-gray-700 w-fit">
              <strong>Activities:</strong> Ayurveda, Panchakarma, yoga, cultural
              events, local exploration, and more
            </p>
          </div>

          <hr className="text-green-500 mt-10" />

          <p className="text-xl text-gray-700">
            If you're interested in experiencing the best of India, please don't
            hesitate to contact us. We'd love to welcome you to our home and
            share the richness of Indian culture with you.
          </p>

          <div>
            <p className="text-xl text-gray-700">Warm regards.</p>
            <p className="font-display text-2xl text-green-800 font-semibold">
              Sudheer &amp; Prachi
            </p>
            <p className="text-xl text-gray-700">Tathastu Wellnessess</p>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-green-200 pb-10 rounded-xl px-5">
        <div className="flex items-center flex-col">
          <img src="/logo.png" alt="" className="w-[200px]" />
        </div>

        <div className=" border-t-2 border-b-2 border-green-400 py-5">
          <h2 className="text-2xl text-center text-green-800 font-bold">
            Contact Us
          </h2>
          <div className="space-y-4 mt-4">
          <div className="flex items-start gap-2">
            <MapPinHouse size={30} /> <p className="">19, near water tank, Bankhandi, Adarsh Nagar, Ganga Nagar, Rishikesh, Uttrakhand 249201</p>
          </div>
            <div className="flex items-center gap-2">
              <PhoneCall size={15} />{" "}
              <a href="tel:+91 7060880030">+91 7060880030</a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall size={15} />{" "}
              <a href="tel:+91 9927067684">+91 7060880030</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
