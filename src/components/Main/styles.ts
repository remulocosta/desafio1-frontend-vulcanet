import styled from 'styled-components';

export const Container = styled.div`
  width: 1150px;
  height: 823px;
  margin: 60px auto;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentPeriod = styled.div`
  button {
    display: flex;
    margin-top: 23px;
    width: fit-content;
    font-size: 16px;
    line-height: 21px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
    background: var(--buttonface);
    border-style: none;
    border-radius: 100px;

    div {
      width: 120px;
      height: 38px;
      padding: 8px 22px;
      border-radius: 100px;
    }

    .button-mensal {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }

    .button-anual {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
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
  height: 68%;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Plan = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgb(221, 221, 221);
  padding: 0px 40px;
`;

export const HeaderPlan = styled.div`
  div {
    display: flex;
    align-items: center;

    p {
      font-weight: bold;
      font-size: 30px;
      color: rgb(0, 166, 206);
      margin-left: 20px;
    }
  }
`;

export const PlanPrice = styled.div``;

export const ButtonSelectPlan = styled.button`
  color: var(--text-button);
  background-color: var(--buttonface);
  width: 100%;
  height: 38px;
  font-weight: bold;
  font-size: 22px;
  margin-top: 8px;
  border-radius: 100px;
  border-style: none;
  transition: all 0.2s ease 0s;
`;

export const ContentFeatures = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin: 7px;

    p {
      margin-left: 5px;
    }
  }
`;

export const ContentAttendant = styled.div`
  width: 100%;
  bottom: auto;
  display: flex;
  align-items: center;
  padding: 10px 40px;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 38px;
  }

  span {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: var(--blue);
  }
`;

export const ContentAttendantButtons = styled.div`
  margin-left: 50px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  button {
    background: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
  }

  p {
    color: var(--blue);
    font-size: 32px;
    margin: 0px 5px;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  border-radius: 0 0 15px 15px;
  height: 108px;
  background: var(--blue);
  margin-top: 10px;
  align-self: flex-end;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
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
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
  }
`;
