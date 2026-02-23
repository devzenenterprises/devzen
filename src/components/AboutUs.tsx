import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Target, Eye, Users } from "lucide-react";

export const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower enterprises with seamless integration solutions that drive digital transformation and unlock business potential."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in intelligent enterprise integration, connecting businesses worldwide through innovative technology."
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Innovation, integrity, collaboration, and customer success are at the heart of everything we do."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-8 mb-6 text-foreground">
            Transforming Enterprises Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            With over a decade of experience in enterprise integration, we help organizations streamline operations,
            enhance connectivity, and accelerate their digital journey with cutting-edge SAP solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full text-center group hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};