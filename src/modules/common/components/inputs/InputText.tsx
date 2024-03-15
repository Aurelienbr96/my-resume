import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => (
    <input
      ref={ref}
      className={
        "rounded-[5px] mt-6 h-[36px] border-2 py-2 border-color-medium-light hover:bg-color-light-grey w-[310px] px-5"
      }
      {...props}
    />
  ),
);
