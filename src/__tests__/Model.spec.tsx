import { render, screen } from '@testing-library/react';

describe('Model test', () => {
  it('renders Model Test', () => {
    render(<div>Model Test!</div>);
    expect(screen.getByText('Model Test!')).toBeInTheDocument();
  });
});
