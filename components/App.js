import Head from "./Head";
import styles, { colors, flex } from "./_styles";

export default ({ title, children }) => (
  <main className="column primary-color">
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
);
