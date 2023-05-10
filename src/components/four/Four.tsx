"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Contact {
  name: string;
  email: string;
  message: string;
}

export default function First() {
  const [sendMessageName, setSendMessageName] = useState<string>("");
  const [message, setMessage] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <section className="w-full bg-green-600 flex flex-row justify-center items-center sm:h-full sm:flex-col text-white gap-5 py-10 z-50">
      <div className=" w-1/2 sm:w-full h-full flex flex-row justify-end text-3xl items-center px-20 sm:px-3">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3 className="w-full text-end sm:text-center my-3">
            Entre em contato agora mesmo
          </h3>
          <p className="text-end sm:text-start text-xl sm:w-full z-50 tracking-widest">
            Faça um orçamento sem compromisso, entre em contato agora mesmo e
            saiba mais sobre nossos serviços. Vamos juntos fazer seu negócio
            crescer!
          </p>
        </motion.header>
      </div>
      <div className="w-1/2 sm:w-full h-full flex flex-col justify-center items-center px-10 sm:px-3 z-50 gap-10">
        <h3 className="text-3xl font-bold text-center">Contato</h3>
        <p className="text-end sm:text-start text-xl sm:w-full z-50 tracking-widest">
          Entre em contato conosco e faça um orçamento sem compromisso.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-start gap-3 text-green-600 "
        >
          <div className="flex w-full gap-x-3 sm:gap-3 sm:flex-col">
            <input
              className="w-1/2 sm:w-full h-14 px-5 rounded-sm outline-none"
              type="text"
              placeholder="Nome"
              onChange={(e) =>
                setMessage({
                  ...message,
                  name: e.target.value,
                })
              }
            />
            <input
              className="w-1/2 sm:w-full h-14 px-5 rounded-sm outline-none"
              type="text"
              placeholder="Email"
              onChange={(e) =>
                setMessage({
                  ...message,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col w-full gap-3">
            <textarea
              className="w-full h-28 p-5 max-h-48 rounded-sm outline-none"
              placeholder="Mensagem"
              onChange={(e) =>
                setMessage({
                  ...message,
                  message: e.target.value,
                })
              }
            />
          </div>
          <button
            onClick={() => {
              setSendMessageName(message.name);
              setMessage({
                name: "",
                email: "",
                message: "",
              });
            }}
            className="px-10 cursor-pointer h-14 bg-green-500 rounded-sm text-white hover:border-green-200 hover:text-green-500 hover:bg-white font-bold text-xl tracking-widest transition-all delay-100 ease-in-out"
          >
            Enviar contato
          </button>
        </form>
        {sendMessageName !== "" ? (
          <p className="text-center text-xl">
            Obrigado {sendMessageName}, entraremos em contato em breve!
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
