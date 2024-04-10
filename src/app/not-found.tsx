import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto w-[90%] px-2 sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
      <div className="mx-auto my-[10%] flex w-[50%] flex-col text-center">
        <p>
          This place does not exist. <i>404</i>
        </p>
        <Button variant={"ghost"} className="mx-auto mt-4 h-7 p-0 px-2">
          <p className="pr-2">go back</p>
          <Undo2 className="m-0 size-5 p-0" />
        </Button>
      </div>
    </div>
  );
}
