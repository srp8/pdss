"use client";
import CardNav from "@/components/CardNav";
import SplitText from "@/components/SplitText";
import { GridBackground } from "@/components/ui/grid-background";
import ChromaGrid from "@/components/ChromaGrid";
import LogoLoop from "@/components/LogoLoop";
import CircularText from "@/components/CircularText";
import Footer from "@/components/Footer";
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
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
            text="Who We Are"
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
      <section className="relative z-10 px-4 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#b6233b] mb-4">
              Our Executive Team
            </h2>
          </div>
          <div className="min-h-[800px]">
            <ChromaGrid
              items={[
                {
                  image: "/logo.png",
                  title: "Charlie Stout",
                  subtitle: "Class of 2026",
                  handle: "PRESIDENT",
                  borderColor: "#b6233b",
                  gradient: "linear-gradient(145deg, #b6233b, #0A1A2F)",
                  description: "Charlie Stout (Class of 2026) serves as the President of the UGA Pre-Dental Society, leading our organization with dedication and vision. Under Charlie's leadership, the society continues to grow and provide exceptional opportunities for pre-dental students to excel in their academic and professional journey toward dental school."
                },
                {
                  image: "/logo.png",
                  title: "Alexandra Ruffin",
                  subtitle: "Class of 2026",
                  handle: "VICE PRESIDENT",
                  borderColor: "#1E3A8A",
                  gradient: "linear-gradient(210deg, #1E3A8A, #0A1A2F)",
                  description: "Alexandra Ruffin (Class of 2026) serves as the Vice President of the UGA Pre-Dental Society, working closely with the President to ensure smooth operations and member engagement. Alexandra brings valuable leadership experience and is committed to supporting all members in achieving their dental school aspirations."
                },
                {
                  image: "/logo.png",
                  title: "Sarah Mitchell",
                  subtitle: "Class of 2025",
                  handle: "SECRETARY",
                  borderColor: "#EF4444",
                  gradient: "linear-gradient(180deg, #EF4444, #0A1A2F)",
                  description: "Sarah Mitchell (Class of 2025) serves as the Secretary of the UGA Pre-Dental Society, maintaining detailed records and ensuring effective communication between officers and members. Her organizational skills and attention to detail keep our society running smoothly and efficiently."
                },
                {
                  image: "/logo.png",
                  title: "Michael Johnson",
                  subtitle: "Class of 2025",
                  handle: "TREASURER",
                  borderColor: "#10B981",
                  gradient: "linear-gradient(255deg, #10B981, #0A1A2F)",
                  description: "Michael Johnson (Class of 2025) serves as the Treasurer of the UGA Pre-Dental Society, managing the organization's finances and ensuring responsible budget allocation for events, educational opportunities, and community service initiatives that benefit our members."
                },
                {
                  image: "/logo.png",
                  title: "Emma Davis",
                  subtitle: "Class of 2026",
                  handle: "EVENTS CHAIR",
                  borderColor: "#F59E0B",
                  gradient: "linear-gradient(300deg, #F59E0B, #0A1A2F)",
                  description: "Emma Davis (Class of 2026) serves as the Events Chair, coordinating engaging activities including guest speaker sessions, dental school visits, networking events, and community service projects that enhance the pre-dental experience for all members."
                },
                {
                  image: "/logo.png",
                  title: "James Rodriguez",
                  subtitle: "Class of 2025",
                  handle: "COMMUNITY SERVICE",
                  borderColor: "#8B5CF6",
                  gradient: "linear-gradient(45deg, #8B5CF6, #0A1A2F)",
                  description: "James Rodriguez (Class of 2025) leads our community service initiatives, organizing volunteer opportunities at local health clinics, dental outreach programs, and community health fairs that allow members to give back while gaining valuable hands-on experience."
                },
                {
                  image: "/logo.png",
                  title: "Ashley Kim",
                  subtitle: "Class of 2026",
                  handle: "MEMBERSHIP CHAIR",
                  borderColor: "#EC4899",
                  gradient: "linear-gradient(90deg, #EC4899, #0A1A2F)",
                  description: "Ashley Kim (Class of 2026) serves as the Membership Chair, welcoming new members, facilitating the onboarding process, and creating opportunities for members to connect and build lasting relationships throughout their pre-dental journey."
                },
                {
                  image: "/logo.png",
                  title: "David Chen",
                  subtitle: "Class of 2025",
                  handle: "ACADEMIC AFFAIRS",
                  borderColor: "#06B6D4",
                  gradient: "linear-gradient(315deg, #06B6D4, #0A1A2F)",
                  description: "David Chen (Class of 2025) oversees academic affairs, organizing study groups, coordinating DAT preparation sessions, and connecting members with academic resources and mentorship opportunities to ensure academic excellence."
                },
                {
                  image: "/logo.png",
                  title: "Rachel Thompson",
                  subtitle: "Class of 2026",
                  handle: "PUBLICITY CHAIR",
                  borderColor: "#F97316",
                  gradient: "linear-gradient(270deg, #F97316, #0A1A2F)",
                  description: "Rachel Thompson (Class of 2026) manages our publicity and social media presence, keeping members informed about upcoming events, sharing society achievements, and promoting our organization within the UGA community and beyond."
                },
                {
                  image: "/logo.png",
                  title: "Kevin Park",
                  subtitle: "Class of 2025",
                  handle: "PROFESSIONAL DEV",
                  borderColor: "#84CC16",
                  gradient: "linear-gradient(150deg, #84CC16, #0A1A2F)",
                  description: "Kevin Park (Class of 2025) coordinates professional development opportunities, organizing workshops on interview skills, application strategies, and career planning to help members successfully navigate the dental school admissions process and beyond."
                },
                {
                  image: "/logo.png",
                  title: "Lex Steedley",
                  subtitle: "Class of 2026",
                  handle: "CAMPUS OUTREACH",
                  borderColor: "#DC2626",
                  gradient: "linear-gradient(200deg, #DC2626, #0A1A2F)",
                  description: "Lex Steedley leads campus outreach initiatives, building relationships with other student organizations and promoting the Pre-Dental Society across the UGA community to attract new members and create collaborative opportunities."
                },
                {
                  image: "/logo.png",
                  title: "Alex Lunn",
                  subtitle: "Class of 2025",
                  handle: "SPECIAL EVENTS",
                  borderColor: "#7C3AED",
                  gradient: "linear-gradient(75deg, #7C3AED, #0A1A2F)",
                  description: "Alex Lunn coordinates special events including annual banquets, recognition ceremonies, and milestone celebrations that bring together current members, alumni, and dental professionals to strengthen our society's community bonds."
                },
                {
                  image: "/logo.png",
                  title: "Hake Mazzawi",
                  subtitle: "Class of 2026",
                  handle: "ALUMNI RELATIONS",
                  borderColor: "#0EA5E9",
                  gradient: "linear-gradient(120deg, #0EA5E9, #0A1A2F)",
                  description: "Hake Mazzawi maintains strong connections with our alumni network, organizing networking events and mentorship programs that connect current pre-dental students with successful dental school graduates and practicing dentists."
                },
                {
                  image: "/logo.png",
                  title: "Savannah Gart",
                  subtitle: "Class of 2025",
                  handle: "ALUMNI RELATIONS",
                  borderColor: "#DB2777",
                  gradient: "linear-gradient(240deg, #DB2777, #0A1A2F)",
                  description: "Savannah Gart works alongside our alumni relations team to foster meaningful relationships between current students and dental school graduates, facilitating mentorship opportunities and career guidance."
                },
                {
                  image: "/logo.png",
                  title: "Hollis Mazzawi",
                  subtitle: "Class of 2026",
                  handle: "PUBLIC RELATIONS",
                  borderColor: "#059669",
                  gradient: "linear-gradient(165deg, #059669, #0A1A2F)",
                  description: "Hollis Mazzawi manages external communications and public relations, representing the Pre-Dental Society at university events and building relationships with dental schools, healthcare organizations, and community partners."
                },
                {
                  image: "/logo.png",
                  title: "Salter Sliger",
                  subtitle: "Class of 2025",
                  handle: "COMMUNITY SERVICE",
                  borderColor: "#DC2626",
                  gradient: "linear-gradient(285deg, #DC2626, #0A1A2F)",
                  description: "Salter Sliger coordinates community service initiatives, organizing volunteer opportunities that allow members to give back to the community while gaining valuable hands-on experience in healthcare settings."
                },
                {
                  image: "/logo.png",
                  title: "Diya Garrerpally",
                  subtitle: "Class of 2026",
                  handle: "COMMUNITY SERVICE",
                  borderColor: "#B91C1C",
                  gradient: "linear-gradient(30deg, #B91C1C, #0A1A2F)",
                  description: "Diya Garrerpally supports community service efforts, helping organize outreach programs and volunteer activities that demonstrate our commitment to improving oral health awareness in underserved communities."
                },
                {
                  image: "/logo.png",
                  title: "Victor Alcoriza",
                  subtitle: "Class of 2025",
                  handle: "DENTAL LIAISON",
                  borderColor: "#1D4ED8",
                  gradient: "linear-gradient(330deg, #1D4ED8, #0A1A2F)",
                  description: "Victor Alcoriza serves as a liaison with dental schools, coordinating admissions presentations, school visits, and information sessions that help members learn about different dental programs and application requirements."
                },
                {
                  image: "/logo.png",
                  title: "Maansi Joshi",
                  subtitle: "Class of 2026",
                  handle: "DENTAL LIAISON",
                  borderColor: "#7C2D12",
                  gradient: "linear-gradient(195deg, #7C2D12, #0A1A2F)",
                  description: "Maansi Joshi works with dental school representatives to bring admissions officers and current dental students to speak with our members, providing insider perspectives on the application process and dental school experience."
                },
                {
                  image: "/logo.png",
                  title: "Slade McConnell",
                  subtitle: "Class of 2025",
                  handle: "TREASURER",
                  borderColor: "#16A34A",
                  gradient: "linear-gradient(105deg, #16A34A, #0A1A2F)",
                  description: "Slade McConnell manages the society's financial operations, working with our financial team to ensure responsible budget management and proper allocation of funds for educational programs and member activities."
                },
                {
                  image: "/logo.png",
                  title: "Madeline DePasquale",
                  subtitle: "Class of 2026",
                  handle: "SECRETARY",
                  borderColor: "#9333EA",
                  gradient: "linear-gradient(60deg, #9333EA, #0A1A2F)",
                  description: "Madeline DePasquale assists with secretarial duties, maintaining accurate meeting records, managing member communications, and ensuring that important information reaches all society members effectively."
                },
                {
                  image: "/logo.png",
                  title: "Ariya Patel",
                  subtitle: "Class of 2026",
                  handle: "SPECIAL EVENTS",
                  borderColor: "#DC2626",
                  gradient: "linear-gradient(225deg, #DC2626, #0A1A2F)",
                  description: "Ariya Patel coordinates special events and activities for the Pre-Dental Society, organizing memorable experiences that bring members together and enhance their pre-dental journey through engaging social and educational gatherings."
                }
              ]}
              className="py-8"
            />
            <div className="text-center mt-12">
              <a
                href="/gallery"
                className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Head to Gallery
                <GoArrowUpRight className="shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}