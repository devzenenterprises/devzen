import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "./GlassCard";
import { Shield, Zap, HeadphonesIcon, Award, TrendingUp, Globe } from "lucide-react";

export const WhyChooseUs = () => {
  const navigate = useNavigate();
  
  const reasons = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and compliance with global security standards to protect your data.",
      link: "/enterprise-security"
    },
    {
      icon: Zap,
      title: "Lightning Fast Integration",
      description: "Reduce integration time by 70% with our pre-built connectors and intelligent automation.",
      link: "/fast-integration"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description: "Round-the-clock support from certified SAP professionals whenever you need assistance.",
      link: "/expert-support"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "SAP Silver Partner with proven track record of successful enterprise implementations.",
      link: "/certified-excellence"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Architecture that grows with your business, from startup to global enterprise.",
      link: "/scalable-solutions"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting businesses across 50+ countries with localized expertise and solutions.",
      link: "/global-reach"
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 relative bg-muted">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 ">
            The Trusted Partner for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Digital Excellence</span>
          </h2>
          <p className="text-[hsl(215_20%_45%)] max-w-3xl mx-auto text-lg">
            Discover why leading enterprises worldwide choose us for their integration and digital transformation needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => reason.link && navigate(reason.link)}
              className={reason.link ? "cursor-pointer" : ""}
            >
              <GlassCard className="p-6 h-full group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 ">{reason.title}</h3>
                    <p className="text-[hsl(215_20%_45%)] text-sm">{reason.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
