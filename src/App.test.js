import React from 'react';
import { render } from '@testing-library/react';
import SamuraiApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<SamuraiApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
