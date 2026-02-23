import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO",
    company: "TechCorp Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    quote: "DevZen transformed our SAP landscape with their CPI expertise. The integration flows they built reduced our processing time by 60%.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "VP of Operations",
    company: "Global Logistics Ltd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    quote: "Their SAP AI solutions gave us predictive insights we never had before. A truly innovative team that delivers results.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "IT Director",
    company: "FinServe Holdings",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    quote: "The BTP applications DevZen developed have streamlined our operations significantly. Professional, reliable, and highly skilled.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-10 h-10 text-sap-blue-200" />
      </div>

      {/* Quote */}
      <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
        "{testimonial.quote}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-sap-blue-400 text-sap-blue-400" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-sap-blue-100"
        />
        <div>
          <div className="font-display font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative  bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sap-blue-100 text-sap-blue-700 rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their experience working with DevZen 
            on their SAP transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
