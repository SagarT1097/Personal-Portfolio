import React from 'react'
import { motion } from 'framer-motion'
import SkillComp from '../components/SkillComp'
import Image from 'next/image'

import blender  from '../assets/blender.png'
import csharp from '../assets/csharp.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import dotnet from '../assets/dotnet.png'
import figma from '../assets/figma.png'
import framermotion from '../assets/framermotion.png'
import hololens from '../assets/hololens.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import matlab from '../assets/matlab.png'
import mongodb from '../assets/mongodb.png'
import mrtk from '../assets/mrtk.png'
import mysql from '../assets/mysql.png'
import nextjs from '../assets/nextjs.png'
import nodejs from '../assets/nodejs.png'
import oculus from '../assets/oculus.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import sqlite from '../assets/sqlite.png'
import tailwindcss from '../assets/tailwindcss.png'
import typescript from '../assets/typescript.png'
import unity from '../assets/unity.png'
import wordpress from '../assets/wordpress.png'
import openxr from '../assets/openxr.png'
import opengl from '../assets/opengl.png'
import git from '../assets/git.png'
import trello from '../assets/trello.png'
import slack from '../assets/slack.png'


type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative text-center md:text-left max-w-[2000px]  min-h-screen justify-center mx-auto items-center space-x-5 space-y-5">
            <h3 className="absolute top-16 md:top-14 xl:top-12 pl-9 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>
            

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-10">
            {/**Front End Div**/}
            <div className="border border-gray-600 rounded p-2 border-gray-500 shrink">
                <h4 className=" pb-1 uppercase text-gray-500 text-center text-sm">Frontend Development</h4>
            <div className="grid grid-cols-4 gap-2 md:gap-5">
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={react}
                alt="ReactJS"
                />
                <Image
                className="rounded-full border border-gray-500 object-cover h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={nextjs}
                alt="NextJS"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={javascript}
                alt="JavaScript"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={typescript}
                alt="TypeScript"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={tailwindcss}
                alt="TailwindCSS"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={framermotion}
                alt="FramerMotion"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={html}
                alt="HTML"
                />
               <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={css}
                alt="CSS"
                />
                

            </div>
            </div>
            {/**Back End Div**/}
            <div className="border rounded p-2 border-gray-500 border-gray-600">
                <h4 className="pb-1 uppercase text-gray-500 text-center text-sm">Backend Development</h4>
                <div className="grid grid-cols-4 gap-2 md:gap-5">
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={nodejs}
                alt="NodeJS"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={dotnet}
                alt=".NET"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out "
                src={django}
                alt="Django"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={csharp}
                alt="C#"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={python}
                alt="Python"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={mysql}
                alt="MySQL"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
                src={mongodb}
                alt="MongoDB"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={sqlite}
                alt="SQLite"
                />

                </div>
            </div>
            {/**XR Div**/}
            <div className="border rounded p-2 border-gray-500 border-gray-600">
                <h4 className="pb-1 uppercase text-gray-500 text-center text-sm">XR Development</h4>
                <div className="grid grid-cols-4 gap-2 md:gap-5">
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={unity}
                alt="Unity3D"
                />
                <Image
                className="rounded-full border border-gray-500 object-cover h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={oculus}
                alt="Oculus"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={hololens}
                alt="Microsoft Hololens 2"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={mrtk}
                alt="Mixed Reality Toolkit"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={openxr}
                alt="openxr"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={opengl}
                alt="opengl"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={blender}
                alt="Blender"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={figma}
                alt="Figma"
                />
                </div>
            </div>

            {/**Misc Div**/}
            <div className="border rounded p-2 border-gray-500 border-gray-600">
                <h4 className="pb-1 uppercase text-gray-500 text-center text-sm">Other tools</h4>
                <div className="grid grid-cols-4 gap-2 md:gap-5">
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={git}
                alt="Git"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={wordpress}
                alt="WordPress"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={matlab}
                alt="MATLAB"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={trello}
                alt="Trello"
                />
                <Image
                className="rounded-full border border-gray-500 object-contain h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out bg-white"
                src={slack}
                alt="Slack"
                />

                </div>
            </div>
            </div>
        </motion.div>
    )
}