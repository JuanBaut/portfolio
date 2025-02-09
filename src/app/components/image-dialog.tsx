"use client";

import { ExpandIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function ImageDialog({
  image,
  title,
}: { image: string; title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hidden bottom-0 left-0 absolute m-4 md:flex [&_svg]:size-4"
          variant={"outline"}
          size={"icon"}
        >
          <ExpandIcon strokeWidth={1} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>

          <DialogDescription className="sr-only">
            Zoomed in project picture
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-hidden relative h-full aspect-[16/10]">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`Screenshot of ${title}`}
            className="object-cover rounded-lg border"
            src={image}
            fill
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
