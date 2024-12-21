type ContainerSkillsProps = {
  title: string;
  text: string;
};

export function ContainerSkills({ title, text }: ContainerSkillsProps) {
  return (
    <div className="items-left border flex flex-col w-auto">
      <h1 className="text-base font-bold text-white border-b-[1px] p-1">
        {title}
      </h1>
      <p className="text-base text-gray-300 p-1">{text}</p>
    </div>
  );
}
