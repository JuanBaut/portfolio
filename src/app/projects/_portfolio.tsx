import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <div className="border-primary pb-4">
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/JuanBaut/portfolio"
            target="_blank"
            rel="noreferrer"
            className="flex font-bold "
          >
            Portfolio
            <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
          </a>
          <div className="flex flex-wrap gap-2">
            <Badge variant={"default"}>TS</Badge>
            <Badge variant={"default"}>Next.js</Badge>
            <Badge variant={"default"}>Tailwind</Badge>
            <Badge variant={"default"}>Shadcn/ui</Badge>
          </div>
        </div>
        <p className="pt-2 text-sm text-muted">
          The website you are currently looking at.
        </p>
      </div>
    </>
  );
}
