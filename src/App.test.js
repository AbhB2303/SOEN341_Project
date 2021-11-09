import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App.js', () => {
  render(<App />);
  const linkElement = screen.getByText('Post a New Question!');
  expect(linkElement).toBeInTheDocument();
});