import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ContainerSkills } from "./container-skils";

export function Skills() {
  return (
    <div className="mt-28 flex gap-10 h-96">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-medium text-4xl flex pr-4">
              <span className="text-primary">#</span> skills
            </h1>
            <Separator className="bg-primary w-80 flex" />
          </div>
        </div>
        <div className="relative w-96 mt-8">
          <div className="absolute top-0 -right-0 border w-24 h-24"></div>
          <Image
            src={"/dots.png"}
            alt={""}
            width={63}
            height={63}
            className="absolute top-10 left-8"
          />
          <Image
            src={"/logo2.svg"}
            alt={""}
            width={113}
            height={113}
            className="absolute -bottom-72 right-52"
          />
          <Image
            src={"/dots.png"}
            alt={""}
            width={63}
            height={63}
            className="absolute -bottom-48 right-24"
          />
          <div className="absolute -bottom-56 -right-9 border w-16 h-16"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-24">
        <div className="col-start-1 row-start-1 col-end-2 row-end-2">
          <ContainerSkills
            text="Typescript, Javascript, Python"
            title="Languages"
          />
        </div>
        <div className="col-start-2 row-start-1 col-end-3 row-end-2">
          <ContainerSkills
            text="SQLite, PostgreSQL, MongoDB"
            title="Databases"
          />
        </div>
        <div className="col-start-2 row-start-2 col-end-3 row-end-3">
          <ContainerSkills text="HTML, CSS, SCSS, Rest" title="Other" />
        </div>
        <div className="col-start-3 row-start-1 col-end-4 row-end-2">
          <ContainerSkills
            text="Figma, Vscode, Cursor, Git, Github, Azure, Trello"
            title="Tools"
          />
        </div>
        <div className="col-start-3 row-start-2 col-end-4 row-end-3">
          <ContainerSkills text="React, Next.js, Tailwind" title="Frameworks" />
        </div>
      </div>
    </div>
  );
}
