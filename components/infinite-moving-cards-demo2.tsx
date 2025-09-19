"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo2() {
  return (
    <div className="h-[50rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={galleryItems}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const galleryItems = [
  {
    image: "/g20.jpg",
    title: "Community Event",
    description: "Pre-dental society gathering"
  },
  {
    image: "/g21.jpg",
    title: "Workshop Session",
    description: "Hands-on learning experience"
  },
  {
    image: "/g22.jpg",
    title: "Professional Meeting",
    description: "Networking with dental professionals"
  },
  {
    image: "/g23.jpg",
    title: "Study Group",
    description: "Collaborative learning environment"
  },
  {
    image: "/g24.jpg",
    title: "Service Project",
    description: "Community outreach initiative"
  },
  {
    image: "/g25.jpg",
    title: "Recognition Ceremony",
    description: "Celebrating achievements"
  },
  {
    image: "/g26.jpg",
    title: "Special Event",
    description: "Memorable society moment"
  },
];