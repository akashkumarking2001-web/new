import Navigation from "@/components/layout/Navigation";
import TrustBar from "@/components/sections/TrustBar";
import WhyChoose from "@/components/sections/WhyChoose";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";

import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
const VoidField = dynamic(() => import("@/components/3d/VoidField"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const AboutVision = dynamic(() => import("@/components/sections/AboutVision"), { ssr: false });
const ClientLogos = dynamic(() => import("@/components/sections/ClientLogos"), { ssr: false });
const ProcessTimeline = dynamic(() => import("@/components/sections/ProcessTimeline"), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: false });
const Estimator = dynamic(() => import("@/components/sections/Estimator"), { ssr: false });
const TrustSecurity = dynamic(() => import("@/components/sections/TrustSecurity"), { ssr: false });
const BlogHub = dynamic(() => import("@/components/sections/BlogHub"), { ssr: false });

const Founder = dynamic(() => import("@/components/sections/Founder"), { ssr: false });

import LazyLoad from "@/components/ui/LazyLoad";

import fs from 'fs';
import path from 'path';

export default function Home() {
  const settingsFile = path.join(process.cwd(), 'data', 'settings.json');
  let showFounders = true;
  if (fs.existsSync(settingsFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(settingsFile, 'utf8'));
      showFounders = data.showFounders !== false;
    } catch (e) {
      console.error("Failed to read settings", e);
    }
  }

  return (
    <main className="relative w-full">
      <Navigation />

      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <TrustBar />

        <LazyLoad threshold={0.01} className="content-auto">
          <AboutVision />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <ClientLogos />
        </LazyLoad>
        {showFounders && (
          <LazyLoad threshold={0.01} className="content-auto">
            <Founder />
          </LazyLoad>
        )}
        <LazyLoad threshold={0.01} className="content-auto">
          <Services />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <ProcessTimeline />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <TechStack />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <WhyChoose />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <Portfolio />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <Testimonials />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <Pricing />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <Estimator />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <TrustSecurity />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <BlogHub />
        </LazyLoad>
        <LazyLoad threshold={0.01} className="content-auto">
          <FinalCTA />
        </LazyLoad>

        <Footer />
      </div>
    </main>
  );
}
