"use client";
import CardNav from "@/components/CardNav";
import SplitText from "@/components/SplitText";
import { GridBackground } from "@/components/ui/grid-background";
import ContactForm from "@/components/ui/contact-form";
import Footer from "@/components/Footer";

export default function Contact() {
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
        { label: "Events", href: "/events", ariaLabel: "View upcoming events" },
        { label: "Membership", href: "/membership", ariaLabel: "Join our society" },
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

      {/* Hero Section */}
      <section className="flex flex-col items-center pt-80 pb-20 px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <SplitText
            text="Get In Touch With Us"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#b6233b] leading-tight mb-16"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 100 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}