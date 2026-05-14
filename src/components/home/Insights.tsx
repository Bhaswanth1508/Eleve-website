import { motion } from "motion/react";
import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "The Zero-Waste Operational Flywheel",
    category: "Operations",
    date: "May 12, 2026",
    image: "https://picsum.photos/seed/ops/600/400"
  },
  {
    title: "AI Integration: From Hype to ROI-Centric Scaling",
    category: "Technology",
    date: "May 08, 2026",
    image: "https://picsum.photos/seed/ai/600/400"
  },
  {
    title: "The Founder's Dilemma: Systems vs Chaos",
    category: "Strategy",
    date: "May 02, 2026",
    image: "https://picsum.photos/seed/founder/600/400"
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/40 uppercase tracking-[0.2em] text-sm font-bold mb-4"
            >
              Knowledge Base
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-medium"
            >
              Thought <span className="italic font-light">Leadership.</span>
            </motion.h2>
          </div>
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white hover:text-black font-bold h-12 px-8">
            Explore All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Bookmark className="w-4 h-4" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-white/30">
                  <span>{article.category}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold leading-tight group-hover:text-white/70 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
