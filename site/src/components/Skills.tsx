"use client";

import { motion, Variants } from "framer-motion";
import CircuitBackground from "./CircuitBackground";
import CodeStream from "./CodeStream";

export default function Skills() {
  const skillGroups = [
    { category: "VISUALIZATION", tools: "POWER BI · TABLEAU · DAX · RECHARTS · LEAFLET" },
    { category: "PROGRAMMING", tools: "PYTHON · SQL · MYSQL · TYPESCRIPT · JAVA · PHP" },
    { category: "FRONTEND", tools: "REACT · HTML / CSS · TAILWIND CSS · VITE" },
    { category: "SPREADSHEETS", tools: "EXCEL · POWER QUERY · VBA" },
    { category: "DESIGN", tools: "FIGMA · PHOTOSHOP · AE" },
    { category: "ANALYTICS", tools: "DATA MODELING · STATISTICAL ANALYSIS · REST API · REAL-TIME ANALYTICS" },
    { category: "AI & CLOUD", tools: "GEMINI AI · IBM CLOUD · GEN AI · AI-ASSISTED ANALYSIS" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section className="py-20 md:py-32 px-5 md:px-12 max-w-7xl mx-auto relative overflow-hidden bg-black border-t border-white/5">
      {/* High-Tech Procedural Background (Right Side) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 opacity-80 lg:opacity-85 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Procedural Circuit Background */}
        <CircuitBackground 
          density="medium"
          opacity={0.55}
          color="#c8ff00"
          animationDuration={2}
        />

        {/* Streaming Code Layer */}
        <div className="absolute inset-0 opacity-40">
          <CodeStream rowCount={15} color="#c8ff00" triggerMode="self" />
        </div>

        {/* Dynamic Scanline - Optimized with CSS */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-transparent via-neon/25 to-transparent z-10 pointer-events-none"
          style={{
            animation: "scanline 15s linear infinite",
            willChange: "transform"
          }}
        />

        {/* Floating Data Nodes - Minimalist */}
        {Array.from({ length: 12 }).map((_, i) => {
          const nodeOpacity = 0.75 + (Math.random() * 0.1);
          return (
            <motion.div
              key={`node-${i}`}
              initial={{ 
                x: (50 + Math.random() * 45) + "%", 
                y: (10 + Math.random() * 80) + "%",
                opacity: 0 
              }}
              animate={{ 
                opacity: [0, nodeOpacity, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: i * 0.8 
              }}
              className="absolute w-1 h-1 bg-neon rounded-full shadow-[0_0_10px_rgba(200,255,0,0.5)] z-20"
            />
          );
        })}

        {/* Fading Edge Mask - Stronger on mobile for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 lg:via-transparent to-transparent z-20" />
        
        {/* Additional Random Tech Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* 1. Floating Hex Tags */}
          {Array.from({ length: 8 }).map((_, i) => {
            const hexOpacity = 0.85 + (Math.random() * 0.1);
            return (
              <motion.div
                key={`hex-${i}`}
                initial={{ 
                  x: (55 + Math.random() * 40) + "%", 
                  y: (Math.random() * 90) + "%",
                  opacity: 0 
                }}
                animate={{ 
                  opacity: [0, hexOpacity, 0],
                  y: ["+2%", "-2%"],
                  scale: [0.9, 1, 0.9]
                }}
                transition={{ 
                  duration: 4 + Math.random() * 3, 
                  repeat: Infinity, 
                  delay: i * 1.5 
                }}
                className="absolute px-1.5 py-0.5 border border-neon/40 bg-neon/20 font-mono text-[8px] text-neon rounded-xs z-30"
              >
                {`0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()}`}
              </motion.div>
            );
          })}

          {/* 2. Binary Rain Clusters - Reduced and optimized */}
          {Array.from({ length: 4 }).map((_, i) => {
            const binOpacity = 0.65 + (Math.random() * 0.1);
            return (
              <div 
                key={`bin-${i}`}
                className="absolute flex flex-col font-mono text-[8px]"
                style={{ 
                  left: (60 + Math.random() * 35) + "%", 
                  top: (10 + Math.random() * 70) + "%",
                  color: `rgba(200, 255, 0, ${binOpacity})`
                }}
              >
                {Array.from({ length: 4 }).map((_, j) => (
                  <span
                    key={j}
                    style={{
                      animation: `pulse-opacity 2s infinite`,
                      animationDelay: `${(i * 0.5) + (j * 0.2)}s`
                    }}
                  >
                    {Math.round(Math.random())}
                  </span>
                ))}
              </div>
            );
          })}

          {/* 3. Pulsing Solder Vias */}
          {Array.from({ length: 10 }).map((_, i) => {
            const baseOpacity = 0.7 + (Math.random() * 0.1);
            return (
              <motion.div
                key={`via-${i}`}
                style={{ 
                  left: (50 + Math.random() * 40) + "%", 
                  top: (5 + Math.random() * 90) + "%" 
                }}
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [baseOpacity - 0.1, baseOpacity, baseOpacity - 0.1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.7 
                }}
                className="absolute w-3 h-3 border border-neon/30 rounded-full z-0"
              />
            );
          })}

          {/* 4. Glitchy Keywords */}
          {["BUFFER", "OVERFLOW", "KERNEL", "ENCRYPT", "PORT", "DATA"].map((word, i) => {
            const wordOpacity = 0.55 + (Math.random() * 0.1); // Range: 0.55 - 0.65
            return (
              <motion.div
                key={word}
                initial={{ 
                  x: (70 + Math.random() * 20) + "%", 
                  y: (20 + Math.random() * 60) + "%",
                  opacity: 0 
                }}
                animate={{ 
                  opacity: [0, wordOpacity, 0],
                  skewX: [0, 20, -20, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  delay: i * 2.5 
                }}
                className="absolute font-mono text-[7px] text-neon tracking-[0.5em] z-10"
              >
                {word}
              </motion.div>
            );
          })}
        </div>

        {/* Hacker Log Console Overlay */}
        <div className="absolute right-4 bottom-10 w-56 font-mono text-[9px] text-neon/85 hidden lg:block z-30 pointer-events-none">
          <div className="flex flex-col gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                style={{
                  animation: `log-fade 6s infinite`,
                  animationDelay: `${i * 0.5}s`,
                  opacity: 0,
                  transform: "translateX(10px)"
                }}
              >
                {`[${new Date().getHours()}:${new Date().getMinutes()}] > SYS_0x${Math.floor(Math.random() * 65535).toString(16).toUpperCase()}... OK`}
              </div>
            ))}
            <div className="mt-2 text-neon/75 animate-pulse border-t border-neon/20 pt-1">
              STATUS: SECURE_CORE_v4.2
            </div>
          </div>
        </div>

        {/* Traveling Data Packets - Reduced and optimized */}
        {Array.from({ length: 8 }).map((_, i) => {
          const packetOpacity = 0.75 + (Math.random() * 0.1);
          return (
            <div
              key={`packet-${i}`}
              className="absolute w-1.5 h-0.5 bg-neon shadow-[0_0_8px_#c8ff00] z-40"
              style={{
                top: (10 + Math.random() * 80) + "%",
                left: "100%",
                opacity: 0,
                animation: `packet-move ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${i * 1.2}s`
              }}
            />
          );
        })}

        {/* Signal Bars */}
        <div className="absolute right-6 top-10 h-8 opacity-75 hidden lg:flex lg:items-end lg:gap-0.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`bar-${i}`}
              animate={{ height: [4, 12 + Math.random() * 16, 4] }}
              transition={{ 
                duration: 0.5 + Math.random() * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.05 
              }}
              className="w-0.5 bg-neon"
            />
          ))}
        </div>

        {/* Encryption Progress Indicators */}
        <div className="absolute right-10 top-24 opacity-75 hidden lg:flex lg:flex-col lg:gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`progress-${i}`} className="flex flex-col gap-1 w-24">
              <div className="flex justify-between font-mono text-[7px] text-neon uppercase">
                <span>ENCR_SEC_{i}</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  LOAD
                </motion.span>
              </div>
              <div className="h-0.5 w-full bg-white/5 overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-neon"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pulsing Cursor Blips */}
        {Array.from({ length: 8 }).map((_, i) => {
          const blipOpacity = 0.75 + (Math.random() * 0.1);
          return (
            <motion.div
              key={`blip-${i}`}
              initial={{ 
                x: (55 + Math.random() * 40) + "%", 
                y: (10 + Math.random() * 80) + "%" 
              }}
              animate={{ opacity: [0, blipOpacity, 0] }}
              transition={{ 
                duration: 0.1, 
                repeat: Infinity, 
                repeatDelay: 2 + Math.random() * 4,
                delay: i * 0.5
              }}
              className="absolute w-2 h-3 bg-neon z-50"
            />
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-16"
      >
        <span className="text-[10px] md:text-[11px] font-mono font-bold text-muted uppercase tracking-[0.2em]">[02] SKILLS</span>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col relative z-10 lg:pr-[33%]"
      >
        {skillGroups.map((group, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-12 py-4 md:py-6 border-b border-white/5 items-center group relative overflow-hidden"
          >
            {/* Hover Glitch Background */}
            <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/2 transition-colors -z-10" />
            
            <div className="md:col-span-4 lg:col-span-3 mb-2 md:mb-0">
              <h3 className="text-2xl sm:text-3xl md:text-[36px] font-display font-black text-neon tracking-tight leading-none uppercase transition-all duration-300 group-hover:pl-2 group-hover:drop-shadow-[0_0_15px_rgba(182,255,0,0.8)] group-hover:scale-105 origin-left">
                {group.category}
              </h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-mono font-medium text-white/70 tracking-tight pl-0 md:pl-10 uppercase group-hover:text-white transition-colors">
                {group.tools}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon/5 blur-[120px] rounded-full pointer-events-none" />

      <style jsx>{`
        @keyframes scanline {
          from { transform: translateY(-100%); }
          to { transform: translateY(200vh); }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes log-fade {
          0% { opacity: 0; transform: translateX(10px); }
          10% { opacity: 1; transform: translateX(0); }
          90% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-5px); }
        }
        @keyframes packet-move {
          0% { left: 100%; opacity: 0; }
          10%, 90% { opacity: 0.8; }
          100% { left: -10%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
