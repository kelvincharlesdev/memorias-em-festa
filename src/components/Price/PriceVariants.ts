import { tv } from 'tailwind-variants';

export const priceVariants = tv({
  base: 'semi-bold text-pink-500',
  variants: {
    fontSize: {
      sm: 'text-2xl md:text-base',
      lg: 'text-4xl md:text-2xl',
    },
  },
});
