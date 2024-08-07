interface Props {
  className?: string;
}

export default function NeovimIcon({ className }: Props) {
  return (
    <svg
      className={className}
      height="60"
      width="60"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m2.902 4.998 3.864 5.754v12.151l-4.207-4.198v-13.361zm.068-.711-.863.871v13.734l5.112 5.101v-13.38zm18.888.92-5.182-5.207v13.331l4.335 6.519.882-.957zm-14.643-5.206 13.29 20.28-3.719 3.719-13.297-20.235z" />
    </svg>
  );
}
