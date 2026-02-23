import { motion } from "framer-motion";

export const DataFlowLines = () => {
  const lines = [
    { x1: "10%", y1: "25%", x2: "50%", y2: "50%", delay: 0 },
    { x1: "90%", y1: "20%", x2: "50%", y2: "50%", delay: 0.3 },
    { x1: "15%", y1: "65%", x2: "50%", y2: "50%", delay: 0.6 },
    { x1: "85%", y1: "60%", x2: "50%", y2: "50%", delay: 0.9 },
    { x1: "10%", y1: "90%", x2: "50%", y2: "50%", delay: 1.2 },
    { x1: "85%", y1: "85%", x2: "50%", y2: "50%", delay: 1.5 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(205 100% 60% / 0)" />
          <stop offset="50%" stopColor="hsl(205 100% 60% / 0.8)" />
          <stop offset="100%" stopColor="hsl(185 80% 50% / 0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {lines.map((line, index) => (
        <motion.line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#lineGradient)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: line.delay, duration: 1.5, ease: "easeInOut" },
            opacity: { delay: line.delay, duration: 0.5 },
          }}
        />
      ))}
      
      {/* Animated data particles */}
      {lines.map((line, index) => (
        <motion.circle
          key={`particle-${index}`}
          r="4"
          fill="hsl(185 80% 50%)"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            cx: [line.x1, line.x2],
            cy: [line.y1, line.y2],
          }}
          transition={{
            duration: 2,
            delay: line.delay + 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
};
