import styled from 'styled-components';
type ITooltip = { text: string };
export const Tip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 0;
  position: relative;
  margin: 0 auto;
  padding: 0;
  box-sizing: none;
  pointer-events: all;

  position: relative;
  &:hover::before {
    pointer-events: none;

    content: '${(props: ITooltip) => props.text}';
    position: absolute;
    top: -4.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    right: 0;
    width: 30%;

    white-space: nowrap;
    padding: 0 2rem 0 2rem;
    height: 1rem;
    text-align: center;
    color: var(--white);
    background: var(--gray-900);
    border-radius: 0.25rem;
    margin: 0 auto;
  }
`;
