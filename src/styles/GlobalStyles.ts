import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --buttonface: #F4F7FC;
    --secondary: #F5F5F5;
    --tertiary: #DDDDDD;

    --black: rgba(0,0,0, 0.8);
    --blue: #00A6CE;
    --white: #FFFFFF;
    --green: #43B998;
    --gray: #999999;
    --text-black: #222222;
    --text-button: #4A507B;

  }

  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    outline: 0px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    min-height: 100vh;
    background: var(--white);
    color: var(--black);
  }

  body, input, button, p, span {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    /* font-size: 1.5rem; */
    /* -webkit-font-smoothing: antialiased; */
  }

  button {
    cursor: pointer;
  }
`;
