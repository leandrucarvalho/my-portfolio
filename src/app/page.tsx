import { AboutMe } from "./_components/about-me/about-me";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { Contacts } from "./_components/contacts/contacts";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}
