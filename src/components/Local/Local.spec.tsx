import { render, screen } from '@testing-library/react';
import Local from '.';

test('local pointer in map select ', () => {
  render(
    <Local img={'sthhs'} lat={-15.7420889} lng={-43.0286046} text="Poly" />
  );
  const text = screen.getByText('Poly');

  expect(text).toBeInTheDocument();
});
