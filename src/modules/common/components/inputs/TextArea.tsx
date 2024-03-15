import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ ...props }, ref) => (
    <textarea
      ref={ref}
      className={
        "rounded-[5px] mt-6 h-[200px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey min-w-[310px] px-5" +
        props.className
      }
      {...props}
    />
  ),
);
