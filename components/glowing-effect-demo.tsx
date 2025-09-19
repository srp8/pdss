"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import { GlowingEffect } from "@/components/ui/glowing-effect";

gsap.registerPlugin(ScrollTrigger);

export default function GlowingEffectDemo() {
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
        title="Why Choose UGA Pre-Dental Society?"
        description="The purpose of Pre-Dental Society is to provide a forum for students interested in the field of dentistry. Opportunities such as guest speakers from dental schools and community service events are provided to strengthen us as future applicants to dental school. In addition, Pre-Dental Society offers presentations that focus on important topics including the Dental Admissions Test (DAT), extracurriculars, the dental school application process, and student panels. Our organization provides a large network for pre-dental students to lean on one another through mentor-mentee relationships among other camaraderie."
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
            <a
              href="/about"
              className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Learn More About Us
              <GoArrowUpRight className="shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};