import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  children?: React.ReactNode;
}

export function GridBackground({
  className,
  gridSize = 40,
  children
}: GridBackgroundProps) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          maskImage: `
            radial-gradient(ellipse 100% 80% at center 65%, black 45%, transparent 75%),
            linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 25%, black 85%, transparent 100%)
          `,
          maskComposite: 'intersect',
          WebkitMaskImage: `
            radial-gradient(ellipse 100% 80% at center 65%, black 45%, transparent 75%),
            linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 25%, black 85%, transparent 100%)
          `,
          WebkitMaskComposite: 'intersect'
        }}
      />
      {/* Feather mask for all sides and corners */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.3) 90%, transparent 100%),
            linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.3) 90%, transparent 100%)
          `,
          maskImage: `
            linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
          maskComposite: 'intersect',
          WebkitMaskImage: `
            linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
          WebkitMaskComposite: 'intersect'
        }}
      />
      {children}
    </div>
  );
}