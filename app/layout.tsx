import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Medhanye Tsegay | Frontend Developer Portfolio",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer",
    "Tailwind CSS",
    "TypeScript Developer",
    "Medhanye Tsegay",
  ],
  authors: [
    { name: "Medhanye Tsegay", url: "https://medhanyetsegay21.vercel.app/" },
  ],
  description:
    "A portfolio showcasing modern, responsive websites built with React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body className="dark">{children}</body>
    </html>
  );
}
