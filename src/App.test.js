import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows message on button click', () => {
  render(<App />);

  // Check if the button is rendered
  const buttonElement = screen.getByText(/show message/i);
  expect(buttonElement).toBeInTheDocument();

  // Check that the message is not initially visible
  // queryByText returns null if not found, getByText throws an error
  let messageElement = screen.queryByText(/hello from express backend!/i);
  expect(messageElement).not.toBeInTheDocument();

  // Simulate button click
  fireEvent.click(buttonElement);

  // Check that the message is visible after click
  messageElement = screen.getByText(/hello from express backend!/i);
  expect(messageElement).toBeInTheDocument();
});
