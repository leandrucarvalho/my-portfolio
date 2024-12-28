import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="flex flex-col items-center p-4">
      <div>
        <div className="">
          <div className="flex items-center gap-x-4">
            <h1 className="text-xl">
              <span className="text-primary">#</span>about-me
            </h1>
            <Separator className="w-60 bg-primary" />
          </div>
          <div className="mt-6">
            <article className="gap-y-4 flex flex-col text-balance">
              <h3>Olá, o meu nome é Leandro!</h3>
              <p className="">
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

            <button className="border border-primary px-4 py-2 mt-7 text-sm">
              Read more -&gt;
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center relative mt-6">
        <Image
          src={"/dots.png"}
          alt="hero"
          width={50}
          height={50}
          className="absolute top-12 left-0"
        />
        <Image
          src="/about-img.png"
          alt={"imagem de um homem com capuz preto"}
          width={200}
          height={200}
        />
        <Image
          src={"/dots.png"}
          alt="hero"
          width={50}
          height={50}
          className="absolute bottom-10 -right-4"
        />

        <Separator className="bg-primary w-40" />
      </div>
    </div>
  );
}
