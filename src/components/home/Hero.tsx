import { motion } from "motion/react";
import { ArrowDown, Play, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-white/5 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-white/5 blur-[120px] rounded-full"
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full lg:w-3/5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-cyan-500 font-semibold tracking-[0.3em] text-xs uppercase">
              The Global Standard in Scale
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-8xl font-heading font-extrabold tracking-tighter mb-8 leading-[0.9] uppercase"
          >
            Scale <span className="text-outline">Smarter.</span><br />
            Operate Better.<br />
            Grow Faster.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed"
          >
            Premium enterprise consulting for founders and ambitious businesses. 
            We architect the systems that power sustainable, high-velocity growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button 
              size="lg" 
              onClick={() => navigate("/contact")}
              className="h-16 px-10 rounded-full accent-gradient text-white font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              Start Your Transformation
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full glass font-bold text-sm border-white/10">
              View Capabilities
            </Button>
          </motion.div>

          {/* Dynamic Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-12"
          >
            {[
              { label: "Client Revenue Scale", value: "$420M+" },
              { label: "Avg. OpEx Efficiency", value: "14.2%" },
              { label: "Founders Advised", value: "85+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-heading font-bold text-cyan-500">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side Visual - Operational Pulse */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex w-2/5 justify-center"
        >
          <div className="glass w-full max-w-[450px] aspect-[4/5] p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/80 font-heading">Operational Pulse</h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-500 font-bold">SYSTEMS ACTIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
               <div className="glass p-4 flex flex-col justify-between border-white/5 bg-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-widest font-bold">Growth Index</span>
                    <span className="text-xl font-bold">+34.8%</span>
                  </div>
               </div>
               <div className="glass p-4 flex flex-col justify-between border-white/5 bg-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-widest font-bold">Capital Flow</span>
                    <span className="text-xl font-bold">$1.2M</span>
                  </div>
               </div>
               <div className="glass col-span-2 p-6 flex flex-col gap-4 border-white/5 bg-white/5">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Market Positioning</span>
                    <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div className="h-full w-[88%] accent-gradient" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="h-20 bg-white/[0.03] rounded border border-white/5" />
                    <div className="h-20 bg-white/[0.03] rounded border border-white/5" />
                    <div className="h-20 bg-white/[0.03] rounded border border-white/5" />
                  </div>
               </div>
            </div>

            <div className="mt-auto flex items-center justify-between text-[10px] text-white/30 font-bold uppercase tracking-widest">
              <p>ELEVE INTEL ENGINE V4.0</p>
              <p>SECURED</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
