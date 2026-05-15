import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center max-w-5xl mx-auto border-white/5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-extrabold mb-8 leading-tight uppercase">
              Ready to <span className="text-outline">Ascend?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Your business doesn't need more chaos. It needs systems that scale. 
              Join the elite circle of businesses transforming through Elevé's 
              consulting frameworks.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                onClick={() => navigate("/contact")}
                className="h-16 px-12 rounded-full accent-gradient text-white hover:opacity-90 text-lg font-bold group border-none cursor-pointer"
              >
                Schedule Consultation
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button size="lg" variant="ghost" className="h-16 px-12 rounded-full glass border-white/10 hover:bg-white/5 text-lg font-bold">
                Talk to Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
