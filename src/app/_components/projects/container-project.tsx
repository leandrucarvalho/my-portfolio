import Image from "next/image";

type Props = {
  img: string;
  tecnologies: string;
  title: string;
  description: string;
  onClick?: () => void;
  onClickCode?: () => void;
  className?: string;
};

export function ContainerProject(props: Props) {
  return (
    <div className="border flex flex-col h-fit w-80">
      <div className="relative h-96 w-full">
        <Image
          src={props.img}
          alt="project"
          objectFit="cover"
          layout="fill"
          className={props.className}
        />
      </div>
      <span className="border-b p-2 text-sm">{props.tecnologies}</span>
      <div className="p-4 gap-y-4 flex flex-col flex-grow">
        <h1 className="text-lg">{props.title}</h1>
        <span className="text-sm text-wrap">{props.description}</span>
        <div className="flex text-sm gap-x-2 mt-auto">
          <button onClick={props.onClick} className="border px-4 py-2">
            Live Demo &lt;~&gt;
          </button>
          <button onClick={props.onClickCode} className="border px-4 py-2">
            Code &ge;
          </button>
        </div>
      </div>
    </div>
  );
}
