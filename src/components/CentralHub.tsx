import { motion } from "framer-motion";
import { Cloud, Cpu, Zap } from "lucide-react";

export const CentralHub = () => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Outer ring */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 top-20" >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_15px_hsl(185_80%_50%)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_hsl(205_100%_60%)]" />
        </motion.div>

        {/* Middle ring */}
        <motion.div
          className="absolute inset-4 rounded-full border border-secondary/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_hsl(260_70%_55%)]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_hsl(260_70%_55%)]" />
        </motion.div>

        {/* Inner core */}
        <div className="absolute inset-8 md:inset-12 rounded-full glass-panel flex flex-col items-center justify-center text-center animate-glow-pulse">
          <div className="flex items-center gap-1 mb-1">
            <Cloud className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <Cpu className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          </div>
          <span className="text-xs md:text-sm font-display font-bold gradient-text">SAP BTP</span>
          <span className="text-[10px] md:text-xs text-muted-foreground mt-0.5">Integration Hub</span>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
      </div>
    </motion.div>
  );
};
