"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    title: string;
    description?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,white_15%,white_85%,transparent_100%)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 overflow-hidden md:w-[450px] hover:[animation-play-state:paused]"
            key={item.image}
            onMouseEnter={() => {
              if (scrollerRef.current) {
                scrollerRef.current.style.animationPlayState = 'paused';
              }
            }}
            onMouseLeave={() => {
              if (scrollerRef.current) {
                scrollerRef.current.style.animationPlayState = 'running';
              }
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#b6233b]/20 backdrop-blur-md group hover:border-[#b6233b]/60 transition-all duration-300">
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500 z-10"></div>

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={450}
                height={300}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};