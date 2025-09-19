"use client";
import CardNav from "@/components/CardNav";
import SplitText from "@/components/SplitText";
import { GridBackground } from "@/components/ui/grid-background";
import ResourcesGlowingDemo from "@/components/resources-glowing-demo";
import { Timeline } from "@/components/ui/timeline";
import LogoLoop from "@/components/LogoLoop";
import CircularText from "@/components/CircularText";
import Footer from "@/components/Footer";
import ExpandableCardDemo from "@/components/ui/expandable-card-demo-standard";

export default function Resources() {
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

  const timelineData = [
    {
      title: "Pre-Health Requirements",
      content: (
        <div className="space-y-4 text-[#F5F5F5]">
          <h4 className="text-xl font-semibold text-[#b6233b]">Course Prerequisites</h4>
          <p className="text-sm">Essential courses required for dental school admission including Biology, Chemistry, Physics, and Mathematics.</p>
          <div className="bg-[#091329]/50 p-4 rounded-lg border border-[#b6233b]/20">
            <ul className="space-y-2 text-sm">
              <li>• Biology (2 semesters with lab)</li>
              <li>• General Chemistry (2 semesters with lab)</li>
              <li>• Organic Chemistry (2 semesters with lab)</li>
              <li>• Physics (2 semesters with lab)</li>
              <li>• Mathematics (College Algebra & Statistics)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "DAT Preparation",
      content: (
        <div className="space-y-4 text-[#F5F5F5]">
          <h4 className="text-xl font-semibold text-[#b6233b]">Dental Admissions Test</h4>
          <p className="text-sm">Comprehensive preparation resources for the DAT including study materials, practice tests, and review sessions.</p>
          <div className="bg-[#091329]/50 p-4 rounded-lg border border-[#b6233b]/20">
            <ul className="space-y-2 text-sm">
              <li>• Study group sessions</li>
              <li>• Practice test resources</li>
              <li>• Review materials library</li>
              <li>• Test-taking strategies</li>
              <li>• Score improvement techniques</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Application Process",
      content: (
        <div className="space-y-4 text-[#F5F5F5]">
          <h4 className="text-xl font-semibold text-[#b6233b]">ADEA AADSAS Application</h4>
          <p className="text-sm">Step-by-step guidance through the dental school application process including personal statements and interviews.</p>
          <div className="bg-[#091329]/50 p-4 rounded-lg border border-[#b6233b]/20">
            <ul className="space-y-2 text-sm">
              <li>• Application timeline planning</li>
              <li>• Personal statement workshops</li>
              <li>• Interview preparation sessions</li>
              <li>• School selection guidance</li>
              <li>• Letter of recommendation assistance</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Clinical Experience",
      content: (
        <div className="space-y-4 text-[#F5F5F5]">
          <h4 className="text-xl font-semibold text-[#b6233b]">Hands-On Opportunities</h4>
          <p className="text-sm">Volunteer and shadowing opportunities to gain practical experience in dental healthcare settings.</p>
          <div className="bg-[#091329]/50 p-4 rounded-lg border border-[#b6233b]/20">
            <ul className="space-y-2 text-sm">
              <li>• Dental office shadowing</li>
              <li>• Community health clinics</li>
              <li>• Volunteer opportunities</li>
              <li>• Research projects</li>
              <li>• Manual dexterity activities</li>
            </ul>
          </div>
        </div>
      )
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
      <section className="flex flex-col items-center justify-center min-h-screen pt-8 px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto flex-1 flex items-center">
          <SplitText
            text="Our Resources"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#b6233b] leading-tight"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 100 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        {/* Logo Loop */}
        <div
          className="absolute bottom-16 w-full max-w-6xl opacity-0"
          style={{
            animation: 'fadeInUp 1.2s ease-out 3.5s forwards'
          }}
        >
          <LogoLoop
            logos={[
              { node: <CircularText text="330+ ACTIVE MEMBERS*" className="scale-75" /> },
              { node: <CircularText text="20+ EVENTS PER YEAR*" className="scale-75" /> },
              { node: <CircularText text="500+ COMMUNITY SERVICE HOURS*" className="scale-75" /> }
            ]}
            speed={40}
            direction="left"
            logoHeight={60}
            gap={80}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="transparent"
            className="opacity-80"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 pt-20 pb-0">
        <div className="max-w-7xl mx-auto">
          <ResourcesGlowingDemo />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10">
        <Timeline data={timelineData} />
      </section>

      {/* Expandable Cards Section */}
      <section id="featured-events" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#b6233b] mb-4">
              Learn From Those Who&apos;ve Been There
            </h2>
            <p className="text-[#F5F5F5]/80 text-lg max-w-2xl mx-auto">
            While these resources provide a strong foundation, nothing beats learning from current dental students and recent graduates who have walked the same path. Join our events to get real, firsthand advice from people who understand exactly what you&apos;re going through. Your questions deserve answers from those who&apos;ve been in your shoes.
            </p>
          </div>
          <ExpandableCardDemo />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}