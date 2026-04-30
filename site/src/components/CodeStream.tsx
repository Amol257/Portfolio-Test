"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Transition } from "framer-motion";

interface CodeStreamProps {
  rowCount?: number;
  color?: string;
  triggerMode?: "self" | "external";
  isHovered?: boolean;
  isActive?: boolean;
  snippetPool?: string[];
  fadeInDuration?: number;
  fadeOutDuration?: number;
}

interface RowConfig {
  id: number;
  top: number;
  fontSize: number;
  baseOpacity: number;
  duration: number;
  direction: 1 | -1;
  content: string;
}

const DEFAULT_SNIPPETS = [
  "SELECT route_id, COUNT(*) FROM fleet_data WHERE active = 1 GROUP BY route_id",
  "CALCULATE(SUM([Ridership]), FILTER(ALL(Routes), Routes[Status]=\"Active\"))",
  "df.groupby(\"route\").agg({\"kpi\": \"mean\"}).reset_index()",
  "const res = await fetch(\"/api/v1/metrics?range=30d\")",
  "let busCount = 6482 · threshold = 0.92 · const kpiScore = 94.2"
];

const CodeStream: React.FC<CodeStreamProps> = ({
  rowCount = 12,
  color = "#c8ff00",
  triggerMode = "self",
  isHovered: externalHovered = false,
  isActive: externalActive = false,
  snippetPool = DEFAULT_SNIPPETS,
  fadeInDuration = 0.4,
  fadeOutDuration = 0.6,
}) => {
  const [rows, setRows] = useState<RowConfig[]>([]);
  const [internalHovered, setInternalHovered] = useState(false);
  const [internalActive, setInternalActive] = useState(false);

  const hoverState = triggerMode === "external" ? externalHovered : internalHovered;
  const activeState = triggerMode === "external" ? externalActive : internalActive;

  // Use a ref to store the snippet pool to avoid unnecessary regenerations
  const snippetsRef = useRef(snippetPool);
  useEffect(() => {
    snippetsRef.current = snippetPool;
  }, [snippetPool]);

  useEffect(() => {
    const generatedRows: RowConfig[] = [];
    
    for (let i = 0; i < rowCount; i++) {
      const snippets = Array.from({ length: 6 }).map(() => 
        snippetsRef.current[Math.floor(Math.random() * snippetsRef.current.length)]
      );
      const content = snippets.join(" · ") + " · " + snippets.join(" · ") + " · " + snippets.join(" · ") + " · " + snippets.join(" · ");
      
      generatedRows.push({
        id: i,
        top: Math.random() * 95 + 2,
        fontSize: Math.floor(Math.random() * 3) + 9,
        baseOpacity: Math.random() * 0.06 + 0.04,
        duration: Math.random() * 30 + 25,
        direction: Math.random() > 0.5 ? 1 : -1,
        content: content
      });
    }
    setRows(generatedRows);
  }, [rowCount]);

  const eventHandlers = triggerMode === "self" ? {
    onMouseEnter: () => setInternalHovered(true),
    onMouseLeave: () => {
      setInternalHovered(false);
      setInternalActive(false);
    },
    onMouseDown: () => setInternalActive(true),
    onMouseUp: () => setInternalActive(false),
  } : {};

  if (rows.length === 0) return null;

  return (
    <div 
      className={`absolute inset-0 overflow-hidden select-none ${triggerMode === "self" ? "pointer-events-auto" : "pointer-events-none"}`}
      {...eventHandlers}
    >
      {rows.map((row) => {
        // Correctly typing the transition to avoid generic string errors
        let currentOpacity = row.baseOpacity;
        let transitionConfig: Transition = { duration: fadeOutDuration, ease: "easeOut" };

        if (activeState) {
          currentOpacity = Math.min(row.baseOpacity * 4, 0.4);
          transitionConfig = { duration: 0.1, ease: "easeIn" };
        } else if (hoverState) {
          currentOpacity = Math.min(row.baseOpacity * 2.5, 0.25);
          transitionConfig = { duration: fadeInDuration, ease: "easeIn" };
        }

        return (
          <motion.div
            key={row.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentOpacity }}
            transition={{
              opacity: transitionConfig
            }}
            style={{
              position: "absolute",
              top: `${row.top}%`,
              left: 0,
              width: "100%",
              color: color,
              fontSize: `${row.fontSize}px`,
              fontFamily: "var(--font-mono)",
              whiteSpace: "nowrap",
              letterSpacing: "0.05em",
              willChange: "opacity",
            }}
          >
            <div
              style={{ 
                display: "inline-block",
                animation: `scroll-${row.direction === 1 ? "left" : "right"} ${row.duration}s linear infinite`,
                willChange: "transform",
              }}
            >
              {row.content}
            </div>
          </motion.div>
        );
      })}
      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0%); }
          to { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-25%); }
          to { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default CodeStream;

