import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <hr />
      <div className="border-primary py-3">
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
            <Badge variant={"outline"}>TS</Badge>
            <Badge variant={"outline"}>Next.js</Badge>
            <Badge variant={"outline"}>Tailwind</Badge>
            <Badge variant={"outline"}>Shadcn/ui</Badge>
          </div>
        </div>
        <p className="pt-2 text-sm text-muted">
          The website you are currently looking at.
        </p>
      </div>
    </>
  );
}
