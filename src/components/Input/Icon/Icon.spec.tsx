import { render } from '@testing-library/react';
import { CiCalendarDate } from 'react-icons/ci';
import { Icon } from './Icon';

describe('Component Icon', () => {
  it('should render the component icon', () => {
    render(<Icon Icon={CiCalendarDate} />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
