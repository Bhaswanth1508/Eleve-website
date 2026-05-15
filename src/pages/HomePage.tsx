import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/home/Hero";
import { About } from "@/src/components/home/About";
import { Services } from "@/src/components/home/Services";
import { CaseStudies } from "@/src/components/home/CaseStudies";
import { Process } from "@/src/components/home/Process";
import { Insights } from "@/src/components/home/Insights";
import { CTA } from "@/src/components/home/CTA";
import { Footer } from "@/src/components/layout/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { MessageCircle, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="dark bg-background text-foreground selection:bg-cyan-500 selection:text-white min-h-screen">
      <div className="mesh-bg" />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Insights />
        <CTA />
      </main>

      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Button
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-2xl p-0 group"
          >
            <MessageCircle className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
            <span className="sr-only">WhatsApp Connect</span>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <Button
            className="w-14 h-14 rounded-full glass hover:bg-white/10 shadow-2xl p-0 group"
          >
            <MessageSquareText className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
            <span className="sr-only">AI Assistant</span>
          </Button>
        </motion.div>
      </div>

      {/* Elegant Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
