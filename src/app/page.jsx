import CallToAction from "@/components/callToAction/CallToAction";
import ContactForm from "@/components/contactForm/ContactForm";
import FaqSection from "@/components/faqSection/FaqSection";
import HeroSection from "@/components/herosection/HeroSection";
import ScrollingCards from "@/components/scrollingCards/ScrollingCards";
import ServiceCards from "@/components/serviceCards/ServiceCards";
import Testimonials from "@/components/testimonials/Testimonials";

export default function page() {
  return (
    <div className="space-y-20 overflow-hidden">
      <HeroSection />
      <ServiceCards/>
      <ScrollingCards />
      <CallToAction />
      <Testimonials />
      <ContactForm />
      <FaqSection />

   
      <a
        href="https://wa.me/9927067684
  "
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 animate-bounce   rounded-full shadow-lg z-10"
      >
        <img src="/whatsapp.webp" alt="WhatsApp" className="w-15 h-15" />
      </a>
    </div>
  );
}
