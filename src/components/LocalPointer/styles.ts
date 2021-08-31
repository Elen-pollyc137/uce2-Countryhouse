import styled from 'styled-components';
type ITooltip = { available: boolean };
export const Container = styled.div`
  position: absolute;
  height: 0rem;
  width: 0rem;

  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid transparent;
  cursor: pointer;
  div {
    position: relative;
    height: 3rem;
    width: 3rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -2.9rem;
    left: -2.7rem;
    cursor: pointer;
    border: 2px solid red;
    font-size: 3rem;
    color: red;
  }
  &::before {
    content: '';
    height: 3.5rem;
    width: 3.5rem;
    background: transparent;
    border-radius: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: -5.2rem;
    left: -2.8rem;
    cursor: pointer;
  }
  label {
    position: relative;
    margin-top: -10rem;
    height: 8rem;
    width: 8rem;
    background: #f56565;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 3rem;
    color: aliceblue;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    opacity: 1;
  }
`;
