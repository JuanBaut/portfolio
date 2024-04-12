import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <Card className="mb-4 border-primary p-2">
      <div className="flex flex-col gap-2">
        <CardTitle>
          <a
            href="https://github.com/JuanBaut/portfolio"
            target="_blank"
            rel="noreferrer"
            className="flex font-bold "
          >
            Portfolio
            <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
          </a>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          <Badge>TS</Badge>
          <Badge>Next.js</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Shadcn/ui</Badge>
        </div>
      </div>
      <p className="pt-2 text-sm text-muted">
        The website you are currently looking at.
      </p>
    </Card>
  );
}
