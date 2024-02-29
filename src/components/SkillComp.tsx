import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function SkillComp({ }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
        <motion.img
                className="rounded-full border border-gray-500 object-cover h-8 w-8 md:h-14 md:w-14 xl:h-16 xl:w-16 group-hover:grayscale transition duration-300 ease-in-out"
            src="/placeholder.png"
            alt=""
            />
 
    </div>
    )
}