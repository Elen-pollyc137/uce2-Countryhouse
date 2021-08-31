import styled from 'styled-components';
type ITooltip = { available: boolean };

export const Container = styled.div`
  position: absolute;
  height: 0rem;
  width: 0rem;
  z-index: 99999;

  border-left: 27px solid transparent;
  border-right: 27px solid transparent;
  border-top: 27px solid
    ${(props: ITooltip) => (props.available ? '#06d6a0' : '#f56565')};
  cursor: pointer;
  img {
    position: relative;
    height: 6rem;
    width: 6rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -7.3rem;
    left: -3rem;
    cursor: pointer;
  }
  &::before {
    content: '';
    height: 6.5rem;
    width: 6.5rem;
    background: ${(props: ITooltip) =>
      props.available ? '#06d6a0' : '#f56565'};
    border-radius: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: -7.5rem;
    left: -3.25rem;
    cursor: pointer;
  }
  label {
    position: relative;
    margin-top: -10rem;
    height: 8rem;
    width: 8rem;
    background: ${(props: ITooltip) =>
      props.available ? '#06d6a0' : '#f56565'};
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
