import type { FieldProps } from './field.interface';

export const Field = ({ type, placeholder }: FieldProps) => {
  return (
    <input
      className="flex w-full flex-1 gap-3 bg-transparent p-4 text-white text-xl placeholder-white/60 focus:outline-none"
      placeholder={placeholder}
      type={type}
    />
  );
};
