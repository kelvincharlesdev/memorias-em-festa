import { tv } from 'tailwind-variants';

export const titleVariants = tv({
  variants: {
    size: {
      sm: 'text-xl md:text-2xl',
      md: 'text-2xl md:text-4xl',
      lg: 'text-3xl md:text-5xl',
      xl: 'text-4xl md:text-6xl',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
  defaultVariants: {
    size: 'xl',
    weight: 'bold',
  },
});
