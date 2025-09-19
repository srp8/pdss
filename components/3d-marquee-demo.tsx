"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const baseImages = ["/g7.jpg", "/g8.jpg", "/g9.jpg", "/g10.jpg", "/g11.jpg", "/g12.jpg", "/g13.jpg"];

  // Create enough images to fill the entire marquee (repeat the base images multiple times)
  const images = Array.from({ length: 60 }, (_, index) => baseImages[index % baseImages.length]);

  return (
    <div className="w-full h-full">
      <ThreeDMarquee images={images} />
    </div>
  );
}