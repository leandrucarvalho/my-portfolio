"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenuCustom } from "./menu";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Verifica o tamanho da tela na montagem
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-background text-white p-4 flex justify-between items-center md:fixed md:w-full md:z-50">
      <div className="text-xl font-bold flex items-center space-x-4">
        <Image src={"/logo.svg"} alt={"logo"} width={40} height={40} />
        <Link href="/" className="hover:text-gray-400 transition-colors">
          Leandro Carvalho
        </Link>
      </div>
      {isMobile ? (
        <DropdownMenuCustom />
      ) : (
        <nav className="space-x-4 text-textGray flex items-baseline">
          <Link href="/" className="hover:text-white transition-colors">
            <span className="text-primary">#</span>home
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            <span className="text-primary">#</span>works
          </Link>
          <Link href="#about-me" className="hover:text-white transition-colors">
            <span className="text-primary">#</span>about-me
          </Link>
          <Link href="#contacts" className="hover:text-white transition-colors">
            <span className="text-primary">#</span>contacts
          </Link>
          <Select>
            <SelectTrigger className="w-[90px]">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">EN</SelectItem>
              <SelectItem value="dark">PT-BR</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      )}
    </header>
  );
}
