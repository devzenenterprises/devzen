import { motion } from "framer-motion";
import { ArrowRight, Database, Cloud, Server, Globe } from "lucide-react";
import { GlassCard } from "./GlassCard";

const integrationSteps =[
  {
    icon: Database,
    title: "Source Systems",
    items: ["SAP ECC", "S/4HANA", "Legacy Apps"],
  },
  {
    icon: Cloud,
    title: "SAP CPI",
    items: ["Pre-built Connectors", "API Management", "Data Mapping"],
  },
  {
    icon: Server,
    title: "SAP BTP",
    items: ["Extensions", "Analytics", "AI Services"],
  },
  {
    icon: Globe,
    title: "Destinations",
    items: ["Cloud Apps", "Mobile", "Partners"],
  },
];

export const IntegrationDiagram = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
            End-to-End <span className="gradient-text">Integration Flow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect any system to any destination with pre-built connectors, 
            intelligent routing, and enterprise-grade security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-start">
          {integrationSteps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <GlassCard delay={index * 0.15} className="flex-grow">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
              
              {index < integrationSteps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center w-8 flex-shrink-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Animated connection line */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-8"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)), transparent)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>
    </section>
  );
};
