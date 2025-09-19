"use client";
import React from "react";
import { Input } from "@/components/ui/input";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">
          Join UGA Pre-Dental Society
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 md:max-w-96">
            <Input
              id="email"
              placeholder="your.email@uga.edu"
              type="email"
              className="w-full bg-[#0A1A2F]/60 border border-[#b6233b]/30 text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#b6233b] focus:ring-[#b6233b] backdrop-blur-sm"
              required
            />
          </div>
          <button
            className="group/btn inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#05101C,45%,#b6233b,55%,#05101C)] bg-[length:200%_100%] px-6 font-medium text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="submit"
          >
            Join Our Society
            <BottomGradient />
          </button>
        </div>
        <p className="text-[#F5F5F5]/60 text-sm">
          By joining, you&apos;ll receive updates about events, opportunities, and resources for pre-dental students.
        </p>
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