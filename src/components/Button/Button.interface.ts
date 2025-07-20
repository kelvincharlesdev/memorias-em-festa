import type {ButtonHTMLAttributes, ReactNode} from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'secondary' | 'gost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: ButtonSize;
    color?: ButtonColor;
    
}