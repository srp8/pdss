"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollGalleryProps {
  images?: {
    src: string;
    alt: string;
  }[];
  description?: string;
  className?: string;
}

const HorizontalScrollGallery: React.FC<HorizontalScrollGalleryProps> = ({
  images,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Default images from local gallery
  const defaultImages = [
    {
      src: "/g14.jpg",
      alt: "Gallery image 14"
    },
    {
      src: "/g15.jpg",
      alt: "Gallery image 15"
    },
    {
      src: "/g16.jpg",
      alt: "Gallery image 16"
    },
    {
      src: "/g17.jpg",
      alt: "Gallery image 17"
    },
    {
      src: "/g18.jpg",
      alt: "Gallery image 18"
    },
    {
      src: "/g19.jpg",
      alt: "Gallery image 19"
    }
  ];

  const galleryImages = images || defaultImages;

  // Function to setup horizontal scroll animation
  const setupHorizontalScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!container || !scrollContainer) return;

    // Kill all existing ScrollTriggers first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Calculate scroll distance with current dimensions
    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = container.offsetWidth;
    const scrollDistance = scrollWidth - containerWidth;

    // Responsive scroll multiplier based on current window width
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    const scrollMultiplier = isMobile ? 1.6 : 2.2;

    // Create horizontal scroll animation
    const horizontalScroll = gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance * scrollMultiplier}`, // Responsive multiplier
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: () => {
          // Optional: Add any scroll-based effects here
        }
      }
    });

    // Animate images on scroll
    galleryImages.forEach((_, index) => {
      gsap.fromTo(
        `.gallery-image-${index}`,
        {
          scale: 0.8,
          opacity: 0.6
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.gallery-image-${index}`,
            start: "left right",
            end: "right left",
            scrub: 1,
            horizontal: true,
            containerAnimation: horizontalScroll
          }
        }
      );
    });
  }, [galleryImages]);

  // Initial setup and loading state
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set initial window width and loading state
    setWindowWidth(window.innerWidth);
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setupHorizontalScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [setupHorizontalScroll]);

  // Re-setup animation when window width changes or images change
  useEffect(() => {
    if (!isLoaded) return;

    setupHorizontalScroll();
  }, [windowWidth, galleryImages, isLoaded, setupHorizontalScroll]);

  // Handle window resize with debounce
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {!isLoaded && (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#b6233b]"></div>
        </div>
      )}

      {/* Gallery Container */}
      <div
        ref={containerRef}
        className={`relative w-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: '100vh' }}
      >

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center h-full gap-8 px-8"
          style={{ width: 'max-content' }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-image-${index} relative flex-shrink-0`}
              style={{
                width: 'clamp(300px, 40vw, 600px)',
                height: 'clamp(400px, 60vh, 700px)'
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#b6233b]/20 backdrop-blur-md group hover:border-[#b6233b]/60 transition-all duration-300">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500 z-10"></div>

                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 40vw, 600px"
                  priority={index < 2} // Prioritize first two images
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              </div>

            </div>
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-8"></div>
        </div>

      </div>
    </div>
  );
};

export default HorizontalScrollGallery;