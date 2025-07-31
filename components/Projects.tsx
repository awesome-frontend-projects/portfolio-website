"use client";
import { portfolioItems } from "@/data/data";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function Projects() {
  return (
    <section className="section pb-20 lg:pb-28" id="projects">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp}>Featured Projects</motion.h2>
        <motion.p
          variants={variants.fadeInUp}
          className="font-light text-neutral-400"
        >
          A selection of projects that highlight my expertise in frontend
          development.
        </motion.p>

        {/* Card wrapper */}
        <div className="grid gap-4 mt-10 lg:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="bg-neutral-800 ring ring-neutral-600 p-5 rounded-2xl"
            >
              {/* banner */}
              <figure>
                <Image
                  src={item.banner}
                  width={635}
                  height={310}
                  alt="project"
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="mt-6 grid gap-5 justify-between">
                <div className="">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400">{item.text}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="bg-neutral-50 flex items-center gap-1 max-w-max rounded-2xl p-1 overflow-hidden">
                    {item.icons.map((item, index) => (
                      <div key={index}>
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    href={item.link}
                    target="_blanck"
                    className="flex items-center ring ring-neutral-500 max-w-max px-3.5 py-1.5 rounded-full gap-1 hover:bg-neutral-500 transition-colors"
                  >
                    View project
                    <RiArrowRightUpLongLine size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
