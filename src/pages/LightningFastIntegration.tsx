import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Zap, Workflow, Puzzle, Clock, Gauge, Layers, ArrowRight, CheckCircle } from "lucide-react";

const LightningFastIntegration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const integrationFeatures = [
    {
      icon: Puzzle,
      title: "Pre-Built SAP Connectors",
      description: "Over 500+ ready-to-use connectors for SAP S/4HANA, SuccessFactors, Ariba, Concur, and more. Deploy in minutes, not months."
    },
    {
      icon: Workflow,
      title: "Visual Integration Designer",
      description: "Drag-and-drop interface for building complex integration flows without writing code. Map data transformations visually."
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Go from concept to production in days. Our accelerators and templates reduce implementation time by up to 70%."
    },
    {
      icon: Gauge,
      title: "High-Performance Engine",
      description: "Process millions of transactions per hour with our optimized runtime engine. Sub-second response times guaranteed."
    },
    {
      icon: Layers,
      title: "API-First Architecture",
      description: "Modern RESTful and OData APIs make it easy to integrate any application with your SAP landscape."
    },
    {
      icon: Zap,
      title: "Real-Time Sync",
      description: "Bi-directional real-time data synchronization ensures your systems are always in perfect harmony."
    }
  ];

  const integrationStats = [
    { value: "70%", label: "Faster Integration" },
    { value: "500+", label: "Pre-Built Connectors" },
    { value: "99.9%", label: "Reliability Rate" },
    { value: "<100ms", label: "Average Latency" }
  ];

  const sapModules = [
    "SAP S/4HANA Cloud",
    "SAP S/4HANA On-Premise",
    "SAP SuccessFactors",
    "SAP Ariba",
    "SAP Concur",
    "SAP Fieldglass",
    "SAP Customer Experience",
    "SAP Business Technology Platform"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-slate-950 to-orange-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Rapid Integration</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent">
              Lightning Fast Integration
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Reduce SAP integration time by 70% with our pre-built connectors, visual designers, 
              and intelligent automation. Connect your entire enterprise ecosystem in record time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrationStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Integration Accelerators</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our comprehensive toolkit eliminates complexity and accelerates your SAP integration journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-yellow-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Ecosystem Support */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Complete SAP Ecosystem Coverage</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                From SAP S/4HANA to SuccessFactors, Ariba to Concur, our integration platform 
                supports the entire SAP portfolio with certified connectors and proven templates.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {sapModules.map((module, index) => (
                  <motion.div
                    key={module}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{module}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
      <Footer />
    </div>
  );
};

export default LightningFastIntegration;
