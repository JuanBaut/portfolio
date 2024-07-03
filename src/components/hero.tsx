import Link from "next/link";
import ImgContainer from "./img-container";

export default async function Hero() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Juan Andres Bautista
            </h1>
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
            <Link
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <ImgContainer src="portfolio/me6" />
      </div>
    </section>
  );
}
