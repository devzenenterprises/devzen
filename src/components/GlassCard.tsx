import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const GlassCard = ({ children, className = "", delay = 0, hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`glass-panel p-6 ${hover ? 'transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(205_100%_60%_/_0.2)]' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
