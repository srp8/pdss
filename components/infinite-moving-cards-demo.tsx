"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[50rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={galleryItems}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const galleryItems = [
  {
    image: "/g1.jpg",
    title: "Community Event",
    description: "Pre-dental society gathering"
  },
  {
    image: "/g2.jpg",
    title: "Workshop Session",
    description: "Hands-on learning experience"
  },
  {
    image: "/g3.jpg",
    title: "Professional Meeting",
    description: "Networking with dental professionals"
  },
  {
    image: "/g4.jpg",
    title: "Study Group",
    description: "Collaborative learning environment"
  },
  {
    image: "/g5.jpg",
    title: "Service Project",
    description: "Community outreach initiative"
  },
  {
    image: "/g6.jpg",
    title: "Recognition Ceremony",
    description: "Celebrating achievements"
  },
];