import Balancer from "react-wrap-balancer";
import type { ReactNode } from "react";

export function CaptionComponent({ children }: { children: ReactNode }) {
  return (
    <span className="my-3 block w-full text-center font-mono text-xs leading-normal text-gray-500">
      <Balancer>
        <span className="[&>a]:post-link">{children}</span>
      </Balancer>
    </span>
  );
}
