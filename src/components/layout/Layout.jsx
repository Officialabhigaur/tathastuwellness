import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <a
        href="https://wa.me/9927067684
  "
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 animate-bounce   rounded-full shadow-lg z-10"
      >
        <img src="/whatsapp.webp" alt="WhatsApp" className="w-15 h-15" />
      </a>
    </>
  );
};

export default Layout;
