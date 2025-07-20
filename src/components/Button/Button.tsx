import { cn } from "@/lib/utils";
import type * as I from "./Button.interface";
import { buttonVariants } from "./ButtonVariants";

export const Button = ({ children, size, color }: I.ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ size, color }))}>{children}</button>
  );
};
