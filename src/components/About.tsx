import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import Image from "next/image";

import abtImg from "../assets/abt.png";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl top-16 md:top-14">
        About
      </h3>
      <motion.div />
      <Image
        width={500}
        height={500}
        src={abtImg}
        alt="Volvo Cars"
        className="-mb-20 md:mb-0 p-20 md:p-0 flex-shrink-0 w-56 h-56 object-contain xl:w-[350px] xl:h-[350px]"
      />

      <div className="md:px-12">
        <h4 className="text-2xl font-semibold md:text-3xl">
          A <span className="underline decoration-[#0F4C75]/50">brief</span>{" "}
          background
        </h4>
      </div>
      <div className="text-sm md:text-sm xl:text-md">
        <p>
          I am a versatile and dedicated Software Engineer specializing in the
          development of Software as a Service applications using Next.js. With
          a strong foundation in both frontend and backend technologies, I excel
          in crafting robust and scalable solutions that meet the dynamic needs
          of modern businesses. My expertise lies in leveraging a diverse skill
          set, including React, TypeScript, Node.js, PostgreSQL, and AWS, to
          deliver cutting-edge applications that drive innovation and
          efficiency.
        </p>
        <br />
        <p>
          My journey in software development has been marked by impactful
          projects and enriching experiences. At Volvo Cars, I spearheaded the
          design and development of a groundbreaking 3D Data Visualization tool,
          utilizing C#, Unity3D, and Microsoft Hololens 2, to analyze customer
          interactions and inform product decisions. This experience honed my
          ability to collaborate effectively across departments and deliver
          solutions that align with strategic objectives.
        </p>
        <br />
        <p>
          My passion for innovation extends beyond traditional software
          development, as evidenced by my involvement in projects such as
          CerebralAI, EduPod, and AI Chatbot, which integrate advanced AI
          technologies to deliver cutting-edge solutions. Furthermore, my
          educational background, including a Master of Science in Computer
          Science from Uppsala University and a Bachelor of Engineering from
          NITTE Meenakshi Institute of Technology, has equipped me with a
          comprehensive understanding of computer science principles and
          emerging technologies.
        </p>
        <br />
        <p>
          As a language-agnostic problem solver with excellent communication and
          collaboration skills, I thrive in dynamic environments where
          creativity and teamwork are valued. Whether it's developing intuitive
          user interfaces or architecting scalable backend systems, I am
          committed to delivering high-quality solutions that exceed
          expectations and drive business success.
        </p>
      </div>
    </motion.div>
  );
}
