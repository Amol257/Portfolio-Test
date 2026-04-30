"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CircuitBackgroundProps {
  opacity?: number;
  color?: string;
  animationDuration?: number;
  density?: "low" | "medium" | "high";
}

interface Point { x: number; y: number; }
interface LineData { x1: number; y1: number; x2: number; y2: number; width: number; }
interface PathData { d: string; width: number; }
interface CircleData { x: number; y: number; r: number; fill: boolean; }

const CircuitBackground: React.FC<CircuitBackgroundProps> = ({
  opacity = 0.10,
  color = "#c8ff00",
  animationDuration = 1.5,
  density = "medium",
}) => {
  const [elements, setElements] = useState<{
    rects: { x: number; y: number; w: number; h: number; strokeWidth: number; dashed?: boolean }[];
    lines: LineData[];
    paths: PathData[];
    circles: CircleData[];
  } | null>(null);

  useEffect(() => {
    // Randomized coordinate generator biasing towards higher X (right side)
    const getRightBiasedX = (min: number, max: number) => {
      const r = Math.pow(Math.random(), 0.5); // Bias towards 1.0
      return min + r * (max - min);
    };

    const width = 1000;
    const height = 800;
    const startX = width * 0.45; // Start from 45% of width
    const endX = width * 0.95;

    const rects: { x: number; y: number; w: number; h: number; strokeWidth: number; dashed?: boolean }[] = [];
    const lines: LineData[] = [];
    const paths: PathData[] = [];
    const circles: CircleData[] = [];

    // 1. Central IC Chip
    const chipW = 80;
    const chipH = 140;
    const chipX = getRightBiasedX(startX + 100, endX - 150);
    const chipY = height / 2 - chipH / 2;

    rects.push({ x: chipX, y: chipY, w: chipW, h: chipH, strokeWidth: 1.2 });

    const pinCount = Math.floor(Math.random() * 3) + 6; // 6 to 8 pins
    const pinSpacing = chipH / (pinCount + 1);
    const leftPins: Point[] = [];
    const rightPins: Point[] = [];

    for (let i = 1; i <= pinCount; i++) {
      const py = chipY + i * pinSpacing;
      // Left side pins
      lines.push({ x1: chipX - 14, y1: py, x2: chipX, y2: py, width: 1 });
      circles.push({ x: chipX - 14, y: py, r: 3, fill: true });
      leftPins.push({ x: chipX - 14, y: py });

      // Right side pins
      lines.push({ x1: chipX + chipW, y1: py, x2: chipX + chipW + 14, y2: py, width: 1 });
      circles.push({ x: chipX + chipW + 14, y: py, r: 3, fill: true });
      rightPins.push({ x: chipX + chipW + 14, y: py });
    }

    // 2. Secondary Small Sub-Component
    const subW = 30;
    const subH = 18;
    const subX = chipX + 20 + Math.random() * 20;
    const subY = chipY - 40;
    rects.push({ x: subX, y: subY, w: subW, h: subH, strokeWidth: 1 });
    lines.push({ x1: subX + 10, y1: subY + subH, x2: subX + 10, y2: chipY, width: 1 });
    lines.push({ x1: subX + 20, y1: subY + subH, x2: subX + 20, y2: chipY, width: 1 });

    // 3. Curved Arc Connector
    const topPin = rightPins[0];
    const botPin = rightPins[rightPins.length - 1];
    const arcRadius = Math.random() * 20 + 30;
    paths.push({ 
      d: `M ${topPin.x} ${topPin.y} A ${arcRadius} ${arcRadius} 0 0 1 ${botPin.x} ${botPin.y}`, 
      width: 1 
    });

    // 4. L-Shaped 90-Degree Traces
    const traceCount = density === "low" ? 10 : density === "medium" ? 15 : 22;
    const allPinPads = [...leftPins, ...rightPins];
    
    for (let i = 0; i < traceCount; i++) {
      const start = allPinPads[Math.floor(Math.random() * allPinPads.length)];
      const hDist = (Math.random() * 60 + 20) * (start.x < chipX ? -1 : 1);
      const vDist = (Math.random() * 45 + 15) * (Math.random() > 0.5 ? 1 : -1);
      
      const midX = start.x + hDist;
      const endY = start.y + vDist;
      
      paths.push({ 
        d: `M ${start.x} ${start.y} H ${midX} V ${endY}`, 
        width: Math.random() * 0.8 + 0.6 
      });
      circles.push({ x: midX, y: endY, r: 2.5, fill: true });
    }

    // 5. Straight Extended Horizontal Traces (Bus lines)
    const busLinesCount = Math.floor(Math.random() * 3) + 4;
    for (let i = 0; i < busLinesCount; i++) {
      const start = leftPins[Math.floor(Math.random() * leftPins.length)];
      const length = Math.random() * 80 + 80;
      lines.push({ x1: start.x, y1: start.y, x2: start.x - length, y2: start.y, width: 1.4 });
      circles.push({ x: start.x - length, y: start.y, r: 3, fill: true });
    }

    // 6. Vertical Traces
    const vertCount = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < vertCount; i++) {
      const vx = getRightBiasedX(startX, endX);
      const vy = Math.random() * (height - 200) + 100;
      const vLen = Math.random() * 50 + 40;
      lines.push({ x1: vx, y1: vy, x2: vx, y2: vy + vLen, width: 0.8 });
      circles.push({ x: vx, y: vy, r: 2, fill: true });
      circles.push({ x: vx, y: vy + vLen, r: 2, fill: true });
    }

    // 7. Junction Dots (Simplified approach: place some on L-trace corners or intersections)
    // 8. Via Holes
    const viaCount = Math.floor(Math.random() * 4) + 5;
    for (let i = 0; i < viaCount; i++) {
      const vx = getRightBiasedX(startX, endX);
      const vy = Math.random() * height;
      circles.push({ x: vx, y: vy, r: 4, fill: false });
    }

    // 9. Loose Framing Rectangle
    const padding = 16;
    rects.push({ 
      x: startX + 50, 
      y: chipY - 100, 
      w: endX - startX - 50, 
      h: chipH + 200, 
      strokeWidth: 0.5, 
      dashed: true 
    });

    setElements({ rects, lines, paths, circles });
  }, [density]);

  if (!elements) return <svg viewBox="0 0 1000 800" className="absolute right-0 top-0 w-full h-full pointer-events-none" style={{ opacity }} />;

  return (
    <svg 
      viewBox="0 0 1000 800" 
      className="absolute right-0 top-0 h-full w-full pointer-events-none z-0" 
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Rectangles */}
      {elements.rects.map((r, i) => (
        <motion.rect
          key={`rect-${i}`}
          x={r.x} y={r.y} width={r.w} height={r.h}
          stroke={color}
          strokeWidth={r.strokeWidth}
          fill="none"
          strokeDasharray={r.dashed ? "4 6" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: animationDuration, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}

      {/* Lines */}
      {elements.lines.map((l, i) => (
        <motion.line
          key={`line-${i}`}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={color}
          strokeWidth={l.width}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: animationDuration, delay: (i + 5) * 0.1, ease: "easeInOut" }}
        />
      ))}

      {/* Paths */}
      {elements.paths.map((p, i) => (
        <motion.path
          key={`path-${i}`}
          d={p.d}
          stroke={color}
          strokeWidth={p.width}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: animationDuration, delay: (i + 10) * 0.15, ease: "easeInOut" }}
        />
      ))}

      {/* Solder Pads and Vias */}
      {elements.circles.map((c, i) => (
        <motion.circle
          key={`circle-${i}`}
          cx={c.x} cy={c.y} r={c.r}
          fill={c.fill ? color : "none"}
          stroke={c.fill ? "none" : color}
          strokeWidth={c.fill ? 0 : 1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
    </svg>
  );
};

export default CircuitBackground;
