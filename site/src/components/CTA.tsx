"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [copied, setCopied] = useState(false);
  const email = "amol.singhal25@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
      {/* Refined Edge Details - Minimal Glow */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-neon shadow-[0_0_10px_rgba(182,255,0,0.5)] z-20 pointer-events-none opacity-40" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-neon shadow-[0_0_10px_rgba(182,255,0,0.5)] z-20 pointer-events-none opacity-40" />
      
      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-linear-to-r from-transparent via-neon/30 to-transparent z-20 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-left"
      >
        <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">/ 05 CONTACT</span>
      </motion.div>

      <div className="relative mb-24 overflow-hidden">
        <motion.h2 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-[10vw] md:text-[140px] font-display leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/40 select-none uppercase"
        >
          LET&apos;S WORK.
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center gap-6 group"
        >
          <div 
            onClick={copyEmail}
            className="cursor-pointer transition-all duration-300 relative"
          >
            <div className="h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div 
                    key="copied"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[10px] font-mono font-black tracking-[0.3em] text-neon uppercase"
                  >
                    [ EMAIL COPIED ]
                  </motion.div>
                ) : (
                  <motion.div 
                    key="copy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] font-mono font-black tracking-[0.3em] text-neon/60 uppercase"
                  >
                    CLICK TO COPY EMAIL
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <span className="text-2xl md:text-4xl font-mono font-bold tracking-tighter text-white hover:text-neon transition-colors">
              {email}
            </span>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="h-px w-12 bg-white/10" 
          />
          
          <motion.div 
            variants={itemVariants}
            className="text-[11px] font-mono font-medium text-white/40 uppercase tracking-widest"
          >
            GHAZIABAD, INDIA · GMT +5:30
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-24"
        >
          {[
            { label: "LINKEDIN", href: "https://linkedin.com/in/amolsinghal" },
            { label: "EMAIL", href: `mailto:${email}` },
            { label: "RESUME", href: "#" }
          ].map((link) => (
            <motion.a 
              key={link.label}
              variants={itemVariants}
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono font-black text-white/60 hover:text-white transition-all tracking-[0.3em] relative group pb-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-neon transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
