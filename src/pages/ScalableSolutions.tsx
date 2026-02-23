import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp, Server, Cloud, BarChart3, Layers, Cpu, Database, GitBranch, CheckCircle } from "lucide-react";

const ScalableSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scalabilityFeatures = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Built on Kubernetes and microservices, our platform automatically scales to handle any workload, from startups to Fortune 500 enterprises."
    },
    {
      icon: Server,
      title: "Elastic Infrastructure",
      description: "Auto-scaling infrastructure that expands during peak loads and contracts during quiet periods, optimizing costs while maintaining performance."
    },
    {
      icon: Database,
      title: "Distributed Data Processing",
      description: "Handle billions of transactions with our distributed processing engine that parallelizes workloads across multiple nodes."
    },
    {
      icon: Layers,
      title: "Multi-Tenant Architecture",
      description: "Enterprise-grade multi-tenancy with complete data isolation, allowing you to serve multiple business units or clients from a single platform."
    },
    {
      icon: GitBranch,
      title: "Horizontal Scaling",
      description: "Add capacity linearly by deploying additional nodes. No architectural changes required as your business grows."
    },
    {
      icon: Cpu,
      title: "Edge Computing Ready",
      description: "Distribute processing to edge locations for reduced latency and compliance with data residency requirements."
    }
  ];

  const growthStages = [
    {
      stage: "Startup",
      transactions: "10K/month",
      integrations: "5-10",
      description: "Perfect for growing businesses starting their SAP journey"
    },
    {
      stage: "Mid-Market",
      transactions: "1M/month",
      integrations: "25-50",
      description: "Robust platform for established businesses with complex needs"
    },
    {
      stage: "Enterprise",
      transactions: "100M/month",
      integrations: "100+",
      description: "Full-scale deployment for global enterprises"
    },
    {
      stage: "Global",
      transactions: "1B+/month",
      integrations: "500+",
      description: "Multi-region deployment with edge computing and full redundancy"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-violet-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Scalable Architecture</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
              Scalable Solutions
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Architecture that grows with your business, from startup to global enterprise. 
              Our platform handles millions of transactions while maintaining sub-second response times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 px-4 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1B+", label: "Monthly Transactions" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "10x", label: "Auto-Scale Capacity" },
              { value: "<50ms", label: "P99 Latency" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Built for Scale</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every component of our platform is designed to scale horizontally, ensuring consistent performance at any size.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scalabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* SAP Scalability */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">SAP-Optimized Scaling</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our platform is specifically optimized for SAP workloads, with intelligent caching, 
                connection pooling, and batch processing to maximize throughput while minimizing 
                load on your SAP systems.
              </p>
              
              <div className="space-y-4">
                {[
                  "Intelligent RFC/BAPI connection pooling",
                  "Automatic batch processing optimization",
                  "SAP-aware caching layer",
                  "Load balancing across SAP instances",
                  "Queue-based processing for high volume",
                  "Delta sync for efficient data transfer"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-slate-900 border border-purple-500/30"
            >
              <BarChart3 className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                {[
                  { label: "Throughput", value: "5K msgs/sec" },
                  // { label: "Concurrent Connections", value: "1M+" },
                  { label: "Data Processing", value: "1TB/day" },
                  { label: "API Calls", value: "3k/day" }
                ].map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">{metric.label}</span>
                    <span className="text-white font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default ScalableSolutions;