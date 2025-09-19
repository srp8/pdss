"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowingEffect } from "@/components/ui/glowing-effect";

gsap.registerPlugin(ScrollTrigger);

export default function ResourcesGlowingDemo() {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial state
    gsap.set(container, { opacity: 0 });

    // Create fade in/out animation
    gsap.to(container, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(container, { opacity: 1, duration: 1.5, ease: "power2.out" });
        },
        onLeave: () => {
          gsap.to(container, { opacity: 0, duration: 1.2, ease: "power2.in" });
        },
        onEnterBack: () => {
          gsap.to(container, { opacity: 1, duration: 1.5, ease: "power2.out" });
        },
        onLeaveBack: () => {
          gsap.to(container, { opacity: 0, duration: 1.2, ease: "power2.in" });
        }
      }
    });

    // Cleanup - only kill ScrollTriggers for this component
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <ul ref={containerRef} className="grid grid-cols-1 gap-4">
      <GridItem
        area=""
        title="Your Complete Pre-Dental Resource Hub"
        description="Welcome to your comprehensive guide for pre-dental success. This free resource provides essential information every aspiring dental student needs to build a strong academic foundation. From course prerequisites to application strategies, we've compiled the most important steps in your pre-dental journey. Our goal is to demystify the path to dental school and provide you with actionable guidance that sets you up for success. Whether you're just starting your pre-dental journey or preparing for applications, these resources will serve as your roadmap to achieving your dental school dreams."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, title, description }: GridItemProps) => {
  return (
    <li className={`h-[24rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border-2 border-[#b6233b]/30 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-center items-center text-center gap-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#0A1A2F]/40 to-[#1E3A8A]/20 p-6 backdrop-blur-sm border border-[#b6233b]/10">
          <div className="space-y-6">
            <h3 className="font-sans text-3xl/[2rem] font-bold text-balance text-[#b6233b] md:text-4xl/[2.5rem] lg:text-5xl/[3rem]">
              {title}
            </h3>
            <p className="font-sans text-sm/[1.125rem] text-[#F5F5F5]/80 md:text-base/[1.375rem]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};