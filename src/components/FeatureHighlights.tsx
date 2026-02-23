import { motion } from "framer-motion";
import { Boxes, Sparkles, Database, Cloud, CloudUpload } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "SAP CPI",
    subtitle: "Integrations",
  },
  {
    icon: CloudUpload,
    title: "SAP PI/PO to CPI",
    subtitle: "Migration",
  },
  {
    icon: Boxes,
    title: "SuccessFactors",
    subtitle: "Ready",
  },
  {
    icon: Sparkles,
    title: "AI",
    subtitle: "Advanced Integration",
  },
  {
    icon: Database,
    title: "SAP S4/HANA",
    subtitle: "Support",
  },
];

export const FeatureHighlights = () => {
  return (
    <section className="py-12 md:py-20 px-16 border-y border-white/5 relative overflow-hidden bg-[#020617]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* MOBILE: flex-col items-start (vertical list)
            DESKTOP: md:flex-row md:justify-between (wide horizontal row) 
        */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-4 group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1e293b]/50 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <item.icon className="w-5 h-5 text-blue-400" />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col whitespace-nowrap">
                <p className="text-[15px] font-bold text-slate-100 leading-tight">
                  {item.title}
                </p>
                <p className="text-[13px] text-slate-400 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};