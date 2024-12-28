import Image from "next/image";

export function ContainerProject() {
  return (
    <div className="border flex flex-col">
      <Image src={"/img_project.png"} alt="project" width={267} height={200} />
      <span className="border-b p-2 text-sm ">HTML SCSS Python Flask</span>
      <div className="p-4 gap-y-4 flex flex-col">
        <h1 className="text-lg">Titulo do projeto</h1>
        <span className="text-sm">descricao do projeto</span>
        <div className="flex text-sm gap-x-2">
          <button className="border px-4 py-2">Live Demo &lt;~&gt;</button>
          <button className="border px-4 py-2">Code &ge;</button>
        </div>
      </div>
    </div>
  );
}
