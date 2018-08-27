import Link from "next/link";
import { withRouter } from "next/router";
import styles, { utils, flex } from "./_styles";

const Header = ({ router: { pathname } }) => (
  <header>
    <h1>
      Dennis <br />
      Jefferson
    </h1>
    {/* <h2
      className={`active-page-title flex-right ${
        pathname === "/" ? "is-active" : "hidden"
      }`}
    >
      Home
    </h2> */}
    <div className="triangle-container flex-right">
      <div className="triangle">
        <div className="triangle-text-left">
          <span className="text-left-letter rotate-vertical">e</span>
          <span className="text-left-letter rotate-vertical">m</span>
          <span className="text-left-letter rotate-vertical">o</span>
          <span className="text-left-letter rotate-vertical">h</span>
        </div>
        <span className="triangle-text-top-right">home</span>
        <span className="triangle-text-bottom-right">home</span>
        <div className="empty" />
      </div>
    </div>
    <style jsx>{`
      header {
        margin-bottom: 25px;
        display: flex;
        flex-direction: row;
      }
      h1,
      .active-page-title {
        display: flex;
      }
      .active-page-title {
        font-weight: 600;
      }
      h1 {
        margin: 0;
        padding: 0;
        text-shadow: 0 0.02em #fff;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .triangle-container {
        margin: 1em 2em;
      }
      .triangle {
        transform: rotate(90deg);
        position: relative;
        width: 0;
        border-bottom: solid 50px #4b4f6f;
        border-right: solid 30px transparent;
        border-left: solid 30px transparent;
      }
      .triangle .empty {
        position: absolute;
        top: 7px;
        left: -21px;
        width: 0;
        border-bottom: solid 39px floralwhite;
        border-right: solid 21px transparent;
        border-left: solid 21px transparent;
      }
      .triangle-text-left {
        position: absolute;
        top: 37px;
        z-index: 1;
        right: -6px;
        transform: rotate(90deg);
        font-size: 0.9em;
        line-height: 0.76em;
      }
      .text-left-letter {
        display: block;
      }
      .triangle-text-bottom-right {
        position: absolute;
        top: 11px;
        z-index: 1;
        right: -39px;
        transform: rotate(242deg);
        font-size: 0.9em;
      }
      .triangle-text-top-right {
        position: absolute;
        top: 13px;
        z-index: 1;
        right: 5px;
        transform: rotate(-59deg);
        font-size: 0.9em;
      }
    `}</style>
    <style jsx>{utils}</style>
    <style jsx>{flex}</style>
    <style jsx>{styles}</style>
  </header>
);

export default withRouter(Header);
