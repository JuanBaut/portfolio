import Navbar from "@/components/header/navbar";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";
import Experience from "@/components/experience/experience";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
