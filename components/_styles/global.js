import css from "styled-jsx/css";

/**
|--------------------------------------------------
| Global Styles
|--------------------------------------------------
*/

export default css`
  * {
    font-family: "Lato", sans-serif;
  }
  html,
  body,
  #__next,
  main {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  main {
    margin: 0;
    display: flex;
  }
  a {
    color: #22bad9;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }
  article {
    margin: 0 auto;
    max-width: 650px;
  }
  button {
    align-items: center;
    background-color: #22bad9;
    border: 0;
    color: white;
    display: flex;
    padding: 5px 7px;
  }
  button:active {
    background-color: #1b9db7;
    transition: background-color 0.3s;
  }
  button:focus {
    outline: none;
  }
`;
