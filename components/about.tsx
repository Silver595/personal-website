"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
          ref={ref}
          className="relative w-full h-screen overflow-hidden cursor-none"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
      >
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            src="/tv.mp4"
            poster="/error.jpg"
        >
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-8 lg:px-16">
          <motion.div
              className="z-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <SectionHeading>
              About me
            </SectionHeading>
          </motion.div>

          <motion.p
              className="mb-3 text-base sm:text-xl lg:text-2xl xl:text-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          >
            After graduating with a degree in <span className="font-medium">IT</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned <span className="font-medium">full-stack web development</span>. <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with a little bit of cybersecurity. I am always looking to learn new technologies.
          </motion.p>

          <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          >
            <span className="italic">When I'm not coding</span>, I enjoy playing video games, and watching movies. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about <span className="font-medium">history and philosophy</span>. I'm also learning a new language, Spanish.
          </motion.p>
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.section>
  );
}