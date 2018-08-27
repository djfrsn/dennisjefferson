import { flex, utils } from "./_styles";

export default () => (
  <article className="column intro-container">
    <h2 className="secondary-color">
      Hey, I'm a software developer from Los Angeles, CA. I can help you build
      your next product.
    </h2>
    <style jsx>{`
      .intro-container {
        display: flex;
        flex: 2 0 0;
        padding: 0.5em;
      }
    `}</style>
    <style jsx>{utils}</style>
  </article>
);
