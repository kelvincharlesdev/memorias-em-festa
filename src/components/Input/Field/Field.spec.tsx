import { render } from '@testing-library/react';
import { Field } from './Field';

describe('Component Field', () => {
  it('should render the input field with correct type and placeholder', () => {
    const { getByPlaceholderText } = render(
      <Field placeholder="Nome do Evento" type="text" />
    );
    const inputElement = getByPlaceholderText('Nome do Evento');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('should apply the correct styles to the input field', () => {
    const { getByPlaceholderText } = render(
      <Field placeholder="Styled input" type="text" />
    );
    const inputElement = getByPlaceholderText('Styled input');
    expect(inputElement).toHaveClass(
      'flex w-full flex-1 gap-3 bg-transparent p-4 text-white text-xl placeholder-white/60 focus:outline-none'
    );
  });
});
