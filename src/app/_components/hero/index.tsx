import Image from "next/image";

export function Hero() {
  return (
    <>
      <div className="flex flex-col items-center relative">
        <div className="flex items-center gap-4 mt-16 justify-evenly">
          <div className="flex flex-col text-left text-white max-w-[60%]">
            <h1 className="text-4xl font-semibold">
              Leandro Carvalho é um desenvolvedor <br />{" "}
              <span className="text-primary">full-stack</span> e{" "}
              <span className="text-primary">analista de sistemas</span>
            </h1>
            <p className="mt-4 text-base">
              A melhor solução para o seu negócio, ele cria aplicativos web
              reativos onde as tecnologias se encontram com a criatividade
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
              <span className="border border-none px-2 bg-primary mr-2"></span>{" "}
              Atualmente trabalhando como{" "}
              <span className="text-primary font-bold">Front End React</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 text-white flex flex-col relative items-center justify-center w-fit">
          <span className="absolute -top-[10px] left-4 bg-background px-1">
            <Image src={"/aspas.svg"} alt={""} width={25} height={20} />
          </span>
          <span className="border p-8">
            A única maneira de fazer um excelente trabalho é amar o que você
            faz.
          </span>
          <span className="absolute -bottom-[10px] right-4 bg-background px-1">
            <Image src={"/aspas.svg"} alt={""} width={25} height={20} />
          </span>
          <span className="border-b border-x p-4 absolute -bottom-[52px] right-0 text-sm w-32">
            - Steve Jobs
          </span>
        </div>
        <div className="absolute -bottom-2 -right-3 border w-24 h-24 "></div>
      </div>
    </>
  );
}
