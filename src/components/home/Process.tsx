import { motion } from "motion/react";
import { Search, ListTodo, Map, Zap, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "In-depth sessions to understand your business DNA, challenges, and long-term vision.",
    icon: Search,
    phase: "01"
  },
  {
    title: "Audit",
    desc: "Rigorous data analysis and system evaluation to identify performance gaps and leaks.",
    icon: ListTodo,
    phase: "02"
  },
  {
    title: "Strategize",
    desc: "Architecting a custom roadmap for systems, marketing, finance, and operations.",
    icon: Map,
    phase: "03"
  },
  {
    title: "Execute",
    desc: "Hands-on implementation and integration of world-class scalable frameworks.",
    icon: Zap,
    phase: "04"
  },
  {
    title: "Optimize",
    desc: "Continuous stress-testing and refinement based on real-time performance data.",
    icon: CheckCircle,
    phase: "05"
  },
  {
    title: "Scale",
    desc: "The final leap into exponential growth with robust, self-sustaining ecosystems.",
    icon: Rocket,
    phase: "06"
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/40 uppercase tracking-[0.2em] text-sm font-bold mb-4"
          >
            The Framework
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-medium leading-tight mb-6"
          >
            How we build <br />
            <span className="text-gradient font-bold italic">High-Performance Machines.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical/Horizontal Line Connector */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:text-right md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-white transition-all duration-500 group-hover:scale-[3] group-hover:blur-sm" />
                </div>

                <div className="pl-16 md:pl-0 md:w-full space-y-4 pt-1">
                  <div className={`text-5xl font-display font-black text-white/5 select-none ${
                    index % 2 === 0 ? "md:mr-0" : ""
                  }`}>
                    {step.phase}
                  </div>
                  <div className="flex items-center gap-3 md:justify-inherit">
                    {index % 2 !== 0 && <step.icon className="w-6 h-6 text-white md:hidden" />}
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{step.title}</h3>
                    {index % 2 === 0 && <step.icon className="w-6 h-6 text-white md:hidden" />}
                  </div>
                  <p className="text-white/40 leading-relaxed max-w-sm ml-0 md:ml-auto md:mr-0">
                    {step.desc}
                  </p>
                </div>
                
                {/* Desktop Spacer */}
                <div className="hidden md:block md:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
