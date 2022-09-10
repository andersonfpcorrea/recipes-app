import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

it('renders "Forkify" on Hero page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText('Forkify')).toBeInTheDocument();
});
