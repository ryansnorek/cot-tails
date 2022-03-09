import { render, screen } from '@testing-library/react';
import CotTails from './CotTails';

test('renders learn react link', () => {
  render(<CotTails />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
