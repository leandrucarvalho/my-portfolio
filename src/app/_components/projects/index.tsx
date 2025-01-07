"use client";
import { Separator } from "@/components/ui/separator";
import { ContainerProject } from "./container-project";

export function Projects() {
  return (
    <div className="flex flex-col p-4 md:mx-10" id="projects">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <h1 className="font-medium text-xl flex md:text-4xl">
            <span className="text-primary">#</span> projects
          </h1>
          <Separator className="bg-primary w-36 md:w-80" />
        </div>
        <div className="flex">
          <button>View all ~~{">"} </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 gap-y-9 gap-x-5 md:flex-row md:justify-evenly sm:flex-col">
        <ContainerProject
          img={"/fsw_foods.png"}
          tecnologies={
            "TypeScript, React.js, Next.js, Tailwind CSS, Shadcn/UI, Node.js, Prisma,PostgreSQL, Neon Serverless Postgres"
          }
          title={"Fsw Foods"}
          description={
            "sistema de delivery de comida desenvolvido durante a 4ª edição do Full Stack Week."
          }
          onClick={() => {
            window.location.href =
              "https://fsw-foods-leandro-carvalho-dev.vercel.app/";
          }}
          onClickCode={() => {
            window.location.href =
              "https://github.com/leandrucarvalho/fsw-foods";
          }}
        />
        <ContainerProject
          img={"/pro-lidera.png"}
          title={"Pro Lidera Skils"}
          description={"Aplicação web voltada para a avaliação de liderança"}
          tecnologies={
            "React.js, Next.js, TypeScript, Tailwind CSS, PostgreSQL, Supabase"
          }
          onClick={() => {
            window.location.href =
              "https://pro-lidera-skils-softex-equipe-2.vercel.app/";
          }}
          onClickCode={() => {
            window.location.href =
              "https://github.com/leandrucarvalho/PI-PRO-LIDERA-TURMA-07-EQUIPE-02";
          }}
          className="w-80"
        />
        <ContainerProject
          img={"/api_barbearia.png"}
          title={"Api Barbearia"}
          description={
            "Esta é uma API de gerenciamento construída com Node.js utilizando o framework Express. Ela fornece endpoints para manipulação de usuários, serviços, funcionários, horários de funcionamento e horários indisponíveis dos funcionários."
          }
          tecnologies={"Node.js, Express"}
          onClickCode={() => {
            window.location.href =
              "https://github.com/leandrucarvalho/ApiBarbearia";
          }}
        />
      </div>
    </div>
  );
}
