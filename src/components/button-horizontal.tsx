import { Button } from "./ui/button"

interface ButtonProps {
  text: string
  href: string
  icon: JSX.Element
}

export default function ButtonHorizontal(props: ButtonProps) {
  return (
    <a
      href={`${props.href}`}
      target="_blank"
      rel="noreferrer"
    >
      <Button
        variant={"ghost_outline"}
        className="flex rounded-full px-4 text-md gap-2"
      >
        <p className="gradient element-to-rotate bg-gradient-to-tr from-foreground to-accent bg-clip-text text-transparent inline-block">
          {props.text}
        </p>
        {props.icon}
      </Button>
    </a >
  )
}
