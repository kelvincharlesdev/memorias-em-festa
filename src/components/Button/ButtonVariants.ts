import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'flex cursor-pointer items-center justify-center rounded-lg py-2 text-purple-100 shadow-lg transition-all duration-400 h-10',
  variants: {
    size: {
      sm: 'w-24',
      md: ' w-28',
      lg: 'w-60',
      'w-full': 'w-full',
    },
    fontSize: {
      'text-sm': 'text-sm md:text-xs',
      'text-base': 'text-base md:text-sm',
      'text-lg': 'text-lg md:text-base',
      'text-xl': 'text-xl md:text-lg',
    },
    color: {
      primary:
        'bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-l hover:from-purple-700 hover:to-purple-950',

      secondary: ' bg-secondary hover:shadow-pink-800',
      gost: 'border-1 border-purple-300 bg-transparent hover:border-purple-500',
    },
  },
  defaultVariants: {
    size: 'md',
    fontSize: 'text-base',
    color: 'primary',
  },
});
