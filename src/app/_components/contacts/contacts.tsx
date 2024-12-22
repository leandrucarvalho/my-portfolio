import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Contacts() {
  return (
    <div className="mb-28 flex  justify-between h-60 relative lg:mx-20">
      <div>
        <div className="w-[511px]">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">
              <span className="text-primary">#</span>contacts
            </h1>
            <Separator className="w-72 bg-primary" />
          </div>
          <div className="mt-6">
            <article className="gap-y-4 flex flex-col">
              <p className="text-justify">
                Estou interessado em oportunidades como freelancer. No entanto,
                se tiver outros pedidos ou questões, não hesite em contactar-me
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start gap-y-4 p-4 absolute bottom-0 right-0 border">
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
            <Image
              src="/email.svg"
              alt={"icon discord"}
              width={32}
              height={32}
            />
            <a href="mailto:leandrucs@gmail.com" className="pl-1">
              leandrucs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
