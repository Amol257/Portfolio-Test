"use client";

import { motion, Variants } from "framer-motion";
import CodeStream from "./CodeStream";
import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      id: "01",
      company: "NCRTC",
      role: "IT INTERN — DATA ANALYTICS",
      duration: "SEP-NOV 2023 · GHAZIABAD"
    },
    {
      id: "02",
      company: "INTERNSHIP STUDIO",
      role: "WEB DESIGN INTERN",
      duration: "SEP-OCT 2024 · REMOTE"
    },
    {
      id: "03",
      company: "ZIDIO",
      role: "UI/UX INTERN",
      duration: "APR-JUL 2024 · REMOTE"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-[0.3em]">[03] EXPERIENCE</span>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* CodeStream Background Effect */}
            <div className="absolute inset-0 pointer-events-none -z-10">
              <CodeStream 
                triggerMode="external"
                isHovered={hoveredIndex === index}
                color="#c8ff00"
                rowCount={6}
                snippetPool={[
                  "JOB_ID: " + exp.id,
                  "COMPANY: " + exp.company,
                  "ROLE: " + exp.role,
                  "LOAD_HISTORY_v4.1",
                  "STAT: SUCCESS",
                  "TRACE_ROUTE_GHAZIABAD",
                  "SYNC_REMOTE_NODE"
                ]}
              />
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <motion.span 
                initial={{ opacity: 0.2 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-[18px] font-display font-black text-muted/40 group-hover:text-neon transition-colors leading-none"
              >
                {exp.id}
              </motion.span>
              <h3 className="text-4xl md:text-[46px] font-display font-black text-white tracking-tight leading-none uppercase group-hover:text-neon transition-colors duration-500">
                {exp.company}
              </h3>
            </div>
            
            <div className="pl-0 relative overflow-hidden">
              <p className="text-[12px] font-mono font-black text-white/90 uppercase tracking-tight mb-1">{exp.role}</p>
              <p className="text-[11px] font-mono text-muted font-bold tracking-tight uppercase">{exp.duration}</p>
              
              {/* Subtle accent line on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 h-px bg-neon w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {index < experiences.length - 1 && (
              <div className="hidden lg:block absolute right-[-24px] top-4 bottom-4 w-px bg-white/5" />
            )}
            
            {/* Background decorative element on hover */}
            <div className="absolute inset-x-0 -inset-y-4 bg-neon/0 group-hover:bg-neon/2 transition-colors -z-10 rounded-xs pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
