export default function CallToAction() {
  return (
    <div className="flex  flex-col items-center justify-center max-w-8xl w-full mx-2 rounded-2xl space-y-5 shadow-md bg-[#d6e2bd]  px-4 py-20 text-center">
      <h1 className="text-2xl  md:text-6xl font-bold text-green-900 ">
        Begin Your Journey With Us
      </h1>
      <p className="text-black text-sm max-w-2xl">
        Whether you seek healing, knowledge, or simply a moment of peace, our
        doors are open. Explore our offerings and find your path to well-being.
      </p>
      <button className="bg-green-900 border border-green-800 hover:bg-transparent  hover:border hover:text-green-800 transition-all duration-300 hover:border-green-800 font-medium text-white cursor-pointer px-20 py-3 rounded-full  text-sm">
        LEARN MORE
      </button>
    </div>
  );
}
