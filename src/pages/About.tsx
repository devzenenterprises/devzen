import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;