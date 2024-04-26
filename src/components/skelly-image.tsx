import { Skeleton } from "./ui/skeleton";

interface SkellyProps {
  size: Number
}

export default function ImageSkeleton(props: SkellyProps) {
  return (
    <>
      <Skeleton className={`mx-1 aspect-square size-[${props.size}px] rounded bg-accent max-[400px]:m-0 min-[400px]:size-[${props.size}px]`} />
    </>
  )
}
