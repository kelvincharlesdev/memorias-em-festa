type PriceSize = 'sm' | 'lg';

export interface PriceProps {
  value: number;
  locale?: string;
  currency?: string;
  fontSize: PriceSize;
}
