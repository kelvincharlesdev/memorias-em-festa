"use client";

import { Title } from "../Title";
import { AccordionItem } from "./AccordionItem";
import faq from "./faq.json";

export function Accordion() {
  return (
    <div className="flex flex-col gap-2 p-4">
    
      <Title as="h2" size="lg" weight="bold" className="text-white">
        Perguntas Frequentes
      </Title>

      {faq.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
