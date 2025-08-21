'use client';

import { Title } from '../Title';
import { AccordionItem } from './AccordionItem';
import faq from './faq.json' with { type: 'json' };

export function Accordion() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Title as="h2" className="text-white" size="lg" weight="bold">
        Perguntas Frequentes
      </Title>

      {faq.map((item) => (
        <AccordionItem
          answer={item.answer}
          key={item.id}
          question={item.question}
        />
      ))}
    </div>
  );
}
