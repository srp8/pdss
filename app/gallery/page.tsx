"use client";
import CardNav from "@/components/CardNav";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/Footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import InfiniteMovingCardsDemo2 from "@/components/infinite-moving-cards-demo2";
import HorizontalScrollGallery from "@/components/horizontal-scroll-gallery";

export default function Gallery() {
  const navItems = [
    {
      label: "About",
      bgColor: "#0A1A2F",
      textColor: "#F5F5F5",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "Learn about our society" },
        { label: "Gallery", href: "/gallery", ariaLabel: "View our photo gallery" }
      ]
    },
    {
      label: "Get Involved",
      bgColor: "#0A1A2F",
      textColor: "#F5F5F5",
      links: [
        { label: "Events", href: "/#featured-events", ariaLabel: "View upcoming events" },
        { label: "Membership", href: "https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform?edit_requested=true", ariaLabel: "Join our society" },
        { label: "Resources", href: "/resources", ariaLabel: "Access member resources" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#0A1A2F",
      textColor: "#F5F5F5",
      links: [
        { label: "Contact Us", href: "/contact", ariaLabel: "Get in touch with us" }
      ]
    }
  ];


  const baseProducts = [
    {
      title: "Dental School Visits",
      link: "#",
      thumbnail: "/g7.jpg"
    },
    {
      title: "Guest Speaker Events",
      link: "#",
      thumbnail: "/g8.jpg"
    },
    {
      title: "Volunteer Activities",
      link: "#",
      thumbnail: "/g9.jpg"
    },
    {
      title: "Networking Sessions",
      link: "#",
      thumbnail: "/g10.jpg"
    },
    {
      title: "Educational Workshops",
      link: "#",
      thumbnail: "/g11.jpg"
    },
    {
      title: "Community Outreach",
      link: "#",
      thumbnail: "/g12.jpg"
    },
    {
      title: "Member Activities",
      link: "#",
      thumbnail: "/g13.jpg"
    }
  ];

  // Create enough products to fill the entire parallax (repeat the base products multiple times)
  const galleryProducts = Array.from({ length: 15 }, (_, index) => baseProducts[index % baseProducts.length]);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'radial-gradient(ellipse at center, #0C1B3A 40%, #030B14 100%)'}}>
      {/* Grid Background */}
      <GridBackground gridSize={50} className="absolute inset-0" />

      <CardNav
        logo="/logo.png"
        logoAlt="UGA Pre-Dental Society Logo"
        items={navItems}
        baseColor="linear-gradient(135deg, #0A1A2F 0%, #1E3A8A 100%)"
        menuColor="#F5F5F5"
        buttonBgColor="#b6233b"
        buttonTextColor="#F5F5F5"
      />

      {/* Hero Parallax Section */}
      <HeroParallax products={galleryProducts} />

      {/* Infinite Moving Cards Section */}
      <section className="py-20 px-4 relative z-10">
        <InfiniteMovingCardsDemo />
      </section>

      {/* Horizontal Scroll Gallery Section */}
      <HorizontalScrollGallery
        description="Explore our dental society events and activities through an immersive horizontal scroll experience"
        className="relative z-10"
      />

      {/* Second Infinite Moving Cards Section */}
      <section className="py-20 px-4 relative z-10">
        <InfiniteMovingCardsDemo2 />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}