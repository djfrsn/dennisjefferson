import React from "react";
import Navigation from "../components/Navigation";

export default ({ children }) => (
  <React.Fragment>
    <Navigation />
    <article className="column">{children}</article>
    <style jsx>{`
      article {
        border-left: 1px solid floralwhite;
        height: auto;
        display: flex;
        flex: 5 0 0;
        padding: 0.5em;
      }
    `}</style>
  </React.Fragment>
);
