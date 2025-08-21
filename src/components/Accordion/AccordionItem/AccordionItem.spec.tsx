// AccordionItem.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';


import { AccordionItem } from './AccordionItem';


describe('AccordionItem', () => {
     const question = 'Pergunta 1';
    const answer = 'Resposta 1';

    it('should render the question', () => {
    render(<AccordionItem question={question} answer={answer} />);
    expect(screen.getByText(question)).toBeInTheDocument();
   
  });

    it('does not show the answer initially', () => {
        render(<AccordionItem question={question} answer={answer} />);
        expect(screen.queryByText(answer)).not.toBeInTheDocument();
    });
    it('shows the answer when the question is clicked', () => {
        render(<AccordionItem question={question} answer={answer} />);
        fireEvent.click(screen.getByText(question));
        expect(screen.getByText(answer)).toBeInTheDocument();
    });
     
  
});
