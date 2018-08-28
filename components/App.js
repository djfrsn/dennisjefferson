import React from "react";
import Head from "./Head";
import Header from "./Header";
import "./_styles/index.scss";

export default ({ title, children }) => (
  <React.Fragment>
    <main className="flex row-wrap primary-color">
      <Head title={title} />
      {children}
    </main>
  </React.Fragment>
);
