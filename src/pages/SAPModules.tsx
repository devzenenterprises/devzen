import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Database,
  Users,
  ShoppingCart,
  DollarSign,
  Factory,
  Truck,
  BarChart3,
  Settings,
  Cloud,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

const sapModules = [
  {
    icon: DollarSign,
    title: "SAP S/4HANA Finance",
    shortName: "FI/CO",
    description:
      "Comprehensive financial management including general ledger, accounts payable/receivable, asset accounting, and controlling.",
    features: [
      "General Ledger Accounting",
      "Accounts Payable & Receivable",
      "Asset Accounting",
      "Cost Center Accounting",
    ],
    benefits:
      "Real-time financial insights, automated closing processes, and unified financial operations.",
  },
  {
    icon: ShoppingCart,
    title: "SAP MM (Materials Management)",
    shortName: "MM",
    description:
      "End-to-end procurement and inventory management covering purchasing, vendor management, and material planning.",
    features: [
      "Purchase Orders",
      "Vendor Management",
      "Inventory Management",
      "Invoice Verification",
    ],
    benefits:
      "Optimized procurement costs and streamlined inventory control.",
  },
  {
    icon: Factory,
    title: "SAP PP (Production Planning)",
    shortName: "PP",
    description:
      "Production planning and control for manufacturing operations.",
    features: [
      "Demand Planning",
      "MRP",
      "Capacity Planning",
      "Shop Floor Control",
    ],
    benefits:
      "Enhanced production efficiency and reduced lead times.",
  },
  {
    icon: Truck,
    title: "SAP SD (Sales & Distribution)",
    shortName: "SD",
    description:
      "Sales and distribution processes from order to cash.",
    features: [
      "Sales Orders",
      "Pricing",
      "Shipping",
      "Billing",
    ],
    benefits:
      "Faster order-to-cash and improved customer satisfaction.",
  },
  {
    icon: Users,
    title: "SAP HCM / SuccessFactors",
    shortName: "HCM",
    description:
      "Human capital management for workforce optimization.",
    features: [
      "Recruitment",
      "Payroll",
      "Performance",
      "Learning",
    ],
    benefits:
      "Engaged workforce and data-driven HR decisions.",
  },
  {
    icon: Cloud,
    title: "SAP CPI (Cloud Integration)",
    shortName: "CPI",
    description:
      "Integration platform connecting SAP and non-SAP systems.",
    features: [
      "API Management",
      "Pre-built Connectors",
      "B2B Integration",
      "Monitoring",
    ],
    benefits:
      "Seamless integration and faster time-to-value.",
  },
];

const SAPModules = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
              SAP Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Comprehensive SAP Solutions
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert SAP implementation, integration, and support to transform
              your enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sapModules.map((module, index) => (
              <motion.div
                key={module.shortName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-400">{module.shortName}</span>
                    <h3 className="text-xl font-bold">{module.title}</h3>
                  </div>
                </div>

                <p className="text-slate-400 mb-4">{module.description}</p>

                <ul className="space-y-2 text-sm text-slate-300 mb-4">
                  {module.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-blue-400">
                  <span className="text-slate-500">Benefits:</span>{" "}
                  {module.benefits}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Trusted SAP Partner
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            15+ years of SAP expertise, certified consultants, and proven
            delivery across industries.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with SAP?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Talk to our SAP experts and plan your digital transformation.
            </p>

            <button
              onClick={() =>
                (window.location.href =
                  "mailto:info@devzenenterprises.com?subject=SAP%20Consultation%20Request")
              }
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition"
            >
              Schedule SAP Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SAPModules;
