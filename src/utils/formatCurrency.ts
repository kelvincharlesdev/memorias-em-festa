interface FormatCurrencyProps {
  value: number;
  locale?: string;
  currency?: string;
}

export function formatCurrency({
  value,
  locale = 'pt-BR',
  currency = 'BRL',
}: FormatCurrencyProps) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
