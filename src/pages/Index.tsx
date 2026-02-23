import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { Clients } from "@/components/Clients";
import { Link } from "react-router-dom"; 
import { AIShowcase } from "@/components/AIShowcase";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Careers } from "@/components/Careers";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


import { ClosingStatement } from "@/components/ClosingStatement";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
     
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <Clients />
      <AIShowcase />
      <AboutUs />
      <WhyChooseUs />
      <Careers />
      <TestimonialsSection />
      <Contact />
      <ClosingStatement />
      <Footer />

    </main>
  );
};

export default Index;
