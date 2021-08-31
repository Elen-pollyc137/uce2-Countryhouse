import { render, screen } from '@testing-library/react';
import Header from '.';

jest
  .mock('next/router', () => {
    return {
      useRouter() {
        return {
          pathname: '/',
        };
      },
    };
  })
  .mock('../../hooks/useUser', () => {
    return {
      useUser() {
        return {
          login: true,
        };
      },
    };
  });
describe('Header Component', () => {
  it('Is login verify', () => {
    render(<Header />);
    const text = screen.getByText('Olá');

    expect(text).toBeInTheDocument();
  });
  it('Is exists link?', () => {
    render(<Header />);
    const text = screen.getAllByRole('link');

    expect(text[0]).toBeInTheDocument();
  });
  it('Is exists  links whit components', () => {
    render(<Header />);
    const text = screen.getAllByRole('link');
    expect(text.length).toEqual(3);
  });
});
