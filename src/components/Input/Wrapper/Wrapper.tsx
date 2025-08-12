import type { WrapperProps } from "./wrapper.interface";

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex w-full items-center gap-1 border-[#3F204C] border-b px-2">
      {children}
    </div>
  );
};
