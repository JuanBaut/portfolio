import { getI18n } from "@/locales/server";
import Link from "next/link";

export default async function Hero() {
  const t = await getI18n();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Juan Andres Bautista
            </h1>
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
              Full-Stack Developer
            </h2>
            <p className="max-w-[600px] text-muted md:text-xl">
              {t("description")}
              <i> {t("languages")}</i>
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Projects
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <img
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl border object-cover sm:w-full"
        />
      </div>
    </section>
  );
}
