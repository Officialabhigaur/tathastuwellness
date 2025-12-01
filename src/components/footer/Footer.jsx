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
    <footer className="px-6  md:px-16 lg:px-24 xl:px-32 mt-40 w-full text-slate-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
        <div className="md:max-w-114">
          <Image
            className="h-9 md:h-9.5 w-auto shrink-0"
            src="/assets/logo.svg"
            alt="Logo"
            width={140}
            height={40}
            priority
            fetchPriority="high"
          />
          <a
            href="https://maps.app.goo.gl/MupKxHV63Q5cBBd29"
            className="bg-green-100  rounded-md flex items-center gap-5 p-3"
            target="_bla"
          >
            <img src="/googlemaps.webp" alt="" className="w-20 h-20" />
            <span>
              19, near water tank, Bankhandi, Adarsh Nagar, Ganga Nagar,
              Rishikesh, Uttarakhand 249201
            </span>
          </a>
          <p className="mt-6">
            A sacred space for healing and self-discovery through ancient Vedic
            traditions.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#40c161]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="space-y-2">
              <a href="tel: +91 7060880030"> +91 7060880030</a>
              <br />
              <a href="tel: +91 9927067684"> +91 9927067684</a>
              <br />
              {/* <a >sudhirindia.gupta@gmail.com</a> */}
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center pb-5">
        Copyright 2024 © <a href="https://prebuiltui.com">Abhishek Gaur</a>. All
        Right Reserved.
      </p>
    </footer>
  );
}
