import { AboutMe } from "./_components/about-me/about-me";

import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { Contacts } from "./_components/contacts/contacts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}
