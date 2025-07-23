import { cn } from "@/lib/utils";
import type * as I from "./Button.interface";
import { buttonVariants } from "./ButtonVariants";

export const Button = ({
  children,
  size,
  fontSize,
  color,
  ...rest
}: I.ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ fontSize, color, size }))} {...rest}>
      {children}
    </button>
  );
};
