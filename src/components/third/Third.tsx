"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function First() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  return (
    <section className="w-full bg-green-600 flex flex-row justify-center items-center sm:h-full sm:flex-col text-white gap-5 py-10">
      <div className="w-1/2 sm:w-full flex flex-col justify-start text-3xl items-center px-5 sm:text-center">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="uppercase font-bold text-end sm:text-3xl sm:text-center sm:w-full z-50 tracking-widest">
            Alcance clientes em <br /> todo mundo
          </h2>
          <p className="text-end sm:text-start text-xl sm:w-full z-50 tracking-widest">
            Leve sua marca para o mundo inteiro, com um site moderno e de
            qualidade você pode alcançar clientes em todo o mundo. Faça seu
            sonho acontecer com a gente! Mostre seu trabalho, seu produto, sua
            marca, sua empresa, alcance novos clientes e aumente suas vendas.
          </p>
        </motion.header>
      </div>
      <div className="w-1/2 sm:w-full h-full z-50">
        <div className="flex flex-col justify-center items-center gap-5">
          <Link href="/" className="landscape">
            <Image
              width={600}
              height={300}
              src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="rounded-sm"
            />
          </Link>
          <div className="flex flex-row">
            <Link href="/">
              <Image
                width={300}
                height={300}
                src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="rounded-l-sm"
              />
            </Link>
            <Link href="/">
              <Image
                width={300}
                height={300}
                src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="rounded-r-sm"
              />
            </Link>
          </div>
          <Link href="/" className="landscape">
            <Image
              width={600}
              height={300}
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt=""
              className="rounded-sm"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
