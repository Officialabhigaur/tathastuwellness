"use client";

import { MenuIcon, PhoneCall, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.classList.add("max-md:overflow-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-hidden");
    }
  }, [openMobileMenu]);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  return (
    <nav
      className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4   bg-white/40 ${
        openMobileMenu ? "bg-white/80" : "backdrop-blur"
      }`}
    >
      <Link href="/" className="flex items-center gap-2">
        Tathastu Ayurveda Wellness
      </Link>
      <div className="hidden items-center md:gap-8 lg:gap-9 xl:flex lg:pl-20">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-[#2f6246]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 flex flex-col p-5  gap-1 text-lg font-medium bg-[#ffffff] md:hidden transition duration-300 ${
          openMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className=" size-10 p-1 items-center justify-center bg-green-800 hover:bg-green-900 transition text-white rounded-md flex absolute right-1 top-1"
          onClick={() => setOpenMobileMenu(false)}
        >
          <XIcon />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className=" py-2 px-2  border-b-gray-300 border-b"
            onClick={() => setOpenMobileMenu(false)}
          >
            {link.name}
          </Link>
        ))}
        {/* <button className="cursor-pointer bg-green-800 py-2 mt-5 rounded text-white">
          Sign in
        </button> */}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="tel: +91 7060880030"
          className="hidden    cursor-pointer  md:flex  items-center  gap-2 px-4 py-2  transition rounded-md "
        >
          <PhoneCall size={15} className="animate-pulse" />
          +91 7060880030
        </Link>
        <Link
          href="tel:+91 9927067684"
          className="hidden    cursor-pointer  md:flex  items-center  gap-2 px-4 py-2  transition  rounded-md "
        >
          <PhoneCall size={15} className="animate-pulse" /> +91 9927067684
        </Link>
        {/* <button className="hidden cursor-pointer xl:block  transition px-4 py-2   bg-green-800 text-white rounded-md">
          Sign in
        </button> */}
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="xl:hidden cursor-pointer"
        >
          <MenuIcon size={26} className="active:scale-90 transition" />
        </button>
      </div>
    </nav>
  );
}
