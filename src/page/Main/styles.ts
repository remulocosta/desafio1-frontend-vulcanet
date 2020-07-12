import styled, { keyframes, css } from 'styled-components';

interface IButtonProps {
  selected: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 1150px;
  height: 823px;
  transform: translateY(10%);
  margin: 0px auto;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingLooping = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  img {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const ContentPeriod = styled.div`
  button {
    display: flex;
    margin-top: 23px;
    width: fit-content;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
    background: var(--buttonface);
    border-style: none;
    border-radius: 100px;

    div {
      padding: 7px 25px;
      border-radius: 15px;
      font-size: 15px;
      font-weight: bold;
      line-height: 20px;
    }

    .selected {
      color: rgb(255, 255, 255);
      background: rgb(0, 166, 206);
    }

    .not-selected {
      color: rgb(34, 34, 34);
      background: none;
    }
  }
`;

export const ContentPlans = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Plan = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 40px;
  display: block;

  & + div {
    border-left: 1px solid rgb(221, 221, 221);
  }
`;

export const HeaderPlan = styled.div`
  div {
    display: flex;
    align-items: center;

    p {
      font-weight: bold;
      font-size: 30px;
      color: var(--blue);
      margin-left: 20px;
    }
  }

  span {
    display: block;
    font-size: 15px;
    margin: 12px 0 0 0;
    color: var(--gray);
  }
`;

export const PlanPrice = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: var(--blue);
  margin-top: 24px;
`;

export const ButtonSelectPlan = styled.button<IButtonProps>`
  color: var(--text-button);
  background-color: #efefef;
  width: 100%;
  height: 38px;
  font-weight: bold;
  font-size: 22px;
  margin-top: 8px;
  border-radius: 100px;
  border-style: none;
  transition: all 0.2s ease 0s;

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--green);
      color: var(--white);
      cursor: not-allowed;
    `}
`;

export const ContentFeatures = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: block;

  li {
    display: flex;
    justify-content: baseline;
    align-items: center;
    margin: 8px 0;

    p {
      font-size: 15px;
      display: block;
      margin-left: 5px;
      color: #000;
    }
  }
`;

export const ContentAttendant = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 0 0 4px 40px;

  p {
    font-size: 32px;
  }

  span {
    font-size: 15px;
    text-align: center;
    color: var(--blue);
  }
`;

export const ContentAttendantButtons = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    border-style: none;

    svg {
      color: var(--blue);
      margin: 0 0 3px 0;
    }
  }

  > p {
    color: var(--blue);
    font-size: 32px;
    /* line-height: 20px; */
    margin: 16px 5px;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  border-radius: 0 0 15px 15px;
  height: 108px;
  background: var(--blue);
  /* margin-top: 10px; */
  align-self: flex-end;

  p {
    font-family: Lato;
    font-weight: bold;
    font-size: 32px;
    /* line-height: 24px; */
    color: var(--white);
  }

  span {
    font-size: 18px;
    color: var(--white);
  }

  button {
    color: var(--white);
    height: 46px;
    background: var(--green);
    border-radius: 100px;
    padding: 0px 64px;
    border-style: none;
    transition: all 0.2s ease 0s;
    font-size: 22px;
  }
`;
