import { flex, utils } from "./_styles";

export default () => (
  <React.Fragment>
    <h2 className="secondary-color">
      Hey, I'm a software developer from Los Angeles, CA. I can help you build
      your next product.
    </h2>
    <style jsx>{`
      h2 {
        margin: 0.5em;
      }
    `}</style>
    <style jsx>{utils}</style>
  </React.Fragment>
);
