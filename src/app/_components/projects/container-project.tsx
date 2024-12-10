import Image from "next/image";

export function ContainerProject() {
  return (
    <div className="mt-12 border w-fit">
      <Image src={"/img_project.png"} alt="project" width={330} height={200} />
      <span className="border flex p-2 text-base">HTML SCSS Python Flask</span>
      <div className="p-4 gap-4 flex flex-col">
        <h1 className="text-2xl">Titulo do projeto</h1>
        <span className="text-base">descricao do projeto</span>
        <div className="flex gap-4">
          <button className="border px-4 py-2">Live Demo &lt;~&gt;</button>
          <button className="border px-4 py-2">Code &ge;</button>
        </div>
      </div>
    </div>
  );
}
