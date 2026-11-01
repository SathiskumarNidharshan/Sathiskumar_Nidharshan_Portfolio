import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio name and primary sections', () => {
  render(<App />);
  expect(screen.getAllByText(/Sathiskumar/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument();
});
