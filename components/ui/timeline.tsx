"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate each timeline item individually
    const timelineItems = container.querySelectorAll('.timeline-item');

    timelineItems.forEach((item) => {
      // Set initial state
      gsap.set(item, { opacity: 0 });

      // Create fade in/out animation for each item
      gsap.to(item, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.to(item, { opacity: 1, duration: 1.5, ease: "power2.out" });
          },
          onLeave: () => {
            gsap.to(item, { opacity: 0, duration: 1.2, ease: "power2.in" });
          },
          onEnterBack: () => {
            gsap.to(item, { opacity: 1, duration: 1.5, ease: "power2.out" });
          },
          onLeaveBack: () => {
            gsap.to(item, { opacity: 0, duration: 1.2, ease: "power2.in" });
          }
        }
      });
    });

    // Cleanup - only kill ScrollTriggers for this component
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        const triggerElement = trigger.trigger;
        if (triggerElement && container.contains(triggerElement)) {
          trigger.kill();
        }
      });
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-60 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-4xl md:text-5xl mb-4 text-[#b6233b] font-bold">
          Your Path to Dental School
        </h2>
        <p className="text-[#F5F5F5]/80 text-lg md:text-xl max-w-2xl mx-auto">
          Essential resources and guidance to help you navigate your pre-dental journey successfully.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10 relative timeline-item"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#091329] border-2 border-[#b6233b] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#b6233b] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-[#F5F5F5] bg-gradient-to-r from-[#0C1B3A] via-[#0C1B3A] to-transparent pr-8">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full pb-20">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#F5F5F5]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#b6233b]/30 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#b6233b] via-[#b6233b]/70 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
