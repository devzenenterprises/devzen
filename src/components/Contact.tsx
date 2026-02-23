import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    //open mail
    const mail = `mailto:info@devzenenterprises.com?subject=Contact%20Form&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage: ${formData.message}`)}`;
    window.location.href = mail;
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Devzen Software, NH 216,", " Narsapuram, Andhra Pradesh 534275.", "India"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9848080910", "+91 9502724657"]
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-muted">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Contact Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Let's Start a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Conversation</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Ready to transform your enterprise? Get in touch with our team of experts today.
          </p>
        </motion.div>
       
<motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid lg:grid-cols-2 gap-12">
              {contactInfo.map((info, index) => (
                <GlassCard key={info.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

           
          </motion.div>
         
        <div className=" grid gap-12 lg:grid-cols-2 ">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          > 
          <div className="">
            <GlassCard className="p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
            
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </GlassCard>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
         
            {/* Google Map */}
            <GlassCard className="p-2 overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1ucTYwH7O_xRvTBWhvmbafIT8omQF0zQ&amp;ehbc=2E312F&amp;noprof=1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};