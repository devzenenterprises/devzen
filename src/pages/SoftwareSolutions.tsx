import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Code, Database, Cloud, Smartphone, Shield, Zap, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

const solutions = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your unique business challenges and drive operational excellence.",
    features: ["Agile Development", "Scalable Architecture", "Quality Assurance", "Ongoing Support"]
  },
  {
    icon: Database,
    title: "Enterprise Applications",
    description: "Robust enterprise-grade applications that streamline operations and enable seamless collaboration across your organization.",
    features: ["ERP Systems", "CRM Solutions", "HRM Platforms", "Supply Chain Management"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud-native applications and migration services that provide scalability, reliability, and cost optimization.",
    features: ["Cloud Migration", "Multi-Cloud Strategy", "Serverless Architecture", "DevOps Integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "Mobile Backend"]
  },
  {
    icon: Shield,
    title: "Legacy Modernization",
    description: "Transform outdated systems into modern, efficient solutions while preserving business logic and data integrity.",
    features: ["Code Refactoring", "Database Migration", "API Development", "Microservices"]
  },
  {
    icon: Zap,
    title: "API & Integration",
    description: "Seamless integration solutions connecting your applications, services, and third-party systems.",
    features: ["RESTful APIs", "GraphQL", "Middleware", "Real-time Integration"]
  }
];


const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" }
];

const SoftwareSolutions = () => {
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
              Software Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
              Custom Software Development
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Build powerful, scalable software solutions that drive business growth and innovation. 
              From enterprise applications to cloud-native solutions, we deliver excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a 
              href="mailto:info@devzenenterprises.com?subject=New Project Inquiry&body=Hi DevZen Team,%0D%0A%0D%0AI'm interested in discussing a new software project.%0D%0A%0D%0AProject Details:%0D%0A- Project Type: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A%0D%0APlease get in touch at your earliest convenience.%0D%0A%0D%0AThank you!"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/portfolio"
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Software Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              End-to-end software development services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We leverage modern technologies to build robust, scalable solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understand requirements and define scope" },
              { step: "02", title: "Design", desc: "Create architecture and UI/UX designs" },
              { step: "03", title: "Develop", desc: "Agile development with regular iterations" },
              { step: "04", title: "Deploy", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-slate-400">{phase.desc}</p>
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
              Ready to Build Your Next Solution?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss your project requirements and create something extraordinary together.
            </p>
            <a 
              href="mailto:info@devzenenterprises.com?subject=New Project Inquiry&body=Hi DevZen Team,%0D%0A%0D%0AI'm interested in discussing a new software project.%0D%0A%0D%0APlease get in touch at your earliest convenience.%0D%0A%0D%0AThank you!"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors inline-block"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareSolutions;
