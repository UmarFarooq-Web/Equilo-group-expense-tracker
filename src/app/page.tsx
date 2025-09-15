
import EndSection from "@/components/EndSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SecuritySection from "@/components/SecuritySection";
import TestimonialSection from "@/components/TestimonialSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
      <WorkSection/>
      <SecuritySection/>
      <TestimonialSection/>
      <FAQSection/>
      <EndSection/>
      <Footer/>
    </div>
  );
}
