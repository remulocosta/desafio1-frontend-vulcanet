import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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
    font-size: 1.5rem;
    /* -webkit-font-smoothing: antialiased; */
  }

  button {
    cursor: pointer;
  }

  .toastify {
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    top: -150px;
    right: 15px;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
  }

`;
