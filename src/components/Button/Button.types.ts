export type ButtonProps = {
  /**
   * Specify the variant of the button
   */
  variant?: "primary" | "secondary" | "ghost";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
