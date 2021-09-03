import { render, screen } from '@testing-library/react';
import Message from '.';
jest.mock('../../hooks/useUser', () => {
  return {
    useUser() {
      return {
        message: 'Mensagem de Aviso',
      };
    },
  };
});
describe('Message Component', () => {
  it('Is message error expect', () => {
    render(<Message />);
    const text = screen.getByText('Mensagem de Aviso');

    expect(text).toBeInTheDocument();
  });
});
