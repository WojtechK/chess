import { TextareaProps } from "./Textarea.types";
import "./Textarea.scss";
import clsx from "clsx";

export const Textarea: React.FC<TextareaProps> = ({ error, ...props }) => {
  return (
    <div className="textarea-container">
      <textarea
        className={clsx("textarea", error && "textarea--error")}
        {...props}
      />
      {error && <span className="textarea__error">{error}</span>}
    </div>
  );
};
