import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "../components/BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "../../sanity";
import heroImg from "../assets/heroImg.jpg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hej! I'm Sagar Tambrahalli.",
      "Engineering Code for SaaS Applications.",
      "Explore my portfolio for more!",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src={heroImg}
        width={100}
        height={100}
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-500 tracking-[15px]">
          Software Engineer
        </h2>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#0F4C75"></Cursor>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
