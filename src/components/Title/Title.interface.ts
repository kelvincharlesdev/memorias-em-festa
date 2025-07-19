import type { ReactNode } from 'react';

export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4';
export type TitleSize = 'sm' | 'md' | 'lg' | 'xl';
export type TitleWeight = 'bold' | 'semibold' | 'medium' | 'normal';

export interface TitleProps {
  as?: TitleElement;
  children: ReactNode;
  className?: string;
  size?: TitleSize;
  weight?: TitleWeight;
}
