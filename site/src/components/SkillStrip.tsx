"use client";

import { motion } from "framer-motion";

const skills1 = ["POWER BI", "SQL", "PYTHON", "DAX", "EXCEL", "TABLEAU", "DATA MODELING", "ANALYTICS", "POWER BI", "SQL", "PYTHON", "DAX", "EXCEL", "TABLEAU", "DATA MODELING", "ANALYTICS"];
const skills2 = ["MACHINE LEARNING", "REPORTING", "KPI DASHBOARDS", "DATA STORYTELLING", "DATA CLEANING", "PREDICTIVE MODELING", "DATA VISUALIZATION", "ETL PIPELINES", "MACHINE LEARNING", "REPORTING", "KPI DASHBOARDS", "DATA STORYTELLING", "DATA CLEANING", "PREDICTIVE MODELING", "DATA VISUALIZATION", "ETL PIPELINES"];

export default function SkillStrip() {
  return (
    <div className="relative z-50 py-4 -mt-2 -mb-8 pointer-events-none">
      <div className="bg-neon w-[110%] left-[-5%] relative overflow-hidden border-y border-black/20 py-3 select-none rotate-[-1.2deg] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col gap-1">
        {/* Row 1: Scrolling Left */}
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 items-center"
          >
            {skills1.map((skill, i) => (
              <span key={i} className="text-[18px] md:text-[24px] font-black text-black uppercase heading-condensed tracking-tighter">
                {skill} <span className="ml-4 mr-2 opacity-30">+</span>
              </span>
            ))}
          </motion.div>
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 items-center"
          >
            {skills1.map((skill, i) => (
              <span key={i} className="text-[18px] md:text-[24px] font-black text-black uppercase heading-condensed tracking-tighter">
                {skill} <span className="ml-4 mr-2 opacity-30">+</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 items-center"
          >
            {skills2.map((skill, i) => (
              <span key={i} className="text-[18px] md:text-[24px] font-black text-black uppercase heading-condensed tracking-tighter">
                {skill} <span className="ml-4 mr-2 opacity-30">+</span>
              </span>
            ))}
          </motion.div>
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 items-center"
          >
            {skills2.map((skill, i) => (
              <span key={i} className="text-[18px] md:text-[24px] font-black text-black uppercase heading-condensed tracking-tighter">
                {skill} <span className="ml-4 mr-2 opacity-30">+</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}

