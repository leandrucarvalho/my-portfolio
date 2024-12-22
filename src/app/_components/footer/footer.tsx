import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t-2 p-4">
      <div className="flex justify-between items-center text-base lg:mx-20">
        <div className="font-bold flex flex-col items-left  ">
          <div className="flex items-center gap-x-2">
            <Image src={"/logo.svg"} alt={"logo"} width={16} height={16} />
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Leandro Carvalho
            </Link>
          </div>
          <span>Full-Stack Developer</span>
        </div>
        <div className="flex flex-col items-start gap-y-4 p-4  ">
          <h1>Social</h1>
          <div className="items-center flex">
            <Image
              src="/discord.svg"
              alt={"icon discord"}
              width={32}
              height={32}
            />
            <Image
              src="/github.svg"
              alt={"icon dischord"}
              width={32}
              height={32}
            />
            <Image
              src="/linkedin.svg"
              alt={"icon dischord"}
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      <span className="items-center flex justify-center p-4 text-sm">
        © Copyright 2024. Desenvolvido por Leandro Carvalho
      </span>
    </div>
  );
}
