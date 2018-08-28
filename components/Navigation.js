import Link from "next/link";
import { withRouter } from "next/router";
import styles, { utils, flex } from "./_styles";

const Navigation = ({ router: { pathname } }) => (
  <nav className="column secondary-color">
    <Link href="/">
      <a
        className={`active-page-title ${
          pathname === "/" ? "is-active" : "hidden"
        }`}
      >
        Intro
      </a>
    </Link>
    <Link href="/showcase">
      <a
        className={`active-page-title ${
          pathname === "/showcase" ? "is-active" : "hidden"
        }`}
      >
        Showcase
      </a>
    </Link>
    {/* <div className="triangle-container flex-right">
      <div className="triangle">
        <div className="empty" />
      </div>
    </div> */}
    <style jsx>{`
      nav {
        display: flex;
        flex: 1 0 0;
        padding: 1em;
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
    `}</style>
    <style jsx>{utils}</style>
    <style jsx>{styles}</style>
  </nav>
);

export default withRouter(Navigation);
