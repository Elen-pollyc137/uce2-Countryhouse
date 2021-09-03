import { render, screen } from '@testing-library/react';
import Local from '.';
jest.mock('../../hooks/useUser', () => {
  return {
    useUser() {
      return {
        login: true,
        loading: { local: false },
      };
    },
  };
});

test('local pointer in map select ', () => {
  render(
    <Local
      img={'sthhs'}
      lat={-15.7420889}
      lng={-43.0286046}
      available={true}
      text="Poly"
      onClick={() => {}}
    />
  );
  const text = screen.getByTitle('img');

  expect(text).toBeInTheDocument();
});
