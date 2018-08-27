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
  .secondary-color {
    color: floralwhite;
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
  .box-shadow {
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .scroll-y {
    overflow-y: scroll;
  }
`;

export const flex = css`
  .column {
    flex-direction: column;
    margin-right: 1em;
  }
  .column:last-child {
    margin-right: 0;
  }
  .flex-right {
    margin-left: auto;
  }
`;

// Works also with default exports
export default _global;
