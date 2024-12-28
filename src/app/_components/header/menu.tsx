import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownMenuCustom() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit flex justify-center">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/">home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#projects">works</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#about-me">about-me</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#contacts">contacts</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
