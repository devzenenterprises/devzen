import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, BadgeCheck } from "lucide-react";

const teamMembers = [
  { name: "Philip Nethala", certification: ["SAP Integration Suite Certified", "SAP BTP Certified Consultant"],specialty: "Lead Consultant", image: "Philip.jpg" },
  { name: "Surya Ardhani", certification: ["SAP Integration Suite Certified", "SAP Enterprise Architect Certified"], specialty: "Lead Consultant", image: "suryaa.PNG" },
  { name: "Sabiha Sultana", certification: ["SAP Integration Suite Certified", "SAP Generative AI Certified"], specialty: "Lead Consultant", image: "Sabiha.jpg" },
  { name: "Purna Pavan Aduri", certification: ["SAP Integration Suite Certified", "SAP BTP Integration Suite Certified"], specialty: "Lead Consultant", image: "Pavan.png" },
  { name: "Srikanth Mule", certification: ["SAP Integration Suite Certified", "SAP S/4 HANA Cloud Private Edition  Consultant"], specialty: "Lead Consultant", image: "srikanth.jfif" },
  { name: "Akshitha Jampana", certification: ["SAP Integration Suite Certified", "SAP EWM Certified Consultant"], specialty: "Associate Consultant", image: "Akshitha.JPG" },
  { name: "Deva Nandini", certification: ["SAP Integration Suite Certified", "SAP Commerce Cloud Certified"], specialty: "PMO", image: "Nandini.jpg" },
  { name: "Sai Manikanta Yadlapalli", certification: ["SAP Integration Suite Certified", "SAP S/4 HANA Portofolio and Project management Certified"], specialty: "Consultant", image: "SaiManikanta.png" },
  { name: "Phani Suddapalli", certification: ["SAP Integration Suite Certified", "SAP IBP Certified Consultant"], specialty: "Consultant", image: "Phani.png" },
  { name: "Prem Raamana", certification: ["SAP Integration Suite Certified", "SAP Solution Transformation Consultant with SAP Cloud ALM"], specialty: "Consultant", image: "Prem.png" },
  { name: "Narendra Raju", certification: ["SAP Integration Suite Certified", "SAP Production Planning and Manufacturing Certified"], specialty: "Consultant", image: "Raju.png" },
  { name: "Susmitha Devi Pindi", certification: ["SAP Integration Suite Certified", "SAP Solution Manager Certified"], specialty: "Business Analyst", image: "Susmitha.png" },
  { name: "Navya Sri Posina ", certification: ["SAP Integration Suite Certified", "SAP S/4HANA Cloud Private Edition, Sourcing and Procurement Certified"], specialty: "Associate Consultant", image: "Navya.png" },
  { name: "Anubabu Lakku", certification: ["SAP Integration Suite Certified", "SAP Financial Accounting Certified"], specialty: "Consultant", image: "Anubabu.png" },
  { name: "Venkatesh Mudadla", certification: ["SAP Integration Suite Certified", "SAP Integration Developer Certified"], specialty: "Consultant", image: "VenkateshM.png"},
  { name: "Bhargav Lakkireddy", certification: ["SAP Integration Suite Certified", "SAP Business Transformation Certified"], specialty: "Consultant", image: "Bhargav.png" },
  { name: "Hemalatha Aduri", certification: ["SAP Integration Suite Certified", "SAP S/4HANA Cloud Private Edition, Production Planning and Manufacturing Certified"], specialty: "Associate Consultant", image: "Hema.png" },
  { name: "Siva Bhaskar", certification: ["SAP Integration Suite Certified", "SAP SuccessFactors Employee Central Core Certified"], specialty: "Consultant", image: "Siva.png" },
  { name: "PadmaSena Reddy", certification: ["SAP Integration Suite Certified", "SAP SuccessFactors Compensation Certified"], specialty: "Consultant", image: "Senani.png" },
  { name: "Venkatesh Boddu", certification: ["SAP Integration Suite Certified", "SAP Business Network for Supply Chain Consultant"], specialty: "Consultant", image: "VenkateshB.png" },
  { name: "Mounika Kavali", certification: ["SAP Integration Suite Certified", "SAP S/4HANA Sourcing Certified"], specialty: "Software Analyst", image: "Mounika.jfif" },
  { name: "Pavan Kumar Maigapula", certification: ["SAP Integration Suite Certified", "SAP Financial Accounting Certified"], specialty: "Software Analyst", image: "PP.png" },
];

const CertifiedExcellence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-muted">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b ">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">SAP Silver Partner</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certified</span> Team
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet our 25 SAP-certified professionals who bring expertise and excellence to every project. 
              Each team member holds official SAP certifications, ensuring world-class implementation and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-slate-900  border border-slate-900 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                
              >
                {/* Team Member Photo */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-50 object-cover "
                  />
                </div>
                
                <h3 className="font-display text-lg font-semibold text-white text-center mb-1">
                  {member.name}
                </h3>
                
                <p className="text-sm text-primary font-medium text-center mb-3">
                  {member.specialty}
                </p>
                
                <div className="flex flex-col gap-2 bg-slate-50 rounded-lg p-3">
  {Array.isArray(member.certification) &&
    member.certification.map((cert, i) => (
      <div key={i} className="flex items-start gap-2">
        <BadgeCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 leading-relaxed">
          {cert}
        </p>
      </div>
    ))}
</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-slate-600">Certified Professionals</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-slate-600">SAP Certifications</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-slate-600">SAP Modules Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CertifiedExcellence;