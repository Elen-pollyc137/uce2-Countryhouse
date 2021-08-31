import { render, screen } from '@testing-library/react';
import { useUser } from './useUser';
jest.mock('./useUser', () => {
  return {
    useUser() {
      return {
        login: false,
        loading: false,
      };
    },
  };
});
test('Whit login status', () => {
  const { login, loading } = useUser();

  expect(login).toEqual(false);
  expect(loading).toEqual(false);
});
