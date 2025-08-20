
"use client";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AccordionItemProps } from "./AccordionItem.interface";


export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[680px] flex flex-col gap-2 p-1 border-[#3F204C] border-b text-white">
      <button className="text-xl flex justify-between items-center w-full"
       
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
      </button>
      {isOpen && (
        <p className="text-base" >
          {answer}
        </p>
      )}
    </div>
  );
}
