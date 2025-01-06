import { CodeXml, Contact2Icon } from "lucide-react";
import ContactButton from "./contact/contact-button";
import ImgContainer from "./img-container";
import { HeaderMotion } from "./motion/header-motion";
import LayoutMotion from "./motion/layout-motion";

export default async function Hero() {
  return (
    <LayoutMotion className="w-full py-20 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 justify-items-center md:px-6 lg:grid-cols-2 lg:gap-4">
        <ImgContainer
          aspectRatio="aspect-video lg:aspect-square lg:size-[400px]"
          priority
          loading="eager"
          src="portfolio/me6"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            <HeaderMotion />
            <div>
              <h2 className="text-xl font-medium">
                Full-Stack Developer · C1 English · A2 German · Native Spanish
              </h2>
              <p className="text-muted md:text-xl gap-2">
                Born and based in Colombia. I believe in designing things with
                passion to solve problems with usability and aesthetics in mind.
              </p>
            </div>
          </div>
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
      </div>
    </LayoutMotion>
  );
}
