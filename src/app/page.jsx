import CallToAction from "@/components/callToAction/CallToAction";
import FaqSection from "@/components/faqSection/FaqSection";
import HeroSection from "@/components/herosection/HeroSection";
import Testimonials from "@/components/testimonials/Testimonials";

export default function page() {
  return (
    <div className="sm:px-20 px-6 space-y-10">
      <HeroSection />
      <Testimonials />
      <CallToAction />
      <FaqSection />
    </div>
  );
}
