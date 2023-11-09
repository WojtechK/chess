export type TextareaProps = {
  /**
   * Specify the error message to be displayed
   */
  error?: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
