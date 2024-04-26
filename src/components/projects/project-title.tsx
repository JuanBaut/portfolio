import { Code, Globe } from "lucide-react";
import NoKbdLink from "../no-kbd-link";
import { Button } from "../ui/button";
import { CardTitle } from "../ui/card";

interface LinkProps {
  name: string;
  website?: string;
  repository: string;
}

export default function ProjectTitle(props: LinkProps) {
  return (
    <div className="flex flex-col gap-2">
      <CardTitle className="flex flex-wrap items-center justify-between gap-2">
        <p>{props.name}</p>
        <div className="flex justify-center gap-2 max-[350px]:pt-1">
          {props.website ? (
            <NoKbdLink href={props.website}>
              <Button size={"xs"} variant={"special_sm"}>
                Website
                <Globe className="ml-2 size-4" />
              </Button>
            </NoKbdLink>
          ) : null}
          <NoKbdLink href={props.repository}>
            <Button size={"xs"} variant={"special_sm"}>
              Code
              <Code className="ml-2 size-4" />
            </Button>
          </NoKbdLink>
        </div>
      </CardTitle>
      <hr />
    </div>
  );
}
