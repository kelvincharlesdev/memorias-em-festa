import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'w-full';
export type ButtonFontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
export type ButtonColor = 'primary' | 'secondary' | 'gost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fontSize?: ButtonFontSize;
  size?: ButtonSize;
  color?: ButtonColor;
}
