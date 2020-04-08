import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

test('renders heading text', () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText(/Four in a Row/i);
  expect(linkElement).toBeInTheDocument();
});
