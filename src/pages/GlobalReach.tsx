import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, MapPin, Languages, Clock, Building2, Users, CheckCircle, Plane } from "lucide-react";

const GlobalReach = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const globalFeatures = [
    {
      icon: MapPin,
      title: "5+ Countries Served",
      description: "From North America to Asia-Pacific, we have local presence and expertise in over 5 countries worldwide."
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Platform and support available in 5+ languages, ensuring seamless communication with your global teams."
    },
    {
      icon: Clock,
      title: "Follow-The-Sun Support",
      description: "With offices across all time zones, we provide true 24/7 support with local teams always available."
    },
    {
      icon: Building2,
      title: "Regional Data Centers",
      description: "Data residency compliance with regional data centers in Americas, EMEA, and APAC regions."
    },
    {
      icon: Users,
      title: "Local Implementation Teams",
      description: "Native-speaking consultants with deep understanding of local business practices and regulations."
    },
    {
      icon: Globe,
      title: "Global SAP Partnerships",
      description: "Strategic partnerships with SAP across all regions, ensuring access to latest innovations and support."
    }
  ];

  const regions = [
    {
      name: "Americas",
      countries: ["United States", "Canada", "Brazil", "Mexico", "Argentina", "Colombia", "Chile"],
      offices: 2,
      employees: 25
    },
    {
      name: "EMEA",
      countries: ["Germany", "United Kingdom", "France", "Netherlands", "UAE", "South Africa", "India"],
      offices: 12,
      employees: 200
    },
    {
      name: "Asia Pacific",
      countries: ["Japan", "Australia", "Singapore", "China", "South Korea", "Thailand", "Indonesia"],
      offices: 10,
      employees: 175
    }
  ];

  const localizations = [
    "SAP Localization for 5+ countries",
    "Local currency and tax compliance",
    "Regional regulatory requirements",
    "Country-specific workflows",
    "Local language interfaces",
    "Time zone-aware scheduling"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-slate-950 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
              <Globe className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-400 font-medium">Worldwide Presence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              Global Reach
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Supporting businesses across 5+ countries with localized expertise, regional data centers, 
              and native-speaking professionals who understand your local market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 px-4 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Countries" },
              { value: "2", label: "Global Offices" },
              { value: "25+", label: "Team Members" },
              { value: "5+", label: "Languages" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Truly Global Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our worldwide infrastructure and local expertise ensure seamless SAP operations across all regions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Regional Presence</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Strategic offices and teams positioned across major business hubs worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-teal-400" />
                  <h3 className="text-2xl font-bold">{region.name}</h3>
                </div>
                
                <div className="flex gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-teal-400">{region.offices}</div>
                    <div className="text-slate-500 text-sm">Offices</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-400">{region.employees}</div>
                    <div className="text-slate-500 text-sm">Experts</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SAP Localization */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">SAP Localization Expertise</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our deep expertise in SAP localization ensures your integrations comply with 
                local regulations, support local currencies, and follow country-specific 
                business practices across all your global operations.
              </p>
              
              <div className="space-y-4">
                {localizations.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
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
              {[
                { icon: Plane, label: "On-Site Delivery", desc: "Global deployment teams" },
                { icon: Clock, label: "24/7 Coverage", desc: "Follow-the-sun support" },
                { icon: Languages, label: "Native Speakers", desc: "Local language experts" },
                { icon: Building2, label: "Local Compliance", desc: "Regional regulations" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 text-center"
                >
                  <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Expand Your Global Operations</h2>
            <p className="text-slate-400 text-lg mb-8">
              Connect with our regional experts to discuss your global SAP integration needs.
            </p>
           
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalReach;