import Header from "../../components/header";
import Hero from "../../components/lasik/hero";
import Doctor from "../../components/lasik/doctor";
import CTA from "../../components/lasik/cta";
import MobileSticky from "../../components/lasik/mobile-sticky";
import YoutubeSection from "../../components/lasik/youtube";
import AboutNetram from "@/components/lasik/about-netram";
import MicronM7 from "@/components/lasik/micron";
import FAQSection from "@/components/lasik/faq-section";
import YouTubeTestimonials from "@/components/lasik/youtube-testimonials";
import MediaCoverage from "@/components/lasik/media-coverage";

export default function LasikPage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutNetram />
      <MediaCoverage />
      <MicronM7 />
      <Doctor />
      <FAQSection />
      <YouTubeTestimonials />
      <YoutubeSection />
      <CTA />
      <MobileSticky />
    </>
  );
}
