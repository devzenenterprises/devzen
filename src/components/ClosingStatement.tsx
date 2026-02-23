import { motion } from "framer-motion";

export const ClosingStatement = () => {
  const words = ["Powering", "Intelligent", "Enterprises", "with", "SAP CPI,", "SAP BTP", "&", "AI"];
  
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block mr-4 ${
                  word === "SAP CPI," || word === "SAP BTP" || word === "AI" 
                    ? "gradient-text" 
                    : "text-foreground"
                }`}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

         

          
        </motion.div>
      </div>
    </section>
  );
};
