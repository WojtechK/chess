export type ButtonProps = {
  variant?: "primary" | "secondary";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
