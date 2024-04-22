import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Code, Globe } from "lucide-react";

export default function AppGuard() {
  return (
    <>
      <Card className="mb-4 p-2">
        <div className="flex flex-col gap-2">
          <CardTitle className="flex items-center gap-2">
            <p className="mr-auto">AppGuard</p>
            <a
              href="https://app-guard-front.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Button size={"xs"} variant={"special_sm"}>
                Website
                <Globe className="ml-2 size-4" />
              </Button>
            </a>
            <a
              href="https://github.com/AppGuardD"
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Button size={"xs"} variant={"special_sm"}>
                Code
                <Code className="ml-2 size-4" />
              </Button>
            </a>
          </CardTitle>
          <hr />
        </div>

        <div className="pt-2 text-sm text-muted">
          Website / E-commerce built around selling event tickets in argentinian
          beaches, like sports and cultural events.
          <ul className="list-disc px-8 pt-2">
            <li>It was my first deep dive in Git Flow</li>
            <li>Developing a project with multiple people</li>
            <li>Front-end leading role</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-2 px-[10%] pt-2">
          <Badge>TS</Badge>
          <Badge>React</Badge>
          <Badge>Redux</Badge>
          <Badge>Jotai</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Shadcn/ui</Badge>

          <Badge variant={"secondary"}>PostgreSQL</Badge>
          <Badge variant={"secondary"}>Express.js</Badge>
          <Badge variant={"secondary"}>Sequalize</Badge>
        </div>
      </Card>
    </>
  );
}
