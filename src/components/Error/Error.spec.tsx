import { render, screen } from '@testing-library/react';
import Error from '.';
jest.mock('../../hooks/useUser', () => {
  return {
    useUser() {
      return {
        error: 'Mensagem de Erro',
      };
    },
  };
});
describe('Error Component', () => {
  it('Is message error expect', () => {
    render(<Error />);
    const text = screen.getByText('Mensagem de Erro');

    expect(text).toBeInTheDocument();
  });
});
