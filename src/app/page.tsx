import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
