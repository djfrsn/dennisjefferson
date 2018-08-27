import css from "styled-jsx/css";
import _global from "./global";

/**
|--------------------------------------------------
| Index
|--------------------------------------------------
*/

export const colors = css`
  .primary-bg-color {
    background-color: floralwhite;
  }
  .primary-color {
    color: #4b4f6f;
  }
  .secondary-bg-color {
    background-color: royalblue;
  }
`;

export const utils = css`
  .hidden {
    display: none;
  }
  span.rotate-vertical {
    transform: rotate(180deg);
  }
`;

export const flex = css`
  .flex-right {
    margin-left: auto;
  }
`;

// Works also with default exports
export default _global;
