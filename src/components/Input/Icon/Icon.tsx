import type { IconProps } from "./icon.interface";

export const Icon = ({ Icon: IconComponent }: IconProps) => {
  return <IconComponent className="text-3xl text-pink-600" />;
};
