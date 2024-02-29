/* eslint-disable react/jsx-key */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import volvoproj  from '../assets/volvoproj.png'
import nexrproj  from '../assets/nexrproj.png'
import learnxr  from '../assets/learnxr.png'
type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="flex flex-col relative overflow-hidden h-screen text-center md:text-left md:flex-row max-w-ful justify-evenly mx-auto items-center z-10">
            <h3 className="absolute top-16 md:top-14 xl:top-12 uppercase tracking-[20px] text-gray-500 text-sm md:text-xl xl:text-2xl">
                Featured projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#1B262C]/20 scrollbar-thumb-[#0F4C75]/80">
 
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <Image
                         width={500}
                         height={500}
                        src={volvoproj}
                         alt="Volvo Cars"
                         
                        />
                        <div className="space-y-5 px-10 md:px-10 max-w-6xl"></div>
                        <div><h4 className="text-4xl md:text-4xl font-semibold text-center">Customer Interaction Analysis Tool</h4></div>
                        <p className="text-sm md:text-xl text-center md:text-center">3D Visualization tool for Customer Interaction Analysis using C#, Unity3D, and Microsoft HoloLens 2. Developed for Volvo Cars as a Master Thesis research. </p>
                        <p className="text-sm md:text-xl"><i><strong>Tech Stack:</strong> Unity3D, C#, Microsoft Hololens 2, Blender, Mixed Reality Toolkit.</i></p>
                        
                    </div>
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <Image
                         width={500}
                         height={500}
                        src={nexrproj}
                         alt="NeXR Labs"
                         
                        />
                        <div className="space-y-10 px-10 md:px-10 max-w-6xl"></div>
                        <div><h4 className="text-4xl font-semibold text-center">Immersive VR Concert</h4></div>
                        <p className="text-sm md:text-xl text-center md:text-center">An Immersive Virtual Reality Concert developed for a start-up (NeXR Labs) using Oculus Quest 2 and Unity3D.
                        Presented at Uppsala Innovation Center Demo day as a Proof of Concept.</p>
                        <p className="text-sm md:text-xl"><i><strong>Tech Stack:</strong> Unity3D, C#, Oculus Quest 2, Oculus SDK, XR Interaction Toolkit, OpenXR, Spatial Audio.</i></p>

                        
                        
                    </div>
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 md:space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <Image
                         width={500}
                         height={500}
                        src={learnxr}
                         alt="LearnXR"
                         
                        />
                        <div className="space-y-10 px-10 md:px-10 max-w-6xl"></div>
                        <div><h4 className=" text-3xl md:text-4xl font-semibold text-center">An XR Learning platform</h4></div>
                        <p className="text-sm md:text-xl text-center md:text-center">Dive into the world of XR and Spatial Computing with my comprehensive learning platform. Enroll in courses to master cutting-edge skills, or become a creator and educator by publishing your own courses.</p>
                        <p className="text-sm md:text-xl"><i><strong>Tech Stack:</strong> Next, React, TailwindCSS, Mux, Prisma, Stripe, MySQL. </i></p>
                        <button className="currDevButton">In Progress</button>
             
                    </div>
                 
                
            </div>
            
            <div className="w-full absolute top-[25%] bg-[#BBE1FA]/10 left-0 h-[440px] -skew-y-12">
            </div>

        </motion.div>
    )
}