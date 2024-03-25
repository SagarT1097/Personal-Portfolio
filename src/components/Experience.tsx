import React from "react";
import { motion } from "framer-motion";

import { Experiences2 } from "../../typings";
import Image from "next/image";

import volvo2 from "../assets/volvo2.png";
import pacific from "../assets/pwd.png";
import wipro from "../assets/wipro.png";
import steedserv from "../assets/steedserv.jpg";

import blender from "../assets/blender.png";
import csharp from "../assets/csharp.png";
import css from "../assets/css.png";
import django from "../assets/django.png";
import dotnet from "../assets/dotnet.png";
import figma from "../assets/figma.png";
import framermotion from "../assets/framermotion.png";
import hololens from "../assets/hololens.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import matlab from "../assets/matlab.png";
import mongodb from "../assets/mongodb.png";
import mrtk from "../assets/mrtk.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import oculus from "../assets/oculus.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sqlite from "../assets/sqlite.png";
import tailwindcss from "../assets/tailwindcss.png";
import typescript from "../assets/typescript.png";
import unity from "../assets/unity.png";
import wordpress from "../assets/wordpress.png";
import openxr from "../assets/openxr.png";
import opengl from "../assets/opengl.png";
import git from "../assets/git.png";
import trello from "../assets/trello.png";
import slack from "../assets/slack.png";
import servicenow from "../assets/servicenow.png";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl top-16 md:top-16 xl:top-8">
        Experience
      </h3>

      <div className="w-full mb-1 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory w-[350px] h-[600px] md:h-[850px] md:w-[700px] lg:w-[1500px] lg:h-[700px] scrollbar scrollbar-track-[#1B262C]20 scrollbar-thumb-[#0F4C75]/80">
        {/*{experiences?.map((experience) => (*/}
        {/*    <ExperienceCards key={experience._id} experience={experience} />*/}

        {/*))}*/}

        <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[500px] snap-center bg-[#212F36] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <Image
            className="w-12 h-12 md:w-[120px] md:h-[120px] rounded-full xl:w-[120px] xl:h-[120px]"
            src={volvo2}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-sm md:text-4xl font-light">
              Software Developer
            </h4>
            <p className="font-bold text-sm md:text-2xl mt-1">Volvo Cars</p>
            <div className="flex space-x-2 my-2">
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={unity}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={csharp}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={mrtk}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={hololens}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={blender}
                alt=""
              />
            </div>
            <p className="uppercase py-2 text-gray-300 text-xs md:text-xl">
              01/2023 - 08/2023
            </p>
            <ul className="list-disc space-y-2 ml-5 text-xs md:text-sm">
              <li>
                Designed and developed a robust 3D visualization tool for
                Customer interaction analysis using C#, Unity3D, Microsoft
                Hololens 2; which is now used to understand customer behavior
                and identify areas of interests of current/future cars
              </li>
              <li>
                Worked with the Perceived Quality department and collaborated
                closely with professionals for requirements gathering and
                implementation.
              </li>
              <li>
                Reference: Ola Wagersten (Technical Specialist Perceived
                Quality) | T +46(0)72-9774658 | ola.wagersten@volvocars.com
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[500px] snap-center bg-[#212F36] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <Image
            className="w-12 h-12 md:w-[120px] md:h-[120px] rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center bg-white"
            src={pacific}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-sm md:text-4xl font-light">
              Full-stack Developer
            </h4>
            <p className="font-bold text-sm md:text-2xl mt-1">
              Pacific Web Developers
            </p>
            <div className="flex space-x-2 my-2">
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={wordpress}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={html}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={css}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={javascript}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={figma}
                alt=""
              />
            </div>
            <p className="uppercase py-2 text-gray-300 text-xs md:text-xl">
              10/2020 - 12/2020
            </p>
            <ul className="list-disc space-y-2 ml-5 text-xs md:text-sm">
              <li>
                Co-Founded and established a startup focused on professional
                website development for small to medium sized industries present
                in India and UAE using WordPress.
              </li>
              <li>
                Orchestrated the development of the websites and execution of
                market research, effectively yielding a monthly revenue of $500.
              </li>
              <li>
                Demonstrated effective communication skills by maintaining
                regular contact with clients, ensuring their requirements were
                understood and met throughout the development process.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[500px] snap-center bg-[#212F36] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <Image
            className="w-12 h-12 md:w-[120px] md:h-[120px] rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center bg-white"
            src={wipro}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-sm md:text-4xl font-light">Project Engineer</h4>
            <p className="font-bold text-sm md:text-2xl mt-1">
              Wipro Technologies
            </p>
            <div className="flex space-x-2 my-2">
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={csharp}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={dotnet}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={servicenow}
                alt=""
              />
            </div>
            <p className="uppercase py-2 text-gray-300 text-xs md:text-xl">
              06/2019 - 06/2020
            </p>
            <ul className="list-disc space-y-2 ml-5 text-xs md:text-sm">
              <li>
                Acquired professional training in C#, .NET and MVC architecture,
                honing expertise in these technologies and methodologies.
              </li>
              <li>
                Demonstrated proficiency in utilizing .NET to create scalable
                and efficient web applications, employing best practices and
                optimizing performance for optimal user experience.
              </li>
              <li>
                Excelled as an Incident Manager, serving as a vital liaison
                between clients and service team, effectively monitoring,
                communicating and resolving priority incidents to ensure optimal
                application functionality using ServiceNow.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[500px] snap-center bg-[#212F36] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <Image
            className="w-12 h-12 md:w-[120px] md:h-[120px] rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center bg-white"
            src={steedserv}
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-sm md:text-4xl font-light">
              Full-stack Developer, Intern
            </h4>
            <p className="font-bold text-sm md:text-2xl mt-1">
              Steedserv Technologies
            </p>
            <div className="flex space-x-2 my-2">
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={python}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={django}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={html}
                alt=""
              />
              <Image
                className="h-5 w-5 md:h-7 md:w-7  rounded-full"
                src={css}
                alt=""
              />
            </div>
            <p className="uppercase py-2 text-gray-300 text-xs md:text-xl">
              07/2018 - 09/2018
            </p>
            <ul className="list-disc space-y-2 ml-5 text-xs md:text-sm">
              <li>
                Designed and developed a scalable web application featuring
                modules for event registration, participant search and event
                data visualization using Python, Django Framework, SQLite and
                latest libraries.
              </li>
              <li>
                Demonstrated problem-solving skill and attention to detail by
                delivering a reliable and UX enhanced web application for
                managing marathon events.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
