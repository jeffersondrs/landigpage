import Link from "next/link";
import {
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
  BsGithub,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

export default function Intro() {
  return (
    <footer className="w-full bg-green-600 text-white flex flex-row justify-center items-center sm:flex-col">
      <div className="w-1/2 sm:w-full h-full py-20 sm:py-5 sm:px-10 flex flex-col justify-center items-center gap-5">
        <h2 className="uppercase font-bold text-end sm:text-xl sm:w-full sm:text-center z-50 tracking-widest">
          Outras formas de contato
        </h2>
        <ul className="grid grid-cols-6 sm:grid-cols-3 pt-5 gap-6 sm:text-xl sm:py-5">
          <li>
            <Link
              href="https://www.linkedin.com/in/jeffersondrs"
              target="_blank"
            >
              <BsLinkedin className="text-4xl cursor-pointer z-50" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/grinreborn" target="_blank">
              <BsInstagram className="text-4xl cursor-pointer z-50" />
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=5521973152800"
              target="_blank"
            >
              <BsWhatsapp className="text-4xl cursor-pointer z-50" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/jeffersondrs" target="_blank">
              <BsGithub className="text-4xl cursor-pointer z-50" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/jefferson.duarteramos.1/" target="_blank">
              <BsFacebook className="text-4xl cursor-pointer z-50" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/kalliadranoth" target="_blank">
              <BsTwitter className="text-4xl cursor-pointer z-50" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-1/2 sm:w-full h-full py-20 sm:py-5 flex flex-col justify-center items-center text-sm gap-5">
        <span className="uppercase font-bold text-end sm:text-xs sm:w-full sm:text-center z-50 tracking-widest">
          Todos os direitos reservados © {new Date().getFullYear()}{" "}
        </span>
        <span className="uppercase font-bold text-end text-xs sm:text-xs sm:w-full sm:text-center z-50 tracking-widest">
          Desenvolvido por: <Link href="https://github.com/jeffersondrs" target="_blank">Jefferson Santos</Link>
        </span>
      </div>
    </footer>
  );
}
