import { motion } from "framer-motion";
import { FloatingNodes } from "./FloatingNodes";
import { DataFlowLines } from "./DataFlowLines";
import { CentralHub } from "./CentralHub";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Integration visualization */}
      <div className="absolute inset-0">
        <DataFlowLines />
        <FloatingNodes />
        <CentralHub />
      </div>

      {/* Hero content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto mt-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-secondary border border-secondary/30 mb-6 backdrop-blur-sm">
            Next-Generation Enterprise Integration
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <span className="text-foreground">Seamless</span>{" "}
          <span className="gradient-text">Integration</span>
          <br />
          <span className="text-foreground">Infinite</span>{" "}
          <span className="gradient-text">Possibilities</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          Unify your enterprise ecosystem with SAP Integration Suite. 
          Connect SAP and third-party applications through intelligent, 
          AI-powered workflows on SAP Business Technology Platform.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
    
        </motion.div>
      </div>

     
    </section>
  );
};
