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
        <ContainerProject />
        <ContainerProject />
        <ContainerProject />
      </div>
    </div>
  );
}
