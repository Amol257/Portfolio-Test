"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Database, Activity, Cpu, Globe } from "lucide-react";
import CodeStream from "./CodeStream";

const projectData = [
  {
    id: "01",
    title: "PM-EBUS KPI DASHBOARD",
    tech: "NCRTC — Power BI — DAX — SQL",
    description: "Cutting-edge KPI monitoring for urban electric transport. Integrated real-time GPS telemetry with passenger load data.",
    stats: {
      efficiency: 82,
      realtime: "4.2k",
      uptime: 99.9,
      alerts: 12,
      mapDots: [
        { x: 100, y: 120 }, { x: 80, y: 150 }, { x: 120, y: 100 }, { x: 140, y: 160 }
      ],
      chart: [40, 70, 45, 90, 65, 80, 50]
    }
  },
  {
    id: "02",
    title: "INDIA AQI DASHBOARD",
    tech: "Python — SQL — Data Viz — AI-Powered",
    description: "Real-time atmospheric clarity monitoring across 150+ stations. Predictive modeling for pollution peaks using historical data.",
    stats: {
      efficiency: 94,
      realtime: "15.8k",
      uptime: 98.4,
      alerts: 3,
      mapDots: [
        { x: 110, y: 130 }, { x: 90, y: 140 }, { x: 130, y: 110 }, { x: 70, y: 170 }, { x: 150, y: 150 }
      ],
      chart: [60, 40, 85, 55, 95, 70, 88]
    }
  },
  {
    id: "03",
    title: "ECOMMERCE PLATFORM",
    tech: "Excel — UX Analytics — Data-Driven Design",
    description: "Conversion rate optimization through behavioral analysis. Mapping user journeys to identify friction points in checkout flows.",
    stats: {
      efficiency: 76,
      realtime: "2.1k",
      uptime: 99.1,
      alerts: 0,
      mapDots: [
        { x: 95, y: 110 }, { x: 105, y: 135 }, { x: 115, y: 120 }
      ],
      chart: [30, 50, 40, 60, 55, 45, 60]
    }
  }
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const activeProject = projectData[activeIndex];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-[0.3em] block mb-2">
          [04] SELECTED WORK
        </span>
        <h2 className="text-6xl md:text-8xl font-display text-white tracking-tighter uppercase leading-none">
          Proven Impact.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Project List */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {projectData.map((project, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={project.id} 
                className="group relative cursor-pointer py-6 border-b border-white/5 overflow-hidden transition-all duration-500"
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsMouseDown(false);
                }}
                onMouseDown={() => setIsMouseDown(true)}
                onMouseUp={() => setIsMouseDown(false)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Drop-in CodeStream Background */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                  <CodeStream 
                    triggerMode="external"
                    isHovered={isHovered || isActive}
                    isActive={isMouseDown && (isHovered || isActive)}
                    color="#c8ff00"
                    rowCount={12}
                    snippetPool={[
                      "SELECT route_id, COUNT(*) FROM fleet_data",
                      "CALCULATE(SUM([Ridership]), Routes[Status]=\"Active\")",
                      "df.groupby(\"route\").agg({\"kpi\": \"mean\"})",
                      "const res = await fetch(\"/api/v1/metrics\")",
                      "STATUS: OK · 0x3F2A >> EXEC",
                      "LOAD_NODE_DIST · CORE_SYNC",
                      "PIPE_SYNC_ACTV · DATA_STREAM"
                    ]}
                  />
                </div>

                {/* Hover highlight background */}
                <motion.div 
                  className="absolute inset-0 bg-neon/5 -z-20"
                  initial={false}
                  animate={{ 
                    x: isActive ? 0 : "-100%",
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                
                <div className="flex justify-between items-end relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${isActive ? "text-neon" : "text-muted"}`}>
                        [{project.id}]
                      </span>
                      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{project.tech}</span>
                    </div>
                    <h3 className={`text-4xl md:text-5xl font-display transition-all duration-500 uppercase tracking-tight ${
                      isActive 
                        ? "text-neon drop-shadow-[0_0_30px_rgba(182,255,0,0.8)] scale-[1.03]" 
                        : "text-white/40 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(182,255,0,0.4)] group-hover:scale-[1.01]"
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1 mb-2">
                    <motion.div 
                      className={`text-neon transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                      animate={{ 
                        y: isActive ? 0 : 10,
                        opacity: isActive ? 1 : 0
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] font-mono font-bold tracking-widest">VIEW</span>
                        <ArrowUpRight size={20} strokeWidth={3} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Description reveal */}
                <motion.p 
                  className="text-[13px] font-mono text-muted mt-4 max-w-md leading-relaxed relative z-10"
                  initial={false}
                  animate={{ 
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 16 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  {project.description}
                </motion.p>
              </div>
            );
          })}
        </div>

        {/* Dashboard Mockup - Dynamic View */}
        <div className="lg:col-span-7 sticky top-24">
          <div className="bg-[#050505] border border-white/10 rounded-xs p-5 relative overflow-hidden aspect-[1.4/1] shadow-2xl">
            {/* Header info */}
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
              </div>
              <div className="px-3 py-1 border border-white/10 rounded-full bg-black/50">
                <span className="text-[8px] font-mono text-white/60 uppercase tracking-[0.2em]">
                  {activeProject.title} — SYSTEM MONITOR v.2.4
                </span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-neon animate-pulse rounded-full" />
                 <span className="text-[8px] font-mono text-neon uppercase">LIVE</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, filter: "brightness(2) blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "brightness(0.5) blur(20px)" }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-12 gap-4 h-[calc(100%-45px)] relative z-10"
              >
                {/* Glitch Overlay for Transition */}
                <motion.div 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="absolute inset-0 bg-neon/10 mix-blend-overlay z-50 pointer-events-none"
                />
                {/* Main Content - Visual Center */}
                <div className="col-span-8 bg-black/60 border border-white/5 p-4 rounded-xs relative flex flex-col group/map">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Globe size={10} className="text-neon" />
                      <span className="text-[8px] font-mono font-bold text-white/40 uppercase tracking-widest">Global Node Distribution</span>
                    </div>
                    <span className="text-[8px] font-mono text-neon/60">40.7128° N, 74.0060° W</span>
                  </div>
                  
                  <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                    {/* India Map Background */}
                    <svg viewBox="0 0 200 240" className="w-[85%] h-[85%] opacity-10 transition-opacity group-hover/map:opacity-20">
                      <path 
                        d="M63.7,19.2c-2.4,0-4.8,0.3-7,0.8c-2.5,0.6-4.9,1.4-7.2,2.4c-2.7,1.2-5.3,2.7-7.7,4.4c-1.8,1.3-3.5,2.7-5.1,4.2c-2.6,2.6-4.9,5.5-6.8,8.6 c-2.3,3.8-4.2,7.7-5.6,11.9c-1.4,4.1-2.4,8.4-3,12.7c-0.6,4.3-0.8,8.7-0.7,13c0.1,4.3,0.6,8.6,1.4,12.8c0.8,4.2,1.9,8.4,3.2,12.4 c1.3,4,2.9,8,4.8,11.8c1.9,3.8,4,7.5,6.4,11c2.4,3.5,5,6.8,7.8,9.9c2.8,3.1,5.8,5.9,8.9,8.5c3.1,2.6,6.4,4.9,9.8,7c3.4,2.1,6.9,3.9,10.6,5.4 c3.7,1.5,7.4,2.7,11.2,3.7c3.8,1,7.7,1.7,11.6,2c3.9,0.3,7.9,0.4,11.8,0.2c3.9-0.2,7.8-0.6,11.7-1.3c3.9-0.7,7.7-1.6,11.4-2.8 c3.7-1.2,7.3-2.6,10.9-4.2c3.6-1.6,7-3.4,10.3-5.5c3.3-2.1,6.4-4.4,9.4-6.9c3-2.5,5.8-5.1,8.3-8c2.5-2.9,4.8-5.9,6.9-9.1 c2.1-3.2,3.9-6.5,5.5-10c1.6-3.5,2.9-7,3.9-10.7c1-3.7,1.7-7.4,2.1-11.2c0.4-3.8,0.5-7.7,0.4-11.5c-0.1-3.8-0.5-7.7-1.2-11.5 c-0.7-3.8-1.7-7.6-3-11.3c-1.3-3.7-2.9-7.4-4.8-10.9c-1.9-3.5-4.1-6.9-6.6-10.1c-2.5-3.2-5.3-6.2-8.3-9c-3-2.8-6.3-5.3-9.7-7.6 c-3.4-2.3-7.1-4.3-10.9-6c-3.8-1.7-7.8-3.1-11.8-4.2C130,5.7,125.7,4.9,121.4,4.4c-4.3-0.5-8.7-0.7-13.1-0.6 c-4.4,0.1-8.7,0.5-13.1,1.2C90.9,5.7,86.6,6.9,82.5,8.4c-4,1.5-8,3.3-11.8,5.4C66.9,15.9,63.7,19.2,63.7,19.2z" 
                        fill="none" 
                        stroke="#B6FF00" 
                        strokeWidth="1"
                      />
                    </svg>

                    {/* Data Points */}
                    <div className="absolute inset-0">
                      {activeProject.stats.mapDots.map((dot, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="absolute w-2 h-2"
                          style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: "translate(-50%, -50%)" }}
                        >
                          <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.5, 1], opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                            className="absolute inset-0 bg-neon/40 rounded-full animate-ping" 
                          />
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                            className="relative w-full h-full bg-neon rounded-full border border-white/20" 
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Crosshair */}
                    <div className="absolute inset-0 pointer-events-none">
                       <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
                       <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/10 rounded-full" />
                    </div>
                  </div>

                  {/* Overlay stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                     <div className="flex flex-col">
                        <span className="text-[7px] font-mono text-muted uppercase">Processing Speed</span>
                        <span className="text-[14px] font-display text-neon tracking-wider">0.024s / query</span>
                     </div>
                     <div className="flex flex-col items-end text-right">
                        <span className="text-[7px] font-mono text-muted uppercase">Active Sessions</span>
                        <span className="text-[14px] font-display text-white tracking-wider">{activeProject.stats.realtime} units</span>
                     </div>
                  </div>
                </div>

                {/* Side Panels */}
                <div className="col-span-4 flex flex-col gap-4">
                   {/* KPI Grid */}
                   <div className="grid grid-cols-1 gap-4">
                     <div className="bg-black/60 border border-white/5 p-3 rounded-xs flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <Activity size={12} className="text-neon" />
                          <span className="text-[10px] font-display text-white">{activeProject.stats.efficiency}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-neon" 
                            initial={{ width: 0 }}
                            animate={{ width: `${activeProject.stats.efficiency}%` }}
                            transition={{ delay: 0.6, duration: 1, ease: "circOut" }}
                          />
                        </div>
                        <span className="text-[7px] font-mono text-muted uppercase">Efficiency Rating</span>
                     </div>

                     <div className="bg-black/60 border border-white/5 p-3 rounded-xs flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <Cpu size={12} className="text-blue-500" />
                          <span className="text-[10px] font-display text-white">{activeProject.stats.uptime}</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-blue-500" 
                            initial={{ width: 0 }}
                            animate={{ width: `${activeProject.stats.uptime}%` }}
                            transition={{ delay: 0.7, duration: 1, ease: "circOut" }}
                          />
                        </div>
                        <span className="text-[7px] font-mono text-muted uppercase">Node Stability</span>
                     </div>
                   </div>

                   {/* Performance Graph */}
                   <div className="flex-1 bg-black/60 border border-white/5 p-3 rounded-xs flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <Database size={10} className="text-neon" />
                        <span className="text-[8px] font-mono font-bold text-white/40 uppercase tracking-widest">Impact Flow</span>
                      </div>
                      <div className="flex-1 flex items-end gap-1.5 px-1">
                        {activeProject.stats.chart.map((h, i) => (
                          <motion.div 
                            key={i} 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: `${h}%`, opacity: 1 }}
                             transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: "backOut" }}
                            className="flex-1 bg-neon/10 border-t border-neon/40 relative group/bar"
                          >
                            <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                            {h > 70 && <div className="w-full h-px bg-neon shadow-[0_0_8px_rgba(182,255,0,0.8)]" />}
                          </motion.div>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Global Overlays */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(182,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.02)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />
            
            {/* Transition Scanline */}
            <AnimatePresence>
              <motion.div 
                key={activeIndex + "-scan"}
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="absolute left-0 w-full h-[10%] bg-neon/10 border-y border-neon/20 z-50 pointer-events-none"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-neon/5 to-transparent h-1/2 w-full animate-scan pointer-events-none opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
