import { Separator } from "@/components/ui/separator";
import { ContainerProject } from "./container-project";

export function Projects() {
  return (
    <div className="mt-20 relative flex flex-col items-center">
      <div className="flex items-center border ">
        <div className="flex items-center">
          <h1 className="font-medium text-4xl flex pr-4">
            <span className="text-primary">#</span> projects
          </h1>
          <Separator className="bg-primary w-[511px]" />
        </div>
        <button className="pl-4">View all ~~{">"} </button>
      </div>
      <div className="flex flex-row gap-4 lg:gap-x-36 ">
        <ContainerProject />
        <ContainerProject />
        <ContainerProject />
      </div>
      <div className="absolute bottom-16 -right-52 border w-24 h-24 "></div>
    </div>
  );
}
