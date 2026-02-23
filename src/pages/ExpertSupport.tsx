import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  HeadphonesIcon,
  Clock,
  Users,
  MessageSquare,
  BookOpen,
  Video,
  Phone,
  Mail
} from "lucide-react";

const ExpertSupport = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  /* ---------------- SUPPORT FEATURES ---------------- */
  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7/365 Availability",
      description:
        "Our global support teams operate around the clock, ensuring you always have access to expert assistance regardless of time zone."
    },
    {
      icon: Users,
      title: "Dedicated Account Team",
      description:
        "Get a dedicated team of SAP-certified consultants who understand your business and can provide personalized guidance."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Support",
      description:
        "Reach us through your preferred channel - phone, email, chat, or video. We're always just a click or call away."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Knowledge Base",
      description:
        "Access our extensive library of documentation, tutorials, and best practices for self-service troubleshooting."
    },
    {
      icon: Video,
      title: "Live Training Sessions",
      description:
        "Regular webinars and training sessions to keep your team updated on new features and best practices."
    },
    {
      icon: HeadphonesIcon,
      title: "Priority Escalation",
      description:
        "Critical issues are automatically escalated to senior engineers with direct access to development teams."
    }
  ];

  /* ---------------- CLICK HANDLERS ---------------- */
  const handlePhoneClick = () => {
    const phoneNumber = "919848080910"; // without + or spaces
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile → Call
      window.location.href = `tel:+${phoneNumber}`;
    } else {
      // Desktop → WhatsApp
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  const handleMailClick = () => {
    window.location.href = "mailto:info@devzenenterprises.com";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-950 to-emerald-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
              <HeadphonesIcon className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">
                Expert Support
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent">
              24/7 Expert Support
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Round-the-clock support from certified SAP professionals who
              understand your business and are dedicated to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SUPPORT FEATURES ---------------- */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-green-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT METHODS ---------------- */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-400">
              Multiple ways to reach our support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: Phone,
                label: "Call / WhatsApp",
                value: "+91 98480 80910",
                onClick: handlePhoneClick
              },
              {
                icon: Mail,
                label: "Email Support",
                value: "info@devzenenterprises.com",
                onClick: handleMailClick
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                onClick={contact.onClick}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 text-center hover:border-green-500/50 transition-colors cursor-pointer"
              >
                <contact.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">{contact.label}</h4>
                <p className="text-slate-400 text-sm">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertSupport;
