import { Separator } from "@/components/ui/separator";
import { ContainerProject } from "./container-project";

export function Projects() {
  return (
    <div className="flex flex-col p-4" id="projects">
      <div className="flex justify-between ">
        <div className="flex items-center gap-x-3">
          <h1 className="font-medium text-xl flex">
            <span className="text-primary">#</span> projects
          </h1>
          <Separator className="bg-primary w-36" />
        </div>
        <div className="flex">
          <button>View all ~~{">"} </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 gap-y-8">
        <ContainerProject />
        <ContainerProject />
        <ContainerProject />
      </div>
    </div>
  );
}
