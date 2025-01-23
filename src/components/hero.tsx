import { CodeXml, Contact2Icon } from "lucide-react";
import ContactButton from "./contact/contact-button";
import { HeroImage } from "./img-container";
import { HeaderMotion } from "./motion/header-motion";
import LayoutMotion from "./motion/layout-motion";

export default async function Hero() {
  return (
    <LayoutMotion className="w-full py-20 md:py-24 lg:py-32">
      <HeroSection />
    </LayoutMotion>
  );
}

function HeroSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto place-items-center px-4 md:px-8">
      <HeroText />

      <div className="w-full row-start-1 lg:col-start-2">
        <HeroImage loading="eager" src="portfolio/movies" priority />
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className="space-y-4">
      <HeaderMotion />
      <h2 className="text-xl font-medium">
        Software Developer and Open Source Enthusiast
      </h2>
      <p className="text-muted md:text-xl gap-2">
        Born and based in Colombia. I believe in designing things with passion
        to solve problems with usability and aesthetics in mind. I speak{" "}
        <b>C1 English</b> and <b>Native Spanish</b>
      </p>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <ContactButton
          target="_self"
          href="#contact"
          name="Contact Me"
          className="w-full px-10 min-[400px]:px-4"
          icon={<Contact2Icon />}
        />
        <ContactButton
          target="_self"
          variant="outline"
          href="#projects"
          name="View Projects"
          className="w-full px-10 min-[400px]:px-4"
          icon={<CodeXml />}
        />
      </div>
    </div>
  );
}
