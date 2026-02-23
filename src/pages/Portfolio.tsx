import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const portfolio = [
  {
    title: "E-Commerce Platform",
    category: "Enterprise Application",
    description: "A scalable multi-vendor marketplace handling 100K+ daily transactions with real-time inventory management.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    highlights: ["100K+ daily transactions", "Real-time inventory", "Multi-vendor support"]
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "HIPAA-compliant patient management system serving 50+ clinics with integrated telemedicine features.",
    tech: ["Angular", "Python", "MongoDB", "Azure"],
    highlights: ["HIPAA compliant", "50+ clinics", "Telemedicine integration"]
  },
  {
    title: "Logistics & Fleet Tracking",
    category: "Mobile Application",
    description: "Real-time GPS tracking and route optimization app for a fleet of 1000+ vehicles across India.",
    tech: ["React Native", "Node.js", "Redis", "Google Maps API"],
    highlights: ["1000+ vehicles", "Real-time GPS", "Route optimization"]
  },
  {
    title: "Banking Core System Modernization",
    category: "Legacy Modernization",
    description: "Migrated legacy COBOL systems to microservices architecture for a regional bank with 2M+ customers.",
    tech: ["Java", ".NET", "Kubernetes", "Oracle"],
    highlights: ["2M+ customers", "COBOL migration", "Microservices"]
  },
  {
    title: "Supply Chain Analytics Dashboard",
    category: "Cloud Solution",
    description: "AI-powered analytics platform providing predictive insights for supply chain optimization.",
    tech: ["Vue.js", "Python", "TensorFlow", "GCP"],
    highlights: ["AI-powered", "Predictive analytics", "Supply chain optimization"]
  },
  {
    title: "HR & Payroll Automation",
    category: "Enterprise Application",
    description: "End-to-end HR management system automating payroll, attendance, and compliance for 10K+ employees.",
    tech: ["React", "Java", "PostgreSQL", "Docker"],
    highlights: ["10K+ employees", "Payroll automation", "Compliance management"]
  },
  {
    title: "Real Estate Portal",
    category: "Web Application",
    description: "Property listing and management platform with virtual tours, booking system, and CRM integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    highlights: ["Virtual tours", "Online booking", "CRM integration"]
  },
  {
    title: "Education Learning Platform",
    category: "Custom Software",
    description: "Interactive e-learning platform with live classes, assessments, and progress tracking for 50K+ students.",
    tech: ["React", "Python", "PostgreSQL", "WebRTC"],
    highlights: ["50K+ students", "Live classes", "Progress tracking"]
  },
  {
    title: "Insurance Claims Processing",
    category: "Enterprise Application",
    description: "Automated claims processing system reducing turnaround time by 60% with AI-powered fraud detection.",
    tech: ["Angular", ".NET", "SQL Server", "Azure AI"],
    highlights: ["60% faster processing", "AI fraud detection", "Automated workflows"]
  }
];
const categories = ["All", "Enterprise Application", "Custom Software", "Mobile Application", "Legacy Modernization", "Cloud Solution", "Web Application"];
const Portfolio = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore our successful projects across various industries. Each solution demonstrates our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Industries Served" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A selection of our most impactful work across different domains
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* Highlights */}
                <div className="mb-4 space-y-1">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our expertise spans across multiple sectors
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Healthcare", "Finance & Banking", "E-Commerce", "Logistics",
              "Education", "Real Estate", "Insurance", "Manufacturing"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-center text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="mailto:info@devzenenterprises.com?subject=New Project Inquiry&body=Hi DevZen Team,%0D%0A%0D%0AI'm interested in discussing a new project.%0D%0A%0D%0APlease get in touch at your earliest convenience.%0D%0A%0D%0AThank you!"
                className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </a>
            
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Portfolio;