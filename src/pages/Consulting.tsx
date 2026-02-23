import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Workflow
} from "lucide-react";

const consultingServices = [
  
  {
    icon: Target,
    title: "Digital Strategy",
    description:
      "Develop comprehensive digital transformation roadmaps aligned with your business objectives and market dynamics."
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description:
      "Streamline operations and enhance efficiency through data-driven process improvement methodologies."
  },
  {
    icon: BarChart3,
    title: "Technology Assessment",
    description:
      "Evaluate your current technology landscape and identify opportunities for modernization and improvement."
  },
  {
    icon: Settings,
    title: "Change Management",
    description:
      "Guide your organization through digital transformation with effective change management strategies."
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description:
      "Leverage data analytics to drive informed decision-making and uncover actionable business insights."
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description:
      "Foster a culture of innovation and explore emerging technologies to maintain competitive advantage."
  }
];

const benefits = [
  "Accelerated digital transformation",
  "Reduced operational costs",
  "Improved business agility",
  "Enhanced customer experience",
  "Data-driven decision making",
  "Competitive market positioning"
];

const Consulting = () => {
  // 👉 Mail handler for CTA
  const handleMail = () => {
    const mail = `mailto:info@devzenenterprises.com?subject=${encodeURIComponent(
      "Consultation Request"
    )}&body=${encodeURIComponent(
      `Hello DevZen Team,

I would like to schedule a consultation.

Thanks & Regards`
    )}`;

    window.location.href = mail;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Consulting Services
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
              Strategic IT Consulting
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transform your business with expert guidance. Our consulting
              services help you navigate digital transformation and maximize
              your technology investments.
            </p>
          </motion.div>

         
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Consulting Services?
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Expert Consultants</h3>
            <p className="text-slate-400">
              Certified professionals with deep industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Schedule a free consultation with our experts.
          </p>

          <button
            onClick={handleMail}
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;