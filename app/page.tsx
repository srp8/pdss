"use client";
import CardNav from "@/components/CardNav";
import SplitText from "@/components/SplitText";
import { GridBackground } from "@/components/ui/grid-background";
import GlowingEffectDemo from "@/components/glowing-effect-demo";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GoArrowUpRight } from "react-icons/go";
import LogoLoop from "@/components/LogoLoop";
import CircularText from "@/components/CircularText";
import Footer from "@/components/Footer";
import ExpandableCardDemo from "@/components/ui/expandable-card-demo-standard";

export default function Home() {
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
            text="Preparing Tomorrow's Dentists Today"
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
          <GlowingEffectDemo />
        </div>
      </section>

      {/* Scroll Stack Section */}
      <section className="relative z-10">
        <ScrollStack
          useWindowScroll={true}
          itemScale={0.05}
          itemStackDistance={30}
        >
          <ScrollStackItem itemClassName="">
            <div className="relative h-full rounded-2xl border-2 border-[#b6233b]/30 p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-center items-center text-center gap-6 overflow-hidden rounded-xl bg-[#091329]/80 p-6 backdrop-blur-sm border border-[#b6233b]/10">
                <div className="space-y-6">
                  <h3 className="font-sans text-3xl/[2rem] font-bold text-balance text-[#b6233b] md:text-4xl/[2.5rem] lg:text-5xl/[3rem]">
                    Join Our Community
                  </h3>
                  <p className="font-sans text-sm/[1.125rem] text-[#F5F5F5]/80 md:text-base/[1.375rem]">
                    Become a member of UGA&apos;s most active pre-dental organization. Connect with like-minded students, access exclusive events, and build lifelong professional relationships on your journey to dental school.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform?edit_requested=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Learn More
                    <GoArrowUpRight className="shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="">
            <div className="relative h-full rounded-2xl border-2 border-[#b6233b]/30 p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-center items-center text-center gap-6 overflow-hidden rounded-xl bg-[#091329]/80 p-6 backdrop-blur-sm border border-[#b6233b]/10">
                <div className="space-y-6">
                  <h3 className="font-sans text-3xl/[2rem] font-bold text-balance text-[#b6233b] md:text-4xl/[2.5rem] lg:text-5xl/[3rem]">
                    Explore Our Gallery
                  </h3>
                  <p className="font-sans text-sm/[1.125rem] text-[#F5F5F5]/80 md:text-base/[1.375rem]">
                    Discover our vibrant community through photos of events, volunteer activities, networking sessions, and memorable moments. See the impact we&apos;re making together in the dental field.
                  </p>
                  <a
                    href="/gallery"
                    className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Learn More
                    <GoArrowUpRight className="shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="">
            <div className="relative h-full rounded-2xl border-2 border-[#b6233b]/30 p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-center items-center text-center gap-6 overflow-hidden rounded-xl bg-[#091329]/80 p-6 backdrop-blur-sm border border-[#b6233b]/10">
                <div className="space-y-6">
                  <h3 className="font-sans text-3xl/[2rem] font-bold text-balance text-[#b6233b] md:text-4xl/[2.5rem] lg:text-5xl/[3rem]">
                    Access Free Resources
                  </h3>
                  <p className="font-sans text-sm/[1.125rem] text-[#F5F5F5]/80 md:text-base/[1.375rem]">
                    Get comprehensive guidance on prerequisites, DAT preparation, application processes, and clinical experience opportunities. Everything you need to succeed on your path to dental school.
                  </p>
                  <a
                    href="/resources"
                    className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Learn More
                    <GoArrowUpRight className="shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>

      {/* Expandable Cards Section */}
      <section id="featured-events" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#b6233b] mb-4">
              Featured Events
            </h2>
            <p className="text-[#F5F5F5]/80 text-lg max-w-2xl mx-auto">
            The Pre-Dental Society volunteers at the Athens Food Bank, collects supplies for teens in foster care, hosts dental information sessions at the Thomas Lay After-School Program and hosts dental schools at the annual Health Professions Fair. In addition, we have incorporated guest speakers into our general body meetings to speak to our organization, and host manual dexterity activities paired with professional development activities.            </p>
          </div>
          <ExpandableCardDemo />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
