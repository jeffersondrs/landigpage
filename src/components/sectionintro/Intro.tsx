"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroPattern } from "./HerroPattern";

export default function Intro() {
  return (
    <section className="w-full text-white bg-green-600 flex flex-row justify-center items-center h-[100vh] sm:flex-col overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-1/2 sm:w-full h-full flex flex-col justify-center items-center gap-3"
      >
        <Image
          width={500}
          height={500}
          className="bg-cover bg-center  object-cover absolute opacity-10"
          src={"/SVG.svg"}
          alt="logo"
        />
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-8xl font-bold text-end sm:text-end px-5 sm:text-4xl sm:w-full z-50 tracking-widest"
        >
          Agency
          <br />
          Tech
        </motion.h1>
        <div className="absolute z-40 w-full h-full sm:hidden">
          <HeroPattern />
        </div>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase text-center text-xl sm:px-5 tracking-widest font-semibold"
        >
          Landing Page para divulgar sua marca <br /> designed by
          <Link href="#" className="underline">
            @jeffersondrs
          </Link>{" "}
          /
          <Link href="#" className="underline">
            Github
          </Link>
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 sm:w-full h-full sm:h-96 z-50"
      >
        <Image
          width={500}
          height={500}
          className="bg-cover bg-center w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1584824486516-0555a07fc511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </motion.div>
    </section>
  );
}
