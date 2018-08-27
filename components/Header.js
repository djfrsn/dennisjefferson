import styles, { utils, flex } from "./_styles";

const Header = () => (
  <header className="">
    <h1 className="secondary-color">Dennis Jefferson</h1>
    <style jsx>{`
      header {
        padding: 1em 1em 0;
        margin: 0;
        width: 100%;
        border-bottom: 1px solid floralwhite;
      }
      .active-page-title {
        font-weight: 600;
      }
      h1 {
        margin: 0;
        padding: 0;
        text-shadow: 0 0.02em #fff;
      }
    `}</style>
    <style jsx>{utils}</style>
    <style jsx>{styles}</style>
  </header>
);

export default Header;
