import type * as I from "./Price.interface";
import { priceVariants } from "./PriceVariants";

export const Price = ({
  value,
  locale = "pt-BR",
  currency = "BRL",
  fontSize = "lg",
}: I.PriceProps) => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return <span className={priceVariants({ fontSize })}>{formattedPrice}</span>;
};
