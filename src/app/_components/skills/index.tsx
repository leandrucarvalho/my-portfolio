import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ContainerSkills } from "./container-skils";

export function Skills() {
  return (
    <div className="flex flex-col gap-y-64 p-4" id="skills">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full md:pl-6">
            <h1 className="font-medium text-xl flex pr-4">
              <span className="text-primary">#</span> skills
            </h1>
            <Separator className="bg-primary w-40 md:w-80" />
          </div>
        </div>
        <div className="relative mt-10">
          <div className="absolute top-0 right-6 border w-24 h-24 border-primary"></div>
          <Image
            src={"/dots.png"}
            alt=""
            width={63}
            height={63}
            className="absolute top-10 left-16"
          />
          <Image
            src={"/logo2.svg"}
            alt=""
            width={113}
            height={113}
            className="absolute -bottom-64 left-3"
          />
          <Image
            src={"/dots.png"}
            alt=""
            width={63}
            height={63}
            className="absolute -bottom-48 right-32"
          />
          <div className="absolute -bottom-64 right-9 border w-16 h-16"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10">
        <div>
          <ContainerSkills
            text="Typescript, Javascript, Python"
            title="Languages"
          />
        </div>
        <div>
          <ContainerSkills
            text="SQLite, PostgreSQL, MongoDB"
            title="Databases"
          />
        </div>
        <div>
          <ContainerSkills text="HTML, CSS, SCSS, Rest" title="Other" />
        </div>
        <div>
          <ContainerSkills
            text="Figma, Vscode, Cursor, Git, Github, Azure, Trello"
            title="Tools"
          />
        </div>
        <div>
          <ContainerSkills text="React, Next.js, Tailwind" title="Frameworks" />
        </div>
      </div>
    </div>
  );
}
