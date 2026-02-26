import Navigation from "@/components/layout/Navigation";
import TrustBar from "@/components/sections/TrustBar";
import WhyChoose from "@/components/sections/WhyChoose";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";

import dynamic from "next/dynamic";

const VoidField = dynamic(() => import("@/components/3d/VoidField"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const AboutVision = dynamic(() => import("@/components/sections/AboutVision"), { ssr: false });
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: false });
const Estimator = dynamic(() => import("@/components/sections/Estimator"), { ssr: false });
const TrustSecurity = dynamic(() => import("@/components/sections/TrustSecurity"), { ssr: false });
const BlogHub = dynamic(() => import("@/components/sections/BlogHub"), { ssr: false });

export default function Home() {
  return (
    <main className="relative w-full">
      <VoidField />
      <Navigation />

      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <TrustBar />
        <AboutVision />
        <Services />
        <ProcessTimeline />
        <TechStack />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Estimator />
        <TrustSecurity />
        <BlogHub />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
