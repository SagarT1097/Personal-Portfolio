import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

type Props = {}

export default function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href ='mailto:sagar.uu97@gmail?subject=${formData.subject}&body=${formData.message}'
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-16 md:top-12 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
                Contact me
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-xl md:text-3xl font-semibold text-center">Lets Connect! 
                </h4>

                <div className="space-y-3">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#3282B8] h-7 w-7 animate-pulse" />
                        <p className ="text-xl md:text-2xl">+46 769776658</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#3282B8] h-7 w-7 animate-pulse" />
                        <p className="text-xl md:text-2xl">sagar.uu97@gmail.com</p>
                    </div>


                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#3282B8] h-7 w-7 animate-pulse" />
                        <p className="text-xl md:text-2xl">Uppsala, Sweden</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[350px] md:w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register('name')} className="contactInput" type="text" placeholder="Name"></input>
                        <input {...register('email')} className="contactInput" type="email" placeholder="Email"></input>
                    </div>
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"></input>
                    <textarea {...register('message')} placeholder="Message" className="contactInput"></textarea>
                    <button type="submit" className= "bg-[#0F4C75] py-5 px-10 rounded-md text-white font-bold text-lg">Submit</button>
                </form>
            </div>

            
             
        </motion.div>
    )
}