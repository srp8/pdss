"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstname') as string;
    const lastName = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const year = formData.get('year') as string;
    const message = formData.get('message') as string;

    // Create email content
    const subject = encodeURIComponent(`Contact from ${firstName} ${lastName} - UGA Pre-Dental Society`);
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}
Email: ${email}
Class Year: ${year}

Message:
${message}`);

    // Open email client with pre-filled content
    window.location.href = `mailto:ugadental@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-[#0A1A2F]/80 backdrop-blur-md border border-[#b6233b]/20 p-8">
      <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2">
        Get In Touch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-[#F5F5F5]/60 mb-6">
        Have questions about joining the UGA Pre-Dental Society? We&apos;d love to hear from you!
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <LabelInputContainer className="flex-1">
            <Label htmlFor="firstname" className="text-[#F5F5F5]">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="John"
              type="text"
              className="bg-[#091329]/60 border border-[#b6233b]/30 text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#b6233b]"
            />
          </LabelInputContainer>
          <LabelInputContainer className="flex-1">
            <Label htmlFor="lastname" className="text-[#F5F5F5]">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Doe"
              type="text"
              className="bg-[#091329]/60 border border-[#b6233b]/30 text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#b6233b]"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="email" className="text-[#F5F5F5]">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="john.doe@uga.edu"
            type="email"
            className="bg-[#091329]/60 border border-[#b6233b]/30 text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#b6233b]"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="year" className="text-[#F5F5F5]">Class Year</Label>
          <Input
            id="year"
            name="year"
            placeholder="2026"
            type="text"
            className="bg-[#091329]/60 border border-[#b6233b]/30 text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#b6233b]"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message" className="text-[#F5F5F5]">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about yourself and why you're interested in joining..."
            rows={4}
            className="flex w-full rounded-md border border-[#b6233b]/30 bg-[#091329]/60 px-3 py-2 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#b6233b] focus:outline-none focus:ring-2 focus:ring-[#b6233b]/20 resize-none"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-12 w-full rounded-md bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] font-medium text-[#F5F5F5] shadow-lg transition-all duration-300 hover:shadow-[0_8px_32px_rgba(182,35,59,0.3)] animate-shimmer"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#b6233b] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#F5F5F5] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};