import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t-2 py-4 md:px-10 flex flex-col items-center">
      <div className="flex items-center text-base flex-col md:flex-row md:justify-between md:w-full md:mx-10">
        <div className="font-bold flex flex-col">
          <div className="flex items-center gap-x-2">
            <Image src={"/logo.svg"} alt={"logo"} width={16} height={16} />
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Leandro Carvalho
            </Link>
          </div>
          <span>Full-Stack Developer</span>
        </div>
        <div className="flex flex-col items-center gap-y-4 p-4">
          <h1>Social</h1>
          <div className="items-center flex">
            <Image
              src="/discord.svg"
              alt={"icon discord"}
              width={32}
              height={32}
            />
            <a href="https://github.com/leandrucarvalho" target="_blank">
              <Image
                src="/github.svg"
                alt={"icon dischord"}
                width={32}
                height={32}
              />
            </a>
            <a href="https://www.linkedin.com/in/leandro-c-s/" target="_blank">
              <Image
                src="/linkedin.svg"
                alt={"icon dischord"}
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
      <p className="flex text-sm w-fit p-4 text-center">
        © Copyright 2024. Desenvolvido <br /> por Leandro Carvalho
      </p>
    </div>
  );
}
