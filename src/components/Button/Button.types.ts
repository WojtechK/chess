export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
