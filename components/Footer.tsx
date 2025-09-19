"use client";

import Link from "next/link";
import Image from "next/image";
import SignupFormDemo from "@/components/ui/signup-form-demo";

export default function Footer() {

  return (
    <footer className="text-[#F5F5F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-12">
          {/* Main Content */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="UGA Pre-Dental Society Logo"
                width={128}
                height={128}
                className="h-32 w-auto transition-all hover:opacity-75"
              />
            </Link>
            <p className="text-[#F5F5F5]/80 max-w-2xl leading-relaxed">
              Preparing Tomorrow&apos;s Dentists Today
            </p>
            <div className="text-[#F5F5F5]/70 space-y-1">
              <p>102 Tate Center</p>
              <p>Athens, GA 30602</p>
              <p>USA</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ugadental/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#0A1A2F]/40 to-[#1E3A8A]/20 backdrop-blur-md border border-[#b6233b]/20 hover:border-[#b6233b]/60 hover:shadow-[0_8px_32px_rgba(182,35,59,0.3)] hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                {/* Animated glass shine */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#b6233b]/0 group-hover:bg-[#b6233b]/10 transition-all duration-500"></div>

                <svg className="w-6 h-6 relative z-20 text-[#F5F5F5] group-hover:text-[#b6233b] transition-all duration-300 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/groups/ugapredentalsociety/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#0A1A2F]/40 to-[#1E3A8A]/20 backdrop-blur-md border border-[#b6233b]/20 hover:border-[#b6233b]/60 hover:shadow-[0_8px_32px_rgba(182,35,59,0.3)] hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                {/* Animated glass shine */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#b6233b]/0 group-hover:bg-[#b6233b]/10 transition-all duration-500"></div>

                <svg className="w-6 h-6 relative z-20 text-[#F5F5F5] group-hover:text-[#b6233b] transition-all duration-300 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:ugadental@gmail.com"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#0A1A2F]/40 to-[#1E3A8A]/20 backdrop-blur-md border border-[#b6233b]/20 hover:border-[#b6233b]/60 hover:shadow-[0_8px_32px_rgba(182,35,59,0.3)] hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                {/* Animated glass shine */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#b6233b]/0 group-hover:bg-[#b6233b]/10 transition-all duration-500"></div>

                <svg className="w-6 h-6 relative z-20 text-[#F5F5F5] group-hover:text-[#b6233b] transition-all duration-300 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Signup Form */}
          <SignupFormDemo />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#b6233b]/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <Link href="/privacy-policy" className="text-[#F5F5F5]/60 hover:text-[#b6233b] transition-colors underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#F5F5F5]/60 hover:text-[#b6233b] transition-colors underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-[#F5F5F5]/60 hover:text-[#b6233b] transition-colors underline underline-offset-4">
              Contact Us
            </Link>
          </div>
          <p className="text-[#F5F5F5]/60 text-sm">
            © 2024 UGA Pre-Dental Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}