import { Badge } from "@/components/ui/badge";
import LayoutMotion from "../motion/layout-motion";

export default function Experience() {
  return (
    <LayoutMotion
      id="experience"
      className="w-full bg-muted/10 py-12 md:py-24 lg:py-32"
    >
      <div className="w-full max-w-[700px] mx-auto">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">My experience</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Positions</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Software Engineer</div>
                      <div className="text-sm text-muted-foreground">
                        Jan 2021 - Present
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      Acme Inc, San Francisco
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Frontend Developer</div>
                      <div className="text-sm text-muted-foreground">
                        Jun 2018 - Dec 2020
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      Globex Corporation, New York
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">CSS</Badge>
                      <Badge variant="secondary">Webpack</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Freelance Projects</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">E-commerce Website</div>
                      <div className="text-sm text-muted-foreground">
                        Mar 2022 - Jun 2022
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      Acme Retail, San Francisco
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                      <Badge variant="secondary">Prisma</Badge>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Mobile App Development</div>
                      <div className="text-sm text-muted-foreground">
                        Sep 2021 - Dec 2021
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      Globex Inc, New York
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                      <Badge variant="secondary">Expo</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">
                        Bachelor of Science in Computer Science
                      </div>
                      <div className="text-sm text-muted-foreground">
                        2014 - 2018
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      University of California, Berkeley
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMotion>
  );
}
