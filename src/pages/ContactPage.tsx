import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    
    // In a real scenario, you would send this to your backend or a service like Formspree
    // For now, we'll simulate a 1.5s delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass max-w-md w-full p-12 text-center border-white/10"
        >
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-cyan-500" />
          </div>
          <h1 className="text-3xl font-heading font-extrabold uppercase mb-4 tracking-tighter">Transmission Received</h1>
          <p className="text-white/50 mb-8 leading-relaxed">
            Your request for scale has been logged. Our strategy team will review your data and contact you within 24 hours.
          </p>
          <Link to="/">
            <Button className="accent-gradient w-full h-14 rounded-full font-bold uppercase tracking-widest text-xs">
              Return to Interface
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 overflow-hidden relative">
      <div className="mesh-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 glass border-b border-white/5 px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 group-hover:text-white transition-colors">Back to Mission</span>
        </Link>
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 accent-gradient rounded-sm" />
            <span className="font-heading font-extrabold text-lg tracking-tighter uppercase">Eleve</span>
        </div>
      </nav>

      <main className="container mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Brand Story & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-500 font-semibold tracking-[0.3em] text-xs uppercase mb-6 block">Direct Link</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter mb-8 leading-[0.9] uppercase">
              Start Your <br />
              <span className="text-outline">Ascension.</span>
            </h1>
            <p className="text-lg text-white/50 max-w-md mb-12 leading-relaxed">
              We don't take on every client. We only partner with founders ready to 
              dismantle chaos and build systematic, high-velocity growth engines.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Intelligence Hub", value: "strategy@eleve.consultancy" },
                { icon: Phone, label: "Direct Signal", value: "+1 (888) ELEVE-GRW" },
                { icon: MapPin, label: "Coordinates", value: "Global HQ — Silicon Valley / Singapore" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/5 group-hover:border-cyan-500/50 transition-colors">
                    <item.icon className="w-5 h-5 text-white/40 group-hover:text-cyan-500 transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{item.label}</div>
                    <div className="text-lg font-display font-medium text-white/80">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-Performance Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-12 border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-1">Full Name</label>
                    <Input 
                      {...register("name")}
                      placeholder="e.g. John Matrix"
                      className={cn(
                        "h-14 bg-white/5 border-white/10 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all",
                        errors.name && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                      )}
                    />
                    {errors.name && <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest px-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-1">Enterprise Email</label>
                    <Input 
                      {...register("email")}
                      placeholder="john@company.com"
                      className={cn(
                        "h-14 bg-white/5 border-white/10 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all",
                        errors.email && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                      )}
                    />
                    {errors.email && <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest px-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-1">Company / Organization</label>
                   <Input 
                      {...register("company")}
                      placeholder="The Scale Co."
                      className={cn(
                        "h-14 bg-white/5 border-white/10 rounded-xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all",
                        errors.company && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                      )}
                    />
                   {errors.company && <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest px-1">{errors.company.message}</p>}
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold px-1">Strategic Message</label>
                   <textarea 
                      {...register("message")}
                      placeholder="Briefly describe your current scaling bottlenecks..."
                      className={cn(
                        "w-full min-h-[150px] bg-white/5 border-white/10 rounded-xl p-4 text-sm focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none",
                        errors.message && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                      )}
                    />
                   {errors.message && <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest px-1">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-xl accent-gradient text-white font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Execute Transmission
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-center text-white/20 uppercase tracking-widest font-medium">
                  By submitting, you agree to our processing protocol and non-disclosure clauses.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative Watermark */}
      <div className="absolute -bottom-20 -left-20 text-[20vw] font-display font-black text-white/5 pointer-events-none select-none uppercase leading-none">
        CONNECT.
      </div>
    </div>
  );
}
