import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";


export const Careers = () => {
  const openings = [
    {
      title: "Senior SAP CPI Consultant",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Integration Services"
    },
    {
      title: "SAP BTP Developer",
      location: "Munich, Germany",
      type: "Full-time",
      department: "Platform Development"
    },
    {
      title: "AI/ML Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Innovation Lab"
    },
    {
      title: "Enterprise Architect",
      location: "New York, USA",
      type: "Full-time",
      department: "Solutions"
    }
  ];

  const benefits = [
    "Competitive salary & bonuses",
    "Remote work flexibility",
    "Learning & certification support",
    "Health & wellness programs",
    "Global career opportunities",
    "Innovation time off"
  ];

  return (
    <section id="careers" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Careers</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Growing Team</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Be part of a team that's shaping the future of enterprise integration. We're always looking for talented individuals who share our passion for innovation.
          </p>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-xl"
        >
       <div className="flex justify-center items-center">
  <img
    src="teamlogo.jpg"
    alt="Our collaborative team working together"
    className="w-full h-64 md:h-80 lg:h-96 object-cover"
  />
</div>

        </motion.div>
      
      </div>
    </section>
  );
};