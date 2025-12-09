import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "#features",
    },
    {
      name: "Services",
      href: "#pricing",
    },
    {
      name: "Contact",
      href: "#docs",
    },
  ];
  return (
    <footer className="px-6 py-6   md:px-16 lg:px-24 xl:px-32 bg-gray-900 w-full text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
        <div className="md:max-w-114">
          <a href="#">
            <img src="/logo.png" className=" w-30 sm:w-20"></img>
          </a>
          <a
            href="https://maps.app.goo.gl/MupKxHV63Q5cBBd29"
            className="bg-green-100  rounded-md flex items-center gap-5 p-3"
            target="_bla"
          >
            <img src="/googlemaps.webp" alt="" className="w-20 h-20" />
            <span className="text-black">
              19, near water tank, Bankhandi, Adarsh Nagar, Ganga Nagar,
              Rishikesh, Uttarakhand 249201
            </span>
          </a>
          {/* <p className="mt-6">
            A sacred space for healing and self-discovery through ancient Vedic
            traditions.
          </p> */}
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-green-800 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="space-y-2">
              <a href="tel: +91 7060880030"> +91 7060880030</a>
              <br />
              <a href="tel: +91 9927067684"> +91 9927067684</a>
              <br />
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center pb-5">
        Copyright 2025 © <a href="https://prebuiltui.com">Tathastu wellnessess</a>.
        All Right Reserved.
        <br />
        <a
          href="mailto:sudhirindia.gupta@gmail.com"
          className="text-white hover:underline"
        >
          sudhirindia.gupta@gmail.com
        </a>
      </p>
    </footer>
  );
}
