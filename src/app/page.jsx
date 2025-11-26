import CallToAction from "@/components/callToAction/CallToAction";
import FaqSection from "@/components/faqSection/FaqSection";
import HeroSection from "@/components/herosection/HeroSection";
import ScrollingCards from "@/components/scrollingCards/ScrollingCards";
import Testimonials from "@/components/testimonials/Testimonials";

export default function page() {
  return (
    <div className="space-y-20 overflow-hidden">
      <HeroSection />
      <ScrollingCards />
      <CallToAction />
      <Testimonials />
      <FaqSection />
    </div>
  );
}
