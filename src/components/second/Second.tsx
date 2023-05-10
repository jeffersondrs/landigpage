"use client";

import { motion } from "framer-motion";
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandGraphql,
} from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Intro() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <section className="bg-green-600 w-full text-white flex flex-row justify-center items-center sm:flex-col">
      <div className="w-1/2 sm:w-full h-full flex flex-col justify-start pt-36 sm:py-1 text-3xl items-center sm:gap-y-5">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="uppercase font-bold text-end sm:text-xl sm:text-center text-3xl sm:w-full z-50 tracking-widest">
            Tecnologias de ponta e de <br />
            ultima geração!
          </h2>
        </motion.header>
      </div>
      <div className="w-1/2 sm:w-full h-full flex flex-col justify-center text-2xl sm:px-5 sm:gap-5 items-center px-10 gap-10">
        <header className="text-start text-xl sm:w-full z-50 tracking-widest">
          <h2>Tecnologia de ponta a ponta</h2>
        </header>
        <div className="">
          <p className="text-start text-xl sm:w-full z-50 tracking-widest">
            <strong>Crie e publique</strong> Aplicações Web com as tecnologias
            de ponta e de ultima geração. <br />
            <strong>Desenvolva</strong> aplicações com as melhores tecnologias
            do mercado.
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-2 pt-5 gap-6 sm:text-xl sm:py-5 "
          >
            <li className="flex flex-row justify-start items-center w-full gap-x-5">
              <TbBrandNextjs />
              <motion.span
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Nextjs
              </motion.span>
            </li>
            <li className="flex flex-row justify-start items-center w-full gap-x-5">
              <SiTailwindcss />
              <motion.span
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Tailwindcss
              </motion.span>
            </li>
            <li className="flex flex-row justify-start items-center w-full gap-x-5">
              <SiTypescript />
              <motion.span
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                Typescript
              </motion.span>
            </li>
            <li className="flex flex-row justify-start items-center w-full gap-x-5">
              <SiExpress />
              <motion.span
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                Express
              </motion.span>
            </li>
            <li className="flex flex-row justify-start items-center w-full gap-x-5">
              <TbBrandFramerMotion />
              <motion.span
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                Framer Motion
              </motion.span>
            </li>
            <li className="flex flex-row justify-start items-center w-full gap-x-5">
              <TbBrandGraphql />
              <motion.span
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.8 }}
              >
                Graphql
              </motion.span>
            </li>
          </motion.ul>
          <p className="text-start text-xl sm:w-full z-50 py-5 tracking-widest">
            Aplicações desenvolvidas com as melhores tecnologias do mercado, com
            alta{" "}
            <strong className="underline-offset-1 underline">
              performance
            </strong>{" "}
            e{" "}
            <strong className="underline-offset-2 underline">
              escalabilidade.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
