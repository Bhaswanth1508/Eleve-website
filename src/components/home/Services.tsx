import { motion } from "motion/react";
import { 
  Briefcase, 
  TrendingUp, 
  Megaphone, 
  Settings, 
  Users, 
  Cpu, 
  Rocket,
  ArrowRight
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Finance Consulting",
    description: "Structure your capital, optimize tax strategies, and manage cash flow with precision.",
    icon: Briefcase,
    color: "from-blue-500/20 to-cyan-500/20",
    points: ["Capital Structuring", "Tax Optimization", "M&A Advisory"]
  },
  {
    title: "Sales Acceleration",
    description: "Scale your revenue through optimized pipelines, sales training, and high-conversion systems.",
    icon: TrendingUp,
    color: "from-orange-500/20 to-red-500/20",
    points: ["GTM Strategy", "Pipeline Optimization", "Sales Enablement"]
  },
  {
    title: "Marketing Strategy",
    description: "Build a brand that commands authority and a performance engine that generates demand.",
    icon: Megaphone,
    color: "from-purple-500/20 to-pink-500/20",
    points: ["Performance Marketing", "Brand Positioning", "Content Ecosystem"]
  },
  {
    title: "Operations & Systems",
    description: "Eliminate bottlenecks and build an unstoppable operational flywheel that scales with you.",
    icon: Settings,
    color: "from-emerald-500/20 to-teal-500/20",
    points: ["Process Architecture", "Supply Chain Optimization", "Standard Operating Procedures"]
  },
  {
    title: "HR & Org Design",
    description: "Acquire world-class talent and design an organizational culture built for high performance.",
    icon: Users,
    color: "from-yellow-500/20 to-amber-500/20",
    points: ["Talent Acquisition", "Comp & Benefits", "Company Culture"]
  },
  {
    title: "IT & Automation",
    description: "Future-proof your business with custom AI integrations, software ecosystems, and automation.",
    icon: Cpu,
    color: "from-indigo-500/20 to-blue-500/20",
    points: ["AI Implementation", "Software Development", "Workflow Automation"]
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/40 uppercase tracking-[0.2em] text-sm font-bold mb-4"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-medium leading-tight"
            >
              Unified Consulting for <span className="text-white/50 italic">Full-Stack Growth.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <p className="text-white/40 max-w-sm mb-6">
              We don't just advise; we architect systems that turn complexity 
              into competitive advantage.
            </p>
            <div className="flex items-center gap-2 text-white font-bold group cursor-pointer">
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#0A0A0A] border-white/5 group relative overflow-hidden hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-2xl">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-display group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-grow">
                  <CardDescription className="text-white/50 text-base mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="p-6 pt-0 mt-auto relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="link" className="px-0 text-white font-bold p-0 flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
