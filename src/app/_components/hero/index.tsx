import Image from "next/image";

export function Hero() {
  return (
    <div className="flex items-center p-4 gap-4 mt-16 justify-evenly">
      <div className="flex flex-col text-left text-white max-w-[60%]">
        <h1 className="text-4xl font-semibold">
          Leandro Carvalho é um desenvolvedor <br />{" "}
          <span className="text-primary">full-stack</span> e{" "}
          <span className="text-primary">analista de sistemas</span>
        </h1>
        <p className="mt-4 text-base">
          A melhor solução para o seu negócio, Ele cria sítios Web reactivos
          onde as tecnologias se encontram com a criatividade
        </p>
        <button className="mt-6 px-4 py-2 border text-white border-primary w-fit">
          Entre em contato !!
        </button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Image
            src="/logo2.svg"
            alt="hero"
            width={155}
            height={155}
            className="absolute top-20 -left-3"
          />
          <Image
            src="/person.png"
            alt="hero"
            width={450}
            height={450}
            className="relative z-0"
          />
          <Image
            src={"/dots.png"}
            alt="hero"
            className="absolute bottom-20 right-6 z-20"
            width={84}
            height={84}
          />
        </div>
        <div className="mt-4 text-white border p-2 w-full">
          Atualmente trabalhando como{" "}
          <span className="text-primary font-bold">Front End React</span>
        </div>
      </div>
    </div>
  );
}
