import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UGA Pre-Dental Society",
  description: "Preparing Tomorrow's Dentists Today - Join UGA's most active pre-dental organization with 330+ members, 20+ events per year, and 500+ community service hours.",
  icons: {
    icon: [
      { url: '/favi.png', sizes: '32x32', type: 'image/png' },
      { url: '/favi.png', sizes: '16x16', type: 'image/png' },
      { url: '/favi.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/favi.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favi.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
