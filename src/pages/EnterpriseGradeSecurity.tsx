import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Server, FileCheck, AlertTriangle, CheckCircle, Key } from "lucide-react";

const EnterpriseGradeSecurity = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data transmitted between SAP systems and third-party applications is protected with AES-256 encryption, ensuring complete confidentiality at rest and in transit."
    },
    {
      icon: Eye,
      title: "Real-Time Threat Monitoring",
      description: "Our AI-powered security operations center monitors all integration traffic 24/7, detecting and neutralizing threats before they can impact your business operations."
    },
    {
      icon: Server,
      title: "Secure Data Centers",
      description: "Your SAP integrations run on SOC 2 Type II certified infrastructure with redundant security controls, biometric access, and continuous surveillance."
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Built-in compliance frameworks for GDPR, HIPAA, SOX, and industry-specific regulations ensure your SAP ecosystem meets all regulatory requirements."
    },
    {
      icon: Key,
      title: "Identity & Access Management",
      description: "Seamless integration with SAP Identity Management and third-party IAM solutions provides granular access control and single sign-on capabilities."
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Regular penetration testing and automated vulnerability scanning identify and remediate security gaps in your SAP integration landscape."
    }
  ];

  const certifications = [
    "ISO 27001:2022 Certified",
    "SOC 2 Type II Compliant",
    "GDPR Ready",
    "HIPAA Compliant",
    "PCI DSS Level 1",
    "SAP Certified Integration"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Enterprise Security</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              Enterprise-Grade Security
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Protect your SAP ecosystem with bank-level encryption, advanced threat detection, 
              and comprehensive compliance management designed for the world's most demanding enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-16 px-4 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "0", label: "Data Breaches" },
              { value: "256-bit", label: "AES Encryption" },
              { value: "24/7", label: "Security Monitoring" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive Security Framework</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our multi-layered security architecture protects every aspect of your SAP integration landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Security Integration */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Native SAP Security Integration</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our platform seamlessly integrates with SAP's native security features, including SAP GRC, 
                SAP Identity Management, and SAP Enterprise Threat Detection, providing unified security 
                governance across your entire landscape.
              </p>
              
              <div className="space-y-4">
                {[
                  "SAP GRC Access Control Integration",
                  "SAP Identity Authentication Service",
                  "SAP Enterprise Threat Detection",
                  "SAP Cloud Identity Services",
                  "SAP Data Custodian Compliance"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-center hover:border-blue-500/50 transition-colors"
                >
                  <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-slate-300">{cert}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
};

export default EnterpriseGradeSecurity;