import Image from "next/image";

export function Hero() {
  return (
    <>
      <div className="flex flex-col items-center relative mb-40 gap-y-16 p-4 md:mx-10">
        <div className="flex items-center mt-16 justify-evenly">
          <div className="flex flex-col text-left text-white  md:flex-row md:items-center md:justify-between">
            <div className=" md:w-1/2 md:mr-8">
              <h1 className="text-xl font-semibold md:text-4xl">
                Leandro Carvalho é um desenvolvedor{" "}
                <span className="text-primary">full-stack</span>
              </h1>
              <p className="mt-4 text-base">
                A melhor solução para o seu negócio, ele cria aplicativos web
                reativos onde as tecnologias se encontram com a criatividade
              </p>
              <button className="mt-6 px-4 py-2 border text-white border-primary w-fit text-sm md:text-base">
                Entre em contato !!
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-8">
              <div className="relative">
                <Image
                  src="/logo2.svg"
                  alt="hero"
                  width={100}
                  height={100}
                  className="absolute top-16 left-3 md:w-52"
                />
                <Image
                  src="/person.png"
                  alt="hero"
                  width={300}
                  height={300}
                  className="relative z-0 md:w-[500px]"
                />
                <Image
                  src={"/dots.png"}
                  alt="hero"
                  className="absolute bottom-20 right-6 md:w-32"
                  width={60}
                  height={60}
                />
              </div>
              <div className="mt-4 text-white border p-2 w-full">
                <span className="border border-none px-2 bg-primary mr-2"></span>{" "}
                Atualmente trabalhando como{" "}
                <span className="text-primary font-bold">Front End React</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white flex flex-col relative items-center justify-center">
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
          <span className="border-b border-x p-4 absolute -bottom-[72px] right-0 text-sm w-32">
            - Steve Jobs
          </span>
        </div>
      </div>
    </>
  );
}
