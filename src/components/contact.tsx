import { Badge } from "./ui/badge";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-muted/10 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant={"header"}>Contact</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Talk to me
            </h2>
            <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out if you have any questions or would like to
              discuss a project.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <p className="text-xs text-muted">
              I'll get back to you as soon as possible. place some buttons here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
