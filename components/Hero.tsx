"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import Image from "next/image";
import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import { heroIcons } from "@/data/data";

export function Hero() {
  return (
    <motion.section
      id="home"
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative flex py-28 lg:py-36 w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="container grid justify-center">
        {/* banner */}
        <motion.figure
          variants={variants.fadeIn}
          className="w-[200px] h-[200px] mx-auto relative overflow-hidden p-1.5 rounded-full ring ring-neutral-700 z-10 aspect-square"
        >
          <Image
            src="/images/portfolio-img.jpg"
            width={200}
            height={200}
            alt="portfolio image"
            className="rounded-full w-full h-full object-cover aspect-square"
          />
          {/* border effect */}
          <div className="absolute origin-center top-0 left-0 w-[750px] h-[250px] rounded-full bg-neutral-50 -z-10 block glow-animation blur-lg" />
        </motion.figure>

        {/* content */}
        <div className="text-center z-10 space-y-3">
          <motion.h1
            variants={variants.fadeInUp}
            className="text-3xl font-semibold mt-4 lg:text-4xl capitalize"
          >
            👋 I&apos;m medhanye Tsegay
          </motion.h1>
          <motion.p variants={variants.fadeInUp} className="text-pretty">
            I&apos;ve spent the last 4+ years solving one challenge: how to make
            the web faster, more beautiful, and accessible to everyone. Working
            professionally as a frontend developer, I build scalable React
            applications and lightning-fast Next.js sites that handle real-world
            traffic. My TypeScript-powered solutions are built for performance
            optimizing Core Web Vitals, implementing accessibility best
            practices, and writing maintainable code. Every project I ship works
            flawlessly across all devices and delivers the user experience your
            customers deserve.
            <span className="mt-3 block">
              Watch me test one of my projects live running performance audits,
              SEO analysis, accessibility checks, and demonstrating the best
              practices that make it score 100/100 across all metrics.
            </span>
          </motion.p>

          <motion.a
            variants={variants.fadeInUp}
            href="https://youtu.be/r0WDbT046E8?si=gUZtWCzNwcmi51n0"
            target="_blanck"
            className="block mt-3 transition-colors max-w-max mx-auto bg-cyan-700 hover:bg-cyan-800 px-6 py-2.5 rounded-full "
          >
            Watch Video
          </motion.a>
        </div>

        <motion.div
          variants={variants.fadeIn}
          className="flex items-center gap-3 justify-center mt-10 ring ring-neutral-700 rounded-[50px] max-w-max mx-auto p-2 bg-neutral-50 flex-wrap z-10"
        >
          {heroIcons.map((item) => (
            <button key={item.id}>
              <Image src={item.icon} alt="icon" width={30} height={30} />
            </button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
