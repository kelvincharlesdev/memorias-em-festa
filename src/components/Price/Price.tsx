import { formatCurrency } from '@/utils/formatCurrency';
import type * as I from './Price.interface';
import { priceVariants } from './PriceVariants';

export const Price = ({
  value,
  locale = 'pt-BR',
  currency = 'BRL',
  fontSize = 'lg',
}: I.PriceProps) => {
  const formattedPrice = formatCurrency({ value, locale, currency });

  return <span className={priceVariants({ fontSize })}>{formattedPrice}</span>;
};
