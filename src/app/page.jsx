import CallToAction from "@/components/callToAction/CallToAction";
import ContactForm from "@/components/contactForm/ContactForm";
import CourseCard from "@/components/courseCard/CourseCard";
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
      <CourseCard/>
      <Testimonials />
      <ContactForm />
      <FaqSection />

   
    
    </div>
  );
}
