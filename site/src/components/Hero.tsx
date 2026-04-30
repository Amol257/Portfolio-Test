"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const TerminalLine = ({ delay = 0 }: { delay?: number }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const commands = [
    "INIT_PIPELINE --NCRTC_V1",
    "SCRAPE_GEO_LATENCY: 24ms",
    "LOAD_MODEL: PROPHET_v4.2",
    "CACHE_SYNC: 100% SUCCESS",
    "SQL_QUERY: SELECT * FROM REVENUE",
    "PUSH_TO_CLOUD: AZURE_BLOB",
    "ENCRYPT_STREAM: AES-256",
    "WEB_SOCKET: ESTABLISHED"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setText(commands[Math.floor(Math.random() * commands.length)]);
    }, delay * 1000);

    const interval = setInterval(() => {
      setText(commands[Math.floor(Math.random() * commands.length)]);
      setTime(new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 3000 + Math.random() * 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [delay]);

  if (!time) return <div className="h-4" />; // Prevent hydration mismatch

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex gap-2"
    >
      <span className="text-neon opacity-50 shrink-0">[{time}]</span>
      <span className="text-white/60 truncate">{text || "SYS_READY_IDLE"}</span>
    </motion.div>
  );
};

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section className="relative pt-12 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative - Scanlines */}
      <div className={`absolute inset-0 overflow-hidden select-none pointer-events-none`} />
      
      {/* Massive Headline */}
      <div className="relative z-10 mb-16">
        <h1 className="text-[clamp(56px,14vw,130px)] font-display leading-[0.82] tracking-[-0.03em] text-white uppercase max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="block"
          >
            TURNING RAW <span className="text-neon italic">DATA</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="block"
          >
            INTO <span className="inline-block relative">
              DECISIONS.
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-2 left-0 h-2 bg-neon/20 -z-10"
              />
            </span>
          </motion.span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* [01] Metrics & Terminal Feed - Left */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 flex flex-col h-full justify-between gap-12"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-10">
              <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-[0.3em]">[01] VITAL_STATS</span>
            </motion.div>
            <div className="flex flex-col gap-10">
              {[
                { val: "3", label: "INTERNSHIPS_COMPLETED" },
                { val: "20%", label: "REDUCTION_IN_REPORT_TIME" },
                { val: "6", label: "INDUSTRY_CERTIFICATIONS" }
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col group">
                  <span className="text-8xl font-display leading-none group-hover:text-neon transition-colors duration-500">{stat.val}</span>
                  <span className="text-[11px] font-mono font-black text-neon uppercase tracking-[0.2em] mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Terminal Feed Mini-Component */}
          <motion.div 
            variants={itemVariants}
            className="bg-black border border-white/10 p-4 rounded-sm font-mono text-[9px] hidden lg:block"
          >
            <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
              <span className="text-white/40 uppercase tracking-widest">System Logs</span>
              <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            </div>
            <div className="space-y-1.5 h-24 overflow-hidden">
               <TerminalLine delay={1.2} />
               <TerminalLine delay={1.4} />
               <TerminalLine delay={1.6} />
               <TerminalLine delay={1.8} />
            </div>
          </motion.div>
        </motion.div>

        {/* Pipeline Graphic - Center */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-5 flex justify-center lg:pt-10"
        >
          <div className="relative w-full aspect-4/3 max-w-[500px] group">
              {/* Tech Grid Background for SVG Area */}
              <div className="absolute inset-0 border border-white/5 bg-[#030303] rounded-sm overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                 {/* Moving light pulse */}
                 <motion.div 
                   animate={{ left: ["-100%", "200%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 w-24 h-full bg-linear-to-r from-transparent via-white/3 to-transparent skew-x-12"
                 />
              </div>

              <svg viewBox="0 0 400 300" className="relative w-full h-full overflow-visible p-4">
                 <defs>
                   <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                     <feGaussianBlur stdDeviation="3" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                 </defs>

                 {/* Connection Paths (Background Glow) */}
                 <g opacity="0.1">
                   <path d="M 100 45 C 140 45, 140 120, 165 120" stroke="#B6FF00" strokeWidth="1" fill="none" />
                   <path d="M 100 55 C 145 55, 145 125, 165 125" stroke="#B6FF00" strokeWidth="1" fill="none" />
                   <path d="M 100 185 C 140 185, 140 145, 165 145" stroke="#B6FF00" strokeWidth="1" fill="none" />
                   <path d="M 100 195 C 145 195, 145 150, 165 150" stroke="#B6FF00" strokeWidth="1" fill="none" />
                   <path d="M 240 120 C 270 120, 270 50, 295 50" stroke="#B6FF00" strokeWidth="1" fill="none" />
                   <path d="M 240 132.5 C 270 132.5, 270 135, 295 135" stroke="#B6FF00" strokeWidth="1" fill="none" />
                   <path d="M 240 145 C 270 145, 270 220, 295 220" stroke="#B6FF00" strokeWidth="1" fill="none" />
                 </g>

                  {/* Left Side Source Nodes */}
                 {[
                   { id: "DATABASE", x: 25, y: 20, label: "DATA_SRCE_01", rows: ["SQL_SERVER", "REVENUE_DB"] },
                   { id: "DATA LAKE", x: 25, y: 160, label: "DATA_SRCE_02", rows: ["AZURE_BLOB", "TELEMETRY"] }
                 ].map((node) => (
                   <g key={node.id}>
                     <rect x={node.x} y={node.y} width="95" height="18" fill="#111" stroke="#B6FF00" strokeWidth="1" />
                     <text x={node.x + 47.5} y={node.y + 12} fill="#B6FF00" fontSize="7" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                       {node.label}
                     </text>
                     <rect x={node.x} y={node.y + 18} width="95" height="52" fill="#000" stroke="#B6FF00" strokeWidth="1" opacity="0.8" />
                     {node.rows.map((row, i) => (
                       <g key={i}>
                         <line x1={node.x} y1={node.y + 35 + i * 17} x2={node.x + 95} y2={node.y + 35 + i * 17} stroke="#B6FF00" strokeWidth="0.5" opacity="0.1" />
                         <text x={node.x + 8} y={node.y + 31 + i * 17} fill="#B6FF00" fontSize="5" fontFamily="var(--font-mono)" opacity="0.5">
                           {`0x${i+1}`}
                         </text>
                         <text x={node.x + 24} y={node.y + 31 + i * 17} fill="white" fontSize="7" fontFamily="var(--font-mono)">
                           {row}
                         </text>
                       </g>
                     ))}
                   </g>
                 ))}

                 {/* Center Processing Node */}
                 <g id="processor">
                   <rect x="160" y="85" width="85" height="95" fill="#000" stroke="#B6FF00" strokeWidth="1" />
                   <rect x="160" y="85" width="85" height="20" fill="#B6FF00" />
                   <text x="202.5" y="98" fill="black" fontSize="8" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
                     ENGINE_CORE
                   </text>
                   <text x="202.5" y="125" fill="#B6FF00" fontSize="6" fontFamily="var(--font-mono)" textAnchor="middle" opacity="0.7">
                     LOAD_BALANCING: ON
                   </text>
                   <g transform="translate(202.5, 150)">
                     <circle r="12" stroke="#B6FF00" strokeWidth="0.5" fill="none" opacity="0.2">
                       <animate attributeName="r" values="10;14;10" dur="2.5s" repeatCount="indefinite" />
                     </circle>
                     <rect x="-6" y="-6" width="12" height="12" fill="#B6FF00" filter="url(#neon-glow)">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
                     </rect>
                   </g>
                 </g>

                 {/* Right Side Output Nodes */}
                 {[
                   { id: "out-1", x: 295, y: 20, title: "VIZ_BI", val: "KPI_BOARD" },
                   { id: "out-2", x: 295, y: 105, title: "VIZ_STAT", val: "REPORT_V2" },
                   { id: "out-3", x: 295, y: 190, title: "VIZ_AI", val: "PREDICT_MOD" }
                 ].map((node) => (
                   <g key={node.id}>
                     <rect x={node.x} y={node.y} width="85" height="55" fill="#000" stroke="#B6FF00" strokeWidth="1" />
                     <rect x={node.x} y={node.y} width="85" height="14" fill="#111" stroke="#B6FF00" strokeWidth="0.5" />
                     <text x={node.x + 42.5} y={node.y + 10} fill="#B6FF00" fontSize="6" fontFamily="var(--font-display)" textAnchor="middle" letterSpacing="1">
                       {node.title}
                     </text>
                     <text x={node.x + 42.5} y={node.y + 35} fill="white" fontSize="8" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle">
                       {node.val}
                     </text>
                     <rect x={node.x + 10} y={node.y + 42} width="65" height="3" fill="#B6FF00" opacity="0.1" />
                     <rect x={node.x + 10} y={node.y + 42} width="45" height="3" fill="#B6FF00" />
                   </g>
                 ))}

                  {/* Staggered Data Particles */}
                  {[
                    "M 100 45 C 140 45, 140 120, 165 120",
                    "M 100 55 C 145 55, 145 125, 165 125",
                    "M 100 185 C 140 185, 140 145, 165 145",
                    "M 100 195 C 145 195, 145 150, 165 150",
                    "M 240 120 C 270 120, 270 50, 295 50",
                    "M 240 132.5 C 270 132.5, 270 135, 295 135",
                    "M 240 145 C 270 145, 270 220, 295 220"
                  ].map((pathD, idx) => (
                    <g key={idx}>
                      <path id={`f-${idx}`} d={pathD} fill="none" stroke="transparent" />
                      {[0, 1, 2].map((pId) => (
                        <rect key={pId} width="4" height="1" fill="#B6FF00" filter="url(#neon-glow)" opacity={0.6}>
                          <animateMotion dur={`${1.5 + Math.random()}s`} repeatCount="indefinite" begin={`${pId * 0.8 + idx * 0.2}s`}>
                            <mpath href={`#f-${idx}`} />
                          </animateMotion>
                        </rect>
                      ))}
                    </g>
                  ))}
              </svg>

              {/* Vertical Scanning Line */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-x-0 -inset-y-4 bg-neon/0 group-hover:bg-neon/2 transition-colors -z-10 rounded-xs pointer-events-none" />
              </motion.div>
          </div>
        </motion.div>

        {/* Text Block - Right */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-4 flex flex-col gap-8"
        >
          <div className="space-y-6">
            <motion.p variants={itemVariants} className="text-[15px] text-white/80 font-mono leading-relaxed tracking-tight">
              <span className="text-neon font-bold block mb-2 uppercase">[EXE_PROFILE]</span>
              Data Analyst and final-year B.Tech CSE student at ABESIT. I build high-frequency data pipelines and dashboards that transform noise into actionable signals. 
              My work at <span className="text-white font-bold border-b border-neon/50">NCRTC</span> serves national transport initiatives with real-time accuracy.
            </motion.p>
            
            <div className="space-y-3 font-mono text-[12px] uppercase">
              {[
                "B.Tech CSE (Data Science) — 2022-26",
                "Automated 20-25% of reporting cycles",
                "Govt. Portal Data Integration Expert"
              ].map((text, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 text-white/60">
                   <span className="w-1 h-1 bg-neon rounded-full" />
                   <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="pt-8 border-t border-white/5">
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-neon text-black font-display text-xl uppercase tracking-wider hover:bg-white transition-colors">
                VIEW_PROJECTS
              </button>
              <button className="px-6 py-3 border border-white/20 text-white font-display text-xl uppercase tracking-wider hover:border-neon hover:text-neon transition-colors">
                DOWNLOAD_RESUME
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
