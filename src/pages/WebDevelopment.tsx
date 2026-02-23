import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Globe, Palette, ShoppingCart, Smartphone, Search, Gauge, CheckCircle, ArrowRight } from "lucide-react";

const webServices = [
  {
    icon: Globe,
    title: "Corporate Websites",
    description: "Professional, high-performance websites that establish your brand presence and drive business growth.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Robust online stores with seamless shopping experiences, secure payments, and inventory management.",
    features: ["Product Management", "Payment Gateway", "Order Tracking", "Analytics Dashboard"]
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Web applications that work like native apps with offline capabilities and push notifications.",
    features: ["Offline Support", "Push Notifications", "App-like Experience", "Cross-Platform"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to enhance user engagement and conversion rates.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    description: "Search engine optimization and performance tuning to maximize your online visibility and reach.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Performance Audit"]
  },
  {
    icon: Gauge,
    title: "Web Performance",
    description: "Speed optimization and performance enhancements for faster loading and better user experience.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Setup"]
  }
];

const portfolio = [
  { title: "Enterprise Portal", category: "Web App", tech: "React, Node.js" },
  { title: "E-commerce Platform", category: "Online Store", tech: "Next.js, Stripe" },
  { title: "SaaS Dashboard", category: "Web App", tech: "Vue.js, Python" },
  { title: "Corporate Website", category: "Website", tech: "React, Tailwind" }
];

const WebDevelopment = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              Web Development
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Modern Web Development
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Create stunning, high-performance web experiences that captivate users and drive results. 
              From corporate websites to complex web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
 <a 
              href="mailto:info@devzenenterprises.com?subject=Web Development Project Inquiry&body=Hello Devzen Team,%0D%0A%0D%0AI am interested in your web development services.%0D%0A%0D%0APlease contact me to discuss my project requirements.%0D%0A%0D%0AThank you!"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
            >
            Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
 <Link 
              to="/portfolio"
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            >            View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Web Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive web development solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A glimpse of our recent web development work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-orange-400/50 group-hover:text-orange-400 transition-colors" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-400 font-medium">{project.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Us for Web Development?
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We combine creative design with technical excellence to deliver web solutions 
                that not only look stunning but perform exceptionally.
              </p>
              <div className="space-y-4">
                {[
                  "Responsive, mobile-first design",
                  "SEO-optimized architecture",
                  "Lightning-fast performance",
                  "Secure and scalable solutions",
                  "Ongoing maintenance & support"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "300+", label: "Websites Delivered" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "50ms", label: "Avg. Load Time" },
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={stat.label} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Web Presence?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's create a stunning website that drives results for your business.
            </p>
 <a 
              href="mailto:info@devzenenterprises.com?subject=Free Quote Request - Web Development&body=Hello Devzen Team,%0D%0A%0D%0AI would like to request a free quote for web development services.%0D%0A%0D%0AProject Details:%0D%0A- Type of website:%0D%0A- Key features needed:%0D%0A- Timeline:%0D%0A- Budget range:%0D%0A%0D%0APlease contact me to discuss further.%0D%0A%0D%0AThank you!"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors inline-block"
            >            Get Free Quote
            </a>
          
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;