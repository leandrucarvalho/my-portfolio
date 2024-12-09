import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Header() {
  return (
    <header className="bg-background text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center space-x-4">
        <Image src={"/logo.svg"} alt={"logo"} width={40} height={40} />
        <Link href="/" className="hover:text-gray-400 transition-colors">
          Leandro Carvalho
        </Link>
      </div>
      <nav className="space-x-4 text-textGray flex items-baseline">
        <Link href="/" className="hover:text-white transition-colors">
          <span className="text-primary">#</span>home
        </Link>
        <Link href="#works" className="hover:text-white transition-colors">
          <span className="text-primary">#</span>works
        </Link>
        <Link href="#about-me" className="hover:text-white transition-colors">
          <span className="text-primary">#</span>about-me
        </Link>
        <Link href="#contacts" className="hover:text-white transition-colors">
          <span className="text-primary">#</span>contacts
        </Link>
        <Select>
          <SelectTrigger className="w-[70px]">
            <SelectValue placeholder="Idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">EN</SelectItem>
            <SelectItem value="dark">PT-BR</SelectItem>
          </SelectContent>
        </Select>
      </nav>
    </header>
  );
}
