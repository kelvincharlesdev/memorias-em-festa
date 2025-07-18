import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Compoent Title', () => {
  it('should render component with default props', () => {
    render(<Title>Exemplo de Título H1</Title>);

    const titleH1 = document.querySelector('h1');

    expect(titleH1).toBeInTheDocument();
  });

  it('should render component with custom props', () => {
    render(
      <Title as="h2" size="lg" weight="semibold">
        Exemplo de Título H2
      </Title>
    );

    const titleH2 = document.querySelector('h2');
    expect(titleH2).toBeInTheDocument();
  });

  it('should render component with styles applied', () => {
    render(
      <Title as="h3" size="md" weight="normal">
        Exemplo de Título H3
      </Title>
    );

    const titleH3 = document.querySelector('h3');
    expect(titleH3).toBeInTheDocument();
    expect(titleH3).toHaveClass('text-2xl md:text-4xl font-normal');
  });
});
