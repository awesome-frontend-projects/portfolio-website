"use client";
import { heroIcons } from "@/data/data";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function Hero() {
  return (
    <motion.section
      id="home"
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20 lg:py-32 xl:py-36 relative bg-gradient-to-r before:w-full before:h-3/4 before:bg-gradient-to-r before:bg-neutral-950/78 before:z-10 before:absolute before:top-0 before:left-0"
    >
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
          <motion.p variants={variants.fadeInUp} className="max-w-[780px]">
            I have over 4 years of experience in frontend development. I build
            clean, responsive, and optimized websites using modern tools like
            React.js, Next.js, TypeScript, and Tailwind CSS. I focus on
            performance, accessibility, and pixel-perfect design to make sure
            every website works well on all screen sizes. I bring strong
            attention to detail and deliver high-quality, user-friendly web
            interfaces.
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
        <Image
          src="/images/hero-img.png"
          width={1600}
          height={650}
          alt="banner"
          className="absolute top-0 left-0 -z-20 h-3/4 object-cover w-full"
        />
      </div>
    </motion.section>
  );
}
