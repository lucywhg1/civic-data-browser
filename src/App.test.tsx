import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

it('renders welcome with file upload', () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Browse Election Data" })).toBeInTheDocument();
  expect(screen.getByLabelText(/Upload/)).toBeInTheDocument();
});
