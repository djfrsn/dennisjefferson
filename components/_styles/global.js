import css from "styled-jsx/css";

/**
|--------------------------------------------------
| Global Styles
|--------------------------------------------------
*/

export default css`
  * {
    font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono",
      "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace,
      serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
  main {
    margin: 1em 8%;
    padding: 1em;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
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
