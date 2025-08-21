'use client';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import type { AccordionItemProps } from './AccordionItem.interface';

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-[680px] flex-col gap-2 border-[#3F204C] border-b p-1 text-white">
      <button
        className="flex w-full items-center justify-between text-xl"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {question}
        {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
      </button>
      {isOpen && <p className="text-base">{answer}</p>}
    </div>
  );
}
