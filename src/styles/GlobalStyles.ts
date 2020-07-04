import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --primary: #F4F7FC;
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
    background: var(--white);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  body, input, button, p, span {
    font-family: Lato, sans-serif;
    font-size: 16px;
  }

  div {
    display: block;
  }

  button {
    cursor: pointer;
  }

`;
