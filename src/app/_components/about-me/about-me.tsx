import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="mb-28 flex items-center justify-between lg:mx-20">
      <div>
        <div className="w-[511px]">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">
              <span className="text-primary">#</span>about-me
            </h1>
            <Separator className="w-72 bg-primary" />
          </div>
          <div className="mt-6">
            <article className="gap-y-4 flex flex-col">
              <h3>Olá, o meu nome é Leandro!</h3>
              <p className="text-justify">
                Sou um programador full-stack autodidata. Sou capaz de
                desenvolver sites responsivos a partir do zero e transformá-los
                em experiências web modernas e fáceis de utilizar.
              </p>
              <p>
                Transformar a minha criatividade e conhecimentos em sites Web é
                a minha paixão há mais de um ano. Tenho ajudado vários clientes
                a estabelecer a sua presença online. Esforço-me sempre por
                aprender as tecnologias e frameworks mais recentes.
              </p>
            </article>

            <button className="border border-primary px-4 py-2 mt-7">
              Read more -&gt;
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center relative">
          <Image
            src={"/dots.png"}
            alt="hero"
            width={84}
            height={84}
            className="absolute top-12 left-0"
          />
          <Image
            src="/about-img.png"
            alt={"imagem de um homem com capuz preto"}
            width={343}
            height={508}
          />
          <Image
            src={"/dots.png"}
            alt="hero"
            width={84}
            height={84}
            className="absolute bottom-36 right-8"
          />

          <Separator className="bg-primary w-72" />
        </div>
      </div>
    </div>
  );
}
