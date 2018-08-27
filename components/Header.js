import Link from "next/link";
import { withRouter } from "next/router";

const Header = ({ router: { pathname } }) => (
  <header>
    <h1>
      Dennis <br />
      Jefferson
    </h1>
    {/* <Link prefetch href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link prefetch href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link> */}
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
);

export default withRouter(Header);
