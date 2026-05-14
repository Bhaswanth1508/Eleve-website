import { motion } from "motion/react";
import { ExternalLink, TrendingUp, Users2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    client: "Nebula FinTech",
    sector: "Financial Services",
    result: "124% Revenue Increase",
    tagline: "Bridging the gap between legacy banking and modern automation.",
    stats: [
      { label: "Lead Gen", value: "+300%" },
      { label: "CAC", value: "-45%" },
    ],
    image: "https://picsum.photos/seed/nebula/800/600",
    color: "bg-blue-500/10"
  },
  {
    client: "Nexus Logistics",
    sector: "Supply Chain",
    result: "Operational Mastery",
    tagline: "Redefining the logistics flywheel with AI-driven route optimization.",
    stats: [
      { label: "Efficiency", value: "92%" },
      { label: "Fleet Cost", value: "-22%" },
    ],
    image: "https://picsum.photos/seed/nexus/800/600",
    color: "bg-emerald-500/10"
  },
  {
    client: "Alpha Retail",
    sector: "E-commerce",
    result: "Scale to $50M ARR",
    tagline: "Transformation from a local brand to a global digital powerhouse.",
    stats: [
      { label: "Global Reach", value: "24 countries" },
      { label: "Retention", value: "85%" },
    ],
    image: "https://picsum.photos/seed/alpha/800/600",
    color: "bg-purple-500/10"
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Case Studies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium mb-6"
          >
            Stories of <span className="text-gradient">Impact.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-xl mx-auto"
          >
            Explore how we've helped diverse businesses navigate complex 
            challenges and emerge as industry leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {cases.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden border border-white/5 rounded-3xl bg-[#0A0A0A] group-hover:border-white/20 transition-all duration-500">
                <div className="lg:col-span-7 relative h-[300px] lg:h-auto overflow-hidden">
                   <img 
                      src={project.image} 
                      alt={project.client}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-75"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent lg:hidden" />
                </div>
                
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/60">
                      {project.sector}
                    </span>
                    <span className="text-white font-display font-bold text-sm italic">
                      {project.result}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6 group-hover:text-gradient transition-all duration-500">
                    {project.client}
                  </h3>
                  
                  <p className="text-white/50 mb-8 leading-relaxed text-base lg:text-lg">
                    {project.tagline}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {project.stats.map(stat => (
                      <div key={stat.label}>
                        <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-fit h-12 px-8 rounded-full border-white/20 hover:bg-white hover:text-black gap-2 group/btn font-bold">
                    View Project <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="link" className="text-white/40 hover:text-white font-bold text-lg uppercase tracking-widest">
            View All Performance Logs →
          </Button>
        </div>
      </div>
    </section>
  );
}
