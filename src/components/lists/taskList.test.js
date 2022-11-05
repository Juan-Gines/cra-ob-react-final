import { render } from '@testing-library/react';
import TaskList from './TaskList';

const setup = () => render(<TaskList />);

// 0 - Renderiza el componente
test('0 - Renderiza el componente', () => {
  const view = setup();
  expect(view).toBeDefined();
});
