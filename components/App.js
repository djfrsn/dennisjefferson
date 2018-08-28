import React from "react";
import Head from "./Head";

export default ({ title, children }) => (
  <React.Fragment>
    <main className="flex row-wrap primary-color">
      <Head title={title} />
      {children}
    </main>
  </React.Fragment>
);
