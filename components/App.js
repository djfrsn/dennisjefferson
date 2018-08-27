import Head from "./Head";
import styles, { colors } from "./_styles";

export default ({ title, children }) => (
  <main className="primary-bg-color primary-color">
    <Head title={title} />
    {children}
    <style jsx global>
      {styles}
    </style>
    <style jsx global>
      {colors}
    </style>
  </main>
);
