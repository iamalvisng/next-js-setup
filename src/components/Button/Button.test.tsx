/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render button properly', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me').closest('a')).toBeInTheDocument();
  });

  it('should call the onClick method when user clicks on the button', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={mockOnClick} />);
    const anchorElement = getByText('Click me').closest('a') as HTMLAnchorElement;

    fireEvent.click(anchorElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
