import { motion } from "framer-motion";

interface NodeProps {
  label: string;
  x: number;
  y: number;
  delay?: number;
  icon?: React.ReactNode;
}

const FloatingNode = ({ label, x, y, delay = 0, icon }: NodeProps) => (
  <motion.div
    className="absolute glass-panel px-0 py-2 flex  items-center gap-2"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
    }}
    transition={{ 
      opacity: { delay, duration: 0.5 },
      scale: { delay, duration: 0.5 },
      y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    {icon && <span className="text-secondary">{icon}</span>}
    <span className="text-sm font-medium text-foreground whitespace-nowrap">{label}</span>
    <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-secondary animate-pulse" />
  </motion.div>
);

export const FloatingNodes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingNode label="SAP BTP IS" x={5} y={20} delay={0.2} />
      <FloatingNode label="MuleSoft" x={80} y={20} delay={0.4} />
      <FloatingNode label="SAP S/4 HANA" x={10} y={60} delay={0.6} />
      <FloatingNode label="Boomi" x={85} y={60} delay={0.8} />
      <FloatingNode label="Advanced Event Mesh" x={5} y={85} delay={1.0} />
      <FloatingNode label="SAP API Gateway" x={65} y={95} delay={1.2} />
    </div>
  );
};
