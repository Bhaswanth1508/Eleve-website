import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, Globe2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Element - Dashboard Mockup Style */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/5 overflow-hidden p-8 flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/business/1200/800')] bg-cover opacity-20 grayscale brightness-50" />
               <div className="relative z-10 w-full max-w-md space-y-4">
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-white"
                  >
                    <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Efficiency</div>
                      <div className="text-lg font-heading font-extrabold uppercase">+85% OpEx Speed</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-cyan-500"
                  >
                    <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Risk Management</div>
                      <div className="text-lg font-heading font-extrabold uppercase">99.9% Compliance</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-blue-500"
                  >
                    <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center">
                      <Globe2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Scaling</div>
                      <div className="text-lg font-heading font-extrabold uppercase">124% Revenue Growth</div>
                    </div>
                  </motion.div>
               </div>
            </div>
            
            {/* Background decorative text */}
            <div className="absolute -bottom-10 -right-10 text-[10vw] font-display font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
              EXECUTION.
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/40 uppercase tracking-[0.3em] text-sm font-bold mb-4">The Eleve Mission</h4>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
                Not just consultants. <br />
                Your <span className="text-gradient">Architects of Scale.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                Founded on the principle that strategy without execution is hallucination, 
                Eleve helps businesses move from chaotic growth to systematic scaling. 
                We integrate ourselves into your DNA to build the engines of tomorrow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Founder Centric", desc: "Built by entrepreneurs for entrepreneurs." },
                { title: "Data Driven", desc: "Every decision backed by rigorous analytics." },
                { title: "Results Obsessed", desc: "We track our success by your ROI." },
                { title: "Cross-Functional", desc: "Seamless integration across departments." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                  <div>
                    <div className="font-display font-bold text-lg mb-1">{item.title}</div>
                    <div className="text-sm text-white/40 leading-snug">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
