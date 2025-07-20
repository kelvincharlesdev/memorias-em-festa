import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'flex items-center justify-center rounded-[8px] text-purple-100 cursor-pointer p-2 shadow-lg  transition-opacity duration-400 hover:opacity-80 font-texts',
  variants: {
    size: {
      sm: 'text-xl ',
      md: 'text-sm ',
      lg: 'text-base ',
      xl: 'text-xl',
    },
    color: {
      primary: 'bg-dark-bg  border-2 border-secondary ',
      secondary: 'bg-secondary',
      gost: 'bg-transparent  ',
    },
  },
  defaultVariants: {
    size: 'xl',
    color: 'primary',
  },
});
