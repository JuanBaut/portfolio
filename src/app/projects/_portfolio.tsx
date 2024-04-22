import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function Portfolio() {
  return (
    <Card className="mb-4 border-primary p-2">
      <div className="flex flex-col gap-2">
        <CardTitle className="flex items-center gap-2">
          <p className="mr-auto">Portfolio</p>
          <a
            href="https://github.com/JuanBaut/portfolio"
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

      <p className="pt-2 text-sm text-muted">
        The website you are currently looking at.
      </p>

      <div className="flex flex-wrap justify-center gap-2 px-[10%] pt-2">
        <Badge>TS</Badge>
        <Badge>Next.js</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Shadcn/ui</Badge>
        <Badge>Framer motion</Badge>
      </div>
    </Card>
  );
}
