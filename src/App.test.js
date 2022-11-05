import { render } from '@testing-library/react';
import App from './components/App';

test('renders App', () => {
  const view = render(<App />);
  expect(view.baseElement).toBeTruthy();
});
