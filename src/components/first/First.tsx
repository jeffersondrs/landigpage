"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <section
      id="first"
      className="w-full bg-green-600 flex flex-row justify-center items-start sm:h-full sm:flex-col text-white py-20 overflow-hidden gap-10"
    >
      <div className="w-1/2 sm:w-full h-full flex flex-col justify-start text-3xl items-center py-20 sm:py-0">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="uppercase font-bold text-end sm:text-center sm:text-2xl sm:w-full z-50 tracking-widest">
            Sua marca exposta aqui <br /> para todos
          </h2>
        </motion.header>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-1/2 sm:w-full h-full flex flex-col justify-center text-2xl items-center px-10 gap-y-10 sm:px-5"
      >
        <p className="text-start text-xl sm:w-full z-50 tracking-widest">
          <strong>Divulgue para o mundo</strong> e mostre sua marca para todos
          os clientes que estão procurando por você.
          Seja encontrado e aumente suas vendas. 
          Leve sua marca para o próximo nível, deixe seu legado e seja lembrado.
          Na era digital, sua marca precisa estar presente na internet, seu trabalho precisa ser visto.
          Faça acontecer, faça sua marca ser vista. 
          Contrate hoje mesmo a <strong>Agency Tech</strong> e tenha sua marca exposta para o mundo.
          Vamos mudar o mundo juntos.
        </p>
        <span className="w-full h-full z-50">
          <Image
            width={500}
            height={500}
            className="bg-cover bg-center w-full h-full object-cover rounded-sm"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </span>
      </motion.div>
    </section>
  );
}
