import Navbar from "@/components/header/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills/skills";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
