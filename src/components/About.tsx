import React from 'react'
import {motion } from "framer-motion"
import { urlFor } from '../../sanity'
import Image from 'next/image'

import abtImg  from '../assets/abt.png'
type Props = { }

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration:1.5}}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl top-16 md:top-14">
            About
            </h3>
            <motion.div/>
            <Image
                         width={500}
                         height={500}
                        src={abtImg}
                         alt="Volvo Cars"
                         className="-mb-20 md:mb-0 p-20 md:p-0 flex-shrink-0 w-56 h-56 object-contain xl:w-[350px] xl:h-[350px]"
                        />
           

            <div className="md:px-12">
                <h4 className="text-2xl font-semibold md:text-3xl">
                    A <span className="underline decoration-[#0F4C75]/50">brief</span> background</h4>
            </div>
            <div className="text-sm md:text-sm xl:text-xl">
                <p>
                    Recent Computer Science Masters graduate from Uppsala University. I am passionate about XR, Full-Stack development, and Computer Vision.  At Volvo Cars, I delved into XR research, while crafting a Customer interaction analysis tool using Microsoft Hololens 2, Unity3D and C#.
                </p>
                <br/>
                <p>
                    My thesis explored XR applications in the Automobile industry, showcasing XR development, Unity3D, C#, and problem-solving skills. Practical experience includes Full-stack development and Project Engineering, with expertise in React, Django and .NET.
                </p>
                <br/>
                    <p>
                    Proficient in Python, Java, MATLAB, Figma and Blender as well. Always eager to learn and contribute to innovative XR solutions, my goal is to make an impact in XR software development. 
                </p>   
</div>
        </motion.div>
    )
}