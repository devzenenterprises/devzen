import { motion } from "framer-motion";
import { Brain, LineChart, Bot, Workflow, Shield, Gauge } from "lucide-react";
import { GlassCard } from "./GlassCard";

const features = [
  {
    icon: Brain,
    title: "Generative AI",
    description: "Intelligent models that learn and adapt to your business patterns",
    color: "text-accent",
  },
  {
    icon: LineChart,
    title: "Build Apps",
    description: "Forecast trends and make data-driven decisions in real-time",
    color: "text-secondary",
  },
  {
    icon: Bot,
    title: "SAP Joule",
    description: "Automate repetitive tasks with AI-powered assistants",
    color: "text-primary",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description: "Orchestrate complex processes with intelligent automation",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "AI-enhanced threat detection and compliance monitoring",
    color: "text-accent",
  },
  {
    icon: Gauge,
    title: "Real-time Processing",
    description: "Sub-second response times for mission-critical operations",
    color: "text-primary",
  },
];

export const AIShowcase = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest mb-4 block">
            AI-Powered Innovation
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Intelligent Automation</span>
            <br />
            <span className="text-foreground">at Enterprise Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Harness the power of artificial intelligence to transform your business processes,
            drive efficiency, and unlock new possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 flex-grow rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
