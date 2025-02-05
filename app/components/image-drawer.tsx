"use client";

import Image from "next/image";
import { Drawer } from "vaul";
import { Button } from "./ui/button";
import { ExpandIcon } from "lucide-react";

export function ImageDrawer({
  image,
  title,
}: { image: string; title: string }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button
          className="hidden bottom-0 right-0 absolute m-2 md:flex [&_svg]:size-4"
          variant={"outline"}
          size={"icon"}
        >
          <ExpandIcon strokeWidth={1} />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/90" />

        <Drawer.Content className="fixed right-0 bottom-0 left-0 h-[95%] w-[70%] md:w-[60%] lg:w-[50%] mx-auto">
          <div className="p-4 space-y-2 rounded-xl border bg-background">
            <div
              aria-hidden="true"
              className="flex-shrink-0 mx-auto mb-2 w-12 h-1.5 rounded-full bg-muted-foreground/40"
            />

            <Drawer.Title>{title}</Drawer.Title>
            <Drawer.Description className="sr-only">
              Zoomed in project picture
            </Drawer.Description>

            <div className="overflow-hidden relative h-full aspect-[16/10]">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Screenshot of ${title}`}
                className="object-cover rounded-xl"
                src={image}
                fill
              />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
