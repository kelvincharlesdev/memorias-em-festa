import { render, screen } from '@testing-library/react';
import { Price } from './Price';

describe('Component Price', () => {
  it('should render the component price', () => {
    render(<Price fontSize="lg" value={29.9} />);
    const price = screen.getByText('R$ 29,90');
    expect(price).toBeInTheDocument();
    expect(price).toHaveClass('text-4xl md:text-2xl');
  });

  it('should render the component price', () => {
    render(<Price currency="USD" fontSize="sm" locale="en-US" value={29.9} />);
    const price = screen.getByText('$29.90');

    expect(price).toBeInTheDocument();
    expect(price).toHaveClass('text-2xl md:text-base');
  });
});
