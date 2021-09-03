import { render, screen } from '@testing-library/react';
import ToolTip from '.';
jest.mock('../../hooks/useUser', () => {
  return {
    useUser() {
      return {
        message: 'Mensagem de Aviso',
      };
    },
  };
});
describe('ToolTip Component', () => {
  it('Is tooltip component accept in text children ', () => {
    render(
      <ToolTip text="red">
        <h1>ok</h1>
      </ToolTip>
    );
    const text = screen.getByText('ok');

    expect(text).toBeInTheDocument();
  });
});
