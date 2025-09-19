import React, { ReactNode, useLayoutEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card absolute w-full h-[24rem] box-border origin-center will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 20,
  baseScale = 0.85,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, { y: number; scale: number; zIndex: number }>());
  const isUpdatingRef = useRef(false);

  const setupScrollTrigger = useCallback(() => {
    if (!useWindowScroll || !scrollerRef.current || !cardsRef.current.length) return;

    const container = scrollerRef.current;
    const cards = cardsRef.current;
    const totalCards = cards.length;

    // Clear only ScrollTriggers for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === container) {
        trigger.kill();
      }
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 4, // Smooth scrubbing (slower)
        pin: ".scroll-stack-pinned", // Pin the sticky container
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;

          cards.forEach((card, i) => {
            const cardStartProgress = i / totalCards;
            const cardDuration = 1 / totalCards;

            let cardProgress = 0;
            if (progress >= cardStartProgress) {
              cardProgress = Math.min(1, (progress - cardStartProgress) / cardDuration);
            }

            // Calculate stack position
            let stackPosition = 0;
            for (let j = 0; j < i; j++) {
              const jStart = j / totalCards;
              const jDuration = 1 / totalCards;
              if (progress >= jStart + jDuration) {
                stackPosition++;
              }
            }

            // Animation values
            let y = window.innerHeight;
            let scale = 0.6;
            let opacity = 0;
            let blur = 0;

            if (cardProgress > 0) {
              const stackOffset = stackPosition * itemStackDistance;
              const finalScale = Math.max(0.5, 1 - (stackPosition * itemScale));

              y = (1 - cardProgress) * window.innerHeight + stackOffset;
              scale = 0.6 + (cardProgress * (finalScale - 0.6));
              opacity = Math.min(1, cardProgress * 3);

              // Apply blur to cards that have been stacked onto
              // Check if there's a card coming after this one that's being stacked
              const nextCardProgress = i < totalCards - 1 ?
                Math.max(0, Math.min(1, (progress - ((i + 1) / totalCards)) / (1 / totalCards))) : 0;

              if (nextCardProgress > 0) {
                blur = Math.min(4, nextCardProgress * 4);
              }
            }

            // Apply transforms
            gsap.set(card, {
              y: y,
              scale: scale,
              opacity: opacity,
              zIndex: i + 1,
              transformOrigin: "center center",
              filter: `blur(${blur}px)`
            });
          });

          // Check completion
          if (progress >= 0.9 && !stackCompletedRef.current) {
            stackCompletedRef.current = true;
            onStackComplete?.();
          } else if (progress < 0.9 && stackCompletedRef.current) {
            stackCompletedRef.current = false;
          }
        }
      }
    });

    return tl;
  }, [useWindowScroll, itemScale, itemStackDistance, onStackComplete]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.8,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
        infinite: false,
        wheelMultiplier: 0.8,
        lerp: 0.08,
        syncTouch: true,
        syncTouchLerp: 0.06
      });

      const raf = (time: number) => {
        lenis.raf(time);
        ScrollTrigger.update(); // Update ScrollTrigger
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    ) as HTMLElement[];

    cardsRef.current = cards;

    // Initialize cards
    cards.forEach((card) => {
      card.style.willChange = 'transform, opacity';
      card.style.transformOrigin = 'center center';
      card.style.backfaceVisibility = 'hidden';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';

      // Set initial state with GSAP
      gsap.set(card, {
        y: window.innerHeight,
        scale: 0.6,
        opacity: 0,
        zIndex: 1
      });
    });

    setupLenis();

    // Setup ScrollTrigger after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setupScrollTrigger();
    }, 100);

    return () => {
      clearTimeout(timer);
      const currentAnimationFrame = animationFrameRef.current;
      const currentLenis = lenisRef.current;
      const currentScrollerElement = scrollerRef.current;
      const currentLastTransforms = lastTransformsRef.current;

      if (currentAnimationFrame) {
        cancelAnimationFrame(currentAnimationFrame);
      }
      if (currentLenis) {
        currentLenis.destroy();
      }
      // Clean up ScrollTriggers for this component only
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === currentScrollerElement) {
          trigger.kill();
        }
      });
      stackCompletedRef.current = false;
      cardsRef.current = [];
      currentLastTransforms.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    baseScale,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    setupScrollTrigger
  ]);

  return (
    <div
      className={`scroll-stack-container ${className}`.trim()}
      ref={scrollerRef}
      style={{
        height: useWindowScroll ? '150vh' : '100vh', // Scroll area height
        position: 'relative'
      }}
    >
      {useWindowScroll && (
        <div
          className="scroll-stack-pinned"
          style={{
            position: 'sticky',
            top: '5vh',
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <div className="w-full max-w-4xl px-8 relative">
            {children}
          </div>
        </div>
      )}
      {!useWindowScroll && (
        <div className="scroll-stack-inner pt-[20vh] px-20 pb-[50rem] min-h-screen">
          {children}
        </div>
      )}
    </div>
  );
};

export default ScrollStack;