import Header from "@/components/header";
import Hero from "@/components/cataract/hero";
import Doctor from "@/components/cataract/doctor";
import CTA from "@/components/cataract/cta";
import MobileSticky from "@/components/cataract/mobile-sticky";
import YoutubeSection from "@/components/cataract/youtube";
import AboutNetram from "@/components/cataract/about-netram";
import MicronM7 from "@/components/cataract/micron";
import FAQSection from "@/components/cataract/faq-section";
import YouTubeTestimonials from "@/components/cataract/youtube-testimonials";
import MediaCoverage from "@/components/cataract/media-coverage";

export default function CataractPage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutNetram />
      <MediaCoverage />
      <MicronM7 />
      <Doctor />
      <FAQSection/>
      <YouTubeTestimonials />
      <YoutubeSection />
      <CTA />
      <MobileSticky />
    </>
  );
}
