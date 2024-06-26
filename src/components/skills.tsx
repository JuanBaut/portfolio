export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technologies I Work With
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have experience with a wide range of technologies and
              frameworks.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Front-end
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">React</h3>
                  <p className="text-muted-foreground">
                    A JavaScript library for building user interfaces.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Next.js</h3>
                  <p className="text-muted-foreground">
                    A React framework for building server-rendered applications.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Tailwind CSS</h3>
                  <p className="text-muted-foreground">
                    A utility-first CSS framework for rapidly building custom
                    designs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Back-end
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Node.js</h3>
                  <p className="text-muted-foreground">
                    A JavaScript runtime built on Chrome's V8 JavaScript engine.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Express.js</h3>
                  <p className="text-muted-foreground">
                    A minimal and flexible Node.js web application framework.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">MongoDB</h3>
                  <p className="text-muted-foreground">
                    A NoSQL database for storing and retrieving data.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Other
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Git</h3>
                  <p className="text-muted-foreground">
                    A distributed version control system for tracking changes in
                    source code.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Docker</h3>
                  <p className="text-muted-foreground">
                    A platform for building, deploying, and running applications
                    in containers.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">AWS</h3>
                  <p className="text-muted-foreground">
                    A cloud computing platform that offers a wide range of
                    services.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
