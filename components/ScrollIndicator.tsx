"use client";
import React, { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  className?: string;
  delay?: number;
}

export default function ScrollIndicator({ className = "", delay = 2000 }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex flex-col items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <div className="flex flex-col items-center">
        {/* Scroll Text */}
        <span className="text-[#F5F5F5] text-sm font-medium mb-2 uppercase tracking-wider">
          Scroll
        </span>

        {/* Mouse/Scroll Icon */}
        <div className="relative w-6 h-10 border-2 border-[#F5F5F5] rounded-full">
          <div className="absolute top-2 left-1/2 w-1 h-2 bg-[#F5F5F5] rounded-full transform -translate-x-1/2 animate-pulse"></div>
        </div>

        {/* Arrow Down */}
        <svg
          className="w-4 h-4 mt-2 text-[#F5F5F5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}