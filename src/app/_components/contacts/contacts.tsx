import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Contacts() {
  return (
    <div className="mb-28 flex flex-col p-4" id="contacts">
      <div className="">
        <div className="flex items-center gap-x-6">
          <h1 className="text-xl flex">
            <span className="text-primary">#</span>contacts
          </h1>
          <Separator className="bg-primary w-56" />
        </div>
        <div className="mt-6">
          <article className="gap-y-4 flex flex-col">
            <p className="text-justify">
              Estou interessado em oportunidades como freelancer. No entanto, se
              tiver outros pedidos ou questões, não hesite em entrar em contato
              comigo!
            </p>
          </article>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 p-4 border w-fit mt-4">
        <h1>Message me here</h1>
        <div className="items-center flex">
          <Image
            src="/discord.svg"
            alt={"icon discord"}
            width={32}
            height={32}
          />
          <span className="pl-1">leandrocarvalho</span>
        </div>
        <div className="items-center flex">
          <Image src="/email.svg" alt={"icon discord"} width={32} height={32} />
          <a href="mailto:leandrucs@gmail.com" className="pl-1">
            leandrucs@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
