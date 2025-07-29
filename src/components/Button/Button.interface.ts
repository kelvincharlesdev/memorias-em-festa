import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg' | 'w-full';
type ButtonFontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
type ButtonColor = 'primary' | 'secondary' | 'gost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fontSize?: ButtonFontSize;
  size?: ButtonSize;
  color?: ButtonColor;
}
