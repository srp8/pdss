"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gradient-to-br from-[#0A1A2F] to-[#1E3A8A] sm:rounded-3xl overflow-hidden border border-[#b6233b]/30"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={500}
                  height={320}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-[#F5F5F5]"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[#F5F5F5]/80"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[#F5F5F5]/80 text-sm md:text-base lg:text-lg max-h-64 md:max-h-80 pb-4 flex flex-col items-start gap-4 overflow-y-auto scroll-smooth [scrollbar-width:thin] [scrollbar-color:#b6233b_transparent] [-webkit-overflow-scrolling:touch]"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#b6233b transparent',
                    }}
                    onWheel={(e) => {
                      e.stopPropagation();
                    }}
                    onTouchMove={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>

                  {/* Scroll indicator */}
                  <div className="absolute bottom-2 right-4 text-[#F5F5F5]/40 text-xs">
                    Scroll for more ↓
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4 px-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-6 flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-[#0A1A2F]/40 to-[#1E3A8A]/20 backdrop-blur-sm border border-[#b6233b]/20 hover:border-[#b6233b]/50 hover:bg-gradient-to-br hover:from-[#0A1A2F]/60 hover:to-[#1E3A8A]/30 rounded-2xl cursor-pointer transition-all duration-300 mb-4"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={160}
                  height={160}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-16 md:w-16 rounded-lg object-cover object-top border-2 border-[#b6233b]/20"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-[#F5F5F5] text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-[#F5F5F5]/80 text-center md:text-left text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Professional Development",
    title: "DAT Preparation Workshop",
    src: "/events/25/9/16.jpg",
    ctaText: "Learn More",
    ctaLink: "https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform",
    content: () => {
      return (
        <div>
          <p>
            Our comprehensive DAT preparation workshop provides students with the tools and strategies needed to excel on the Dental Admissions Test. Led by experienced pre-dental advisors and practicing dentists, this workshop covers all sections of the DAT including Natural Sciences, Perceptual Ability, Reading Comprehension, and Quantitative Reasoning.
          </p>
          <br />
          <h4 className="font-semibold text-[#b6233b] mb-2">What&apos;s Included:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Comprehensive study materials and practice tests</li>
            <li>Subject-specific review sessions for Biology, General Chemistry, and Organic Chemistry</li>
            <li>Perceptual Ability Test (PAT) practice with spatial reasoning exercises</li>
            <li>Reading comprehension strategies and speed reading techniques</li>
            <li>Quantitative reasoning problem-solving methods</li>
            <li>Time management and test-taking strategies</li>
            <li>Mock exams under simulated testing conditions</li>
            <li>Individual score analysis and improvement plans</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Workshop Structure:</h4>
          <p className="mb-4">
            The 8-week intensive program meets twice weekly for 3-hour sessions. Each session combines content review, practice problems, and test-taking strategies. Students receive access to our online portal with additional practice materials and video tutorials.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Success Statistics:</h4>
          <p className="mb-4">
            Our participants consistently score above the national average, with 85% achieving scores of 20 or higher. Many of our alumni have been accepted to top dental schools including UGA College of Dental Medicine, Medical College of Georgia, and Emory University School of Dentistry.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Prerequisites:</h4>
          <p className="mb-4">
            Students should have completed or be currently enrolled in prerequisite courses including Biology, General Chemistry, and Organic Chemistry. Basic understanding of fundamental concepts is recommended for maximum benefit.
          </p>

          <p className="text-[#F5F5F5]/60 text-sm">
            <strong>Date & Time:</strong> Tuesdays & Thursdays, 7:00 PM
            <br />
            <strong>Location:</strong> Miller Learning Center, Room 148
            <br />
            <strong>Registration Deadline:</strong> February 1st, 2024
          </p>
        </div>
      );
    },
  },
  {
    description: "Networking Event",
    title: "Meet Dental School Admissions",
    src: "/events/25/9/16.jpg",
    ctaText: "Register",
    ctaLink: "https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform",
    content: () => {
      return (
        <div>
          <p>
            Connect directly with dental school admissions officers from top dental programs across the country. This exclusive networking event provides pre-dental students with invaluable insights into the application process, program requirements, and what admissions committees look for in candidates.
          </p>
          <br />
          <h4 className="font-semibold text-[#b6233b] mb-2">Featured Dental Schools:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>University of Georgia College of Dental Medicine</li>
            <li>Medical College of Georgia School of Dentistry</li>
            <li>Emory University School of Dentistry</li>
            <li>University of Florida College of Dentistry</li>
            <li>University of Alabama School of Dentistry</li>
            <li>University of Tennessee Health Science Center</li>
            <li>Virginia Commonwealth University School of Dentistry</li>
            <li>University of North Carolina School of Dentistry</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Event Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>One-on-one conversations with admissions directors</li>
            <li>Panel discussions on application strategies</li>
            <li>Information sessions on different dental specialties</li>
            <li>Financial aid and scholarship workshops</li>
            <li>Q&A sessions with current dental students</li>
            <li>Resume and personal statement review opportunities</li>
            <li>Mock interview sessions with feedback</li>
            <li>Networking reception with light refreshments</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">What to Bring:</h4>
          <p className="mb-4">
            Come prepared with your resume, transcript (unofficial copy is fine), list of extracurricular activities, and specific questions about programs you&apos;re interested in. Business casual attire is recommended.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Success Stories:</h4>
          <p className="mb-4">
            Last year&apos;s event attendees reported a 40% higher acceptance rate compared to the general applicant pool. Many students received direct invitations to interview based on connections made at this event.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Who Should Attend:</h4>
          <p className="mb-4">
            This event is ideal for junior and senior pre-dental students who are planning to apply within the next 1-2 years. Underclassmen are also welcome to learn about the application timeline and requirements.
          </p>

          <p className="text-[#F5F5F5]/60 text-sm">
            <strong>Date & Time:</strong> Tuesdays & Thursdays, 7:00 PM
            <br />
            <strong>Location:</strong> Miller Learning Center, Room 148
            <br />
            <strong>Registration Deadline:</strong> February 1st, 2024
          </p>
        </div>
      );
    },
  },
  {
    description: "Community Service",
    title: "Dental Outreach Program",
    src: "/events/25/9/16.jpg",
    ctaText: "Volunteer",
    ctaLink: "https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform",
    content: () => {
      return (
        <div>
          <p>
            Make a difference in your community while gaining valuable hands-on experience in dental care. Our dental outreach program partners with local clinics and community health centers to provide oral health education and basic dental screenings to underserved populations.
          </p>
          <br />
          <h4 className="font-semibold text-[#b6233b] mb-2">Partner Organizations:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Athens Community Health Center</li>
            <li>Northeast Georgia Health System</li>
            <li>Clarke County School District</li>
            <li>Athens Housing Authority</li>
            <li>Good Samaritan Health Center</li>
            <li>Local homeless shelters and food banks</li>
            <li>Senior living communities</li>
            <li>Head Start programs and daycare centers</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Volunteer Activities:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Oral health education presentations in schools</li>
            <li>Basic dental screenings and fluoride treatments</li>
            <li>Blood pressure and diabetes screenings</li>
            <li>Distributing dental hygiene supplies and education materials</li>
            <li>Assisting with dental sealant programs</li>
            <li>Patient intake and registration assistance</li>
            <li>Translating for Spanish-speaking patients</li>
            <li>Data collection and health surveys</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Training Provided:</h4>
          <p className="mb-4">
            All volunteers receive comprehensive training including HIPAA compliance, patient communication, basic oral health assessment, infection control protocols, and cultural sensitivity. Training sessions are held monthly and are mandatory for new volunteers.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Time Commitment:</h4>
          <p className="mb-4">
            Volunteers typically commit to 4-6 hours per month, with events scheduled on weekends and evenings. Special outreach events may require full-day commitments but provide exceptional learning opportunities.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Benefits for Pre-Dental Students:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Direct patient interaction experience</li>
            <li>Exposure to diverse patient populations</li>
            <li>Understanding of public health challenges</li>
            <li>Development of empathy and cultural competence</li>
            <li>Strong addition to dental school applications</li>
            <li>Leadership opportunities in community health</li>
            <li>Letters of recommendation from supervising dentists</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Impact Statistics:</h4>
          <p className="mb-4">
            In 2023, our volunteers served over 1,200 community members, provided 800+ oral health screenings, and distributed 500 dental hygiene kits. Our program has been recognized by the Georgia Department of Public Health for outstanding community service.
          </p>

          <p className="text-[#F5F5F5]/60 text-sm">
            <strong>Date & Time:</strong> Tuesdays & Thursdays, 7:00 PM
            <br />
            <strong>Location:</strong> Miller Learning Center, Room 148
            <br />
            <strong>Registration Deadline:</strong> February 1st, 2024
          </p>
        </div>
      );
    },
  },
  {
    description: "Career Development",
    title: "Dental Practice Shadowing",
    src: "/events/25/9/16.jpg",
    ctaText: "Apply",
    ctaLink: "https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform",
    content: () => {
      return (
        <div>
          <p>
            Gain real-world experience by shadowing practicing dentists in various specialties including general dentistry, orthodontics, oral surgery, and pediatric dentistry. Our shadowing program connects students with dental professionals in the Athens and Atlanta areas.
          </p>
          <br />
          <h4 className="font-semibold text-[#b6233b] mb-2">Available Specialties:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>General Dentistry - Comprehensive family dental care</li>
            <li>Orthodontics - Braces, aligners, and bite correction</li>
            <li>Oral and Maxillofacial Surgery - Extractions, implants, jaw surgery</li>
            <li>Pediatric Dentistry - Specialized care for children and adolescents</li>
            <li>Endodontics - Root canal therapy and pulp treatment</li>
            <li>Periodontics - Gum disease treatment and dental implants</li>
            <li>Prosthodontics - Crowns, bridges, and dentures</li>
            <li>Oral Pathology - Diagnosis of oral diseases</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Shadowing Opportunities:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Private practice observations in Athens and Atlanta</li>
            <li>Hospital-based dental residency programs</li>
            <li>Community health center rotations</li>
            <li>Dental school faculty practice visits</li>
            <li>Mobile dental clinic experiences</li>
            <li>Emergency dental services shadowing</li>
            <li>Dental laboratory and prosthetics workshops</li>
            <li>Dental hygiene and auxiliary staff interactions</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">What You&apos;ll Experience:</h4>
          <p className="mb-4">
            Shadow experiences include patient consultations, diagnostic procedures, treatment planning sessions, various dental procedures, practice management insights, and patient communication techniques. You&apos;ll also learn about insurance processes, electronic health records, and dental technology.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Program Requirements:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Minimum 2.5 GPA and completion of basic science prerequisites</li>
            <li>Professional attire and appropriate behavior standards</li>
            <li>Signed confidentiality agreements and HIPAA training</li>
            <li>Proof of immunizations and health clearance</li>
            <li>Commitment to minimum 20 hours of shadowing</li>
            <li>Attendance at pre-shadowing orientation session</li>
            <li>Completion of reflection essays and evaluations</li>
          </ul>

          <h4 className="font-semibold text-[#b6233b] mb-2">Application Benefits:</h4>
          <p className="mb-4">
            Dental schools require significant shadowing hours (typically 100+ hours). Our program helps you exceed these requirements while gaining letters of recommendation, understanding different specialties, and confirming your career path. Many students discover new interests through specialty shadowing.
          </p>

          <h4 className="font-semibold text-[#b6233b] mb-2">Placement Process:</h4>
          <p className="mb-4">
            Applications are reviewed monthly, and placements are made based on student interests, academic standing, and availability. Priority is given to active UGA Pre-Dental Society members and students approaching their application timeline.
          </p>

          <p className="text-[#F5F5F5]/60 text-sm">
            <strong>Date & Time:</strong> Tuesdays & Thursdays, 7:00 PM
            <br />
            <strong>Location:</strong> Miller Learning Center, Room 148
            <br />
            <strong>Registration Deadline:</strong> February 1st, 2024
          </p>
        </div>
      );
    },
  },
  {
    description: "Academic Support",
    title: "Study Groups & Tutoring",
    src: "/events/25/9/16.jpg",
    ctaText: "Join",
    ctaLink: "https://docs.google.com/forms/d/16upEDl75BlPAWFjcRNLe19IW7MoFhsMw3HyZe6JSuqo/viewform",
    content: () => {
      return (
        <div className="space-y-6">
          <p className="text-[#F5F5F5]/90 leading-relaxed">
            Excel in your prerequisite courses with our peer-led study groups and tutoring services. Our academic support program connects students with upper-level pre-dental students and recent dental school admits who provide guidance in challenging courses.
          </p>

          <div className="space-y-4">
            <h4 className="text-[#b6233b] font-semibold text-lg">What&apos;s Included</h4>
            <ul className="text-[#F5F5F5]/80 space-y-2 pl-4">
              <li>• <span className="text-[#b6233b] font-medium">Peer-Led Study Groups:</span> Small group sessions for challenging prerequisite courses</li>
              <li>• <span className="text-[#b6233b] font-medium">One-on-One Tutoring:</span> Personalized academic support from successful upper-level students</li>
              <li>• <span className="text-[#b6233b] font-medium">Study Materials:</span> Access to past exams, study guides, and course-specific resources</li>
              <li>• <span className="text-[#b6233b] font-medium">Grade Tracking:</span> Progress monitoring and academic planning assistance</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#b6233b] font-semibold text-lg">Course Coverage</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#F5F5F5]/80">
              <div className="bg-[#0A1A2F]/30 p-3 rounded-lg border border-[#b6233b]/20">
                <span className="text-[#b6233b] font-medium">Science Prerequisites:</span> Organic Chemistry, General Chemistry, Biology, Physics, Biochemistry
              </div>
              <div className="bg-[#0A1A2F]/30 p-3 rounded-lg border border-[#b6233b]/20">
                <span className="text-[#b6233b] font-medium">Math & Stats:</span> Calculus, Statistics, Data Analysis
              </div>
              <div className="bg-[#0A1A2F]/30 p-3 rounded-lg border border-[#b6233b]/20">
                <span className="text-[#b6233b] font-medium">English & Humanities:</span> Composition, Psychology, Art courses
              </div>
              <div className="bg-[#0A1A2F]/30 p-3 rounded-lg border border-[#b6233b]/20">
                <span className="text-[#b6233b] font-medium">Advanced Courses:</span> Anatomy, Physiology, Microbiology
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#b6233b] font-semibold text-lg">Program Structure</h4>
            <div className="space-y-3 text-[#F5F5F5]/80">
              <div className="flex items-start gap-3">
                <div className="bg-[#b6233b] text-white text-sm px-2 py-1 rounded font-medium mt-0.5">Weekly</div>
                <div>
                  <div className="font-medium text-[#F5F5F5]">Study Group Sessions</div>
                  <div className="text-sm">2-hour collaborative study sessions for each major prerequisite course</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#b6233b] text-white text-sm px-2 py-1 rounded font-medium mt-0.5">Flexible</div>
                <div>
                  <div className="font-medium text-[#F5F5F5]">Individual Tutoring</div>
                  <div className="text-sm">Scheduled based on student needs and tutor availability</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#b6233b] text-white text-sm px-2 py-1 rounded font-medium mt-0.5">Exam Prep</div>
                <div>
                  <div className="font-medium text-[#F5F5F5]">Intensive Review Sessions</div>
                  <div className="text-sm">Extended study sessions before midterms and finals</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#b6233b] font-semibold text-lg">Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#F5F5F5]/80">
              <div className="space-y-2">
                <div className="font-medium text-[#b6233b]">Academic Excellence</div>
                <div className="text-sm">Improve grades and maintain competitive GPA for dental school applications</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-[#b6233b]">Peer Connection</div>
                <div className="text-sm">Build lasting friendships with fellow pre-dental students</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-[#b6233b]">Study Strategies</div>
                <div className="text-sm">Learn effective study techniques from successful students</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-[#b6233b]">Academic Planning</div>
                <div className="text-sm">Get guidance on course sequencing and scheduling</div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1A2F]/40 p-4 rounded-lg border border-[#b6233b]/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#b6233b] rounded-full"></div>
              <span className="text-[#b6233b] font-medium">Success Rate</span>
            </div>
            <p className="text-[#F5F5F5]/80 text-sm">
              Students participating in our study groups and tutoring programs have shown an average GPA improvement of 0.3-0.5 points in prerequisite courses, with 90% maintaining GPAs above 3.5.
            </p>
          </div>

          <p className="text-[#F5F5F5]/60 text-sm">
            <strong>Date & Time:</strong> Tuesdays & Thursdays, 7:00 PM
            <br />
            <strong>Location:</strong> Miller Learning Center, Room 148
            <br />
            <strong>Registration Deadline:</strong> February 1st, 2024
          </p>
        </div>
      );
    },
  },
];