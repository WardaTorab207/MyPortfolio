import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col items-center px-3 sm:px-4 md:px-5">
      <Intro />
      <SectionDivider />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
