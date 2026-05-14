import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: ["About", "Services", "Case Studies", "Insights"],
  Contact: ["Book a Call", "Contact Support", "Media Kit", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black/40 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4 max-w-sm">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="w-8 h-8 accent-gradient rounded-sm transition-transform group-hover:rotate-12" />
              <span className="font-heading font-extrabold text-xl tracking-tighter uppercase">
                Eleve
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-8 leading-relaxed font-bold">
              Partner Ecosystem
            </p>
            <div className="flex gap-6 opacity-30 invert filter grayscale mb-8">
              <span className="font-bold text-xs uppercase tracking-widest">Redline</span>
              <span className="font-bold text-xs uppercase tracking-widest">Velocity</span>
              <span className="font-bold text-xs uppercase tracking-widest">Quantum</span>
            </div>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border-white/5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-white/20 mb-6 font-heading">
                    {title}
                  </h4>
                  <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-white/40 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="text-white/20 text-[10px] uppercase tracking-widest mb-4 md:mb-0 font-bold">
            © {new Date().getFullYear()} Eleve Consultancy Services LLP. Global Headquarters.
          </div>
          <div className="flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-white/40 hover:text-white text-xs uppercase tracking-widest font-black flex items-center gap-2"
            >
              Back to Top <ArrowUp className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Brand Watermark Overlay */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none opacity-[0.02] select-none translate-y-1/2">
        <h2 className="text-[30vw] font-display font-black whitespace-nowrap text-center leading-none">
          ELEVE.SCALE.GROW.
        </h2>
      </div>
    </footer>
  );
}
