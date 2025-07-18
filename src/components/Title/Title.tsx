import { cn } from '@/lib/utils';
import type * as I from './Title.interface';
import { titleVariants } from './TitleVariants';

export const Title = ({
  children,
  as = 'h1',
  className,
  size,
  weight,
}: I.TitleProps) => {
  const HandledElement = as;

  return (
    <HandledElement className={cn(titleVariants({ size, weight }), className)}>
      {children}
    </HandledElement>
  );
};
