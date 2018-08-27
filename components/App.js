import React from "react";
import Head from "./Head";
import Header from "./Header";
import styles, { colors, flex } from "./_styles";

export default ({ title, children }) => (
  <React.Fragment>
    <Header />
    <main className="primary-color">
      <Head title={title} />
      {children}
      <style jsx global>
        {styles}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {flex}
      </style>
    </main>
  </React.Fragment>
);
