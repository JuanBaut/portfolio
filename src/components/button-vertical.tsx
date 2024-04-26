import { Button } from "./ui/button"

interface ButtonProps {
  text: string
  href: string
  icon: JSX.Element
}

export default function ButtonVertical(props: ButtonProps) {
  return (
    <a
      href={`${props.href}`}
      target="_blank"
      rel="noreferrer"
    >
      <Button
        variant={"ghost_outline"}
        className="flex w-52 mx-auto justify-between px-4 text-lg"
      >
        <p className="gradient element-to-rotate bg-gradient-to-tr from-foreground to-accent bg-clip-text text-transparent inline-block" >
          {props.text}
        </p>
        {props.icon}
      </Button>
    </a >
  )
}
