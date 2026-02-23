import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Careers } from "@/components/Careers";
import { useEffect } from "react";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Careers />
      <Footer />
    </div>
  );
};

export default CareersPage;