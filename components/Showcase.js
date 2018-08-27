import { flex, utils } from "./_styles";

export default () => (
  <div className="showcase-container primary-bg-color box-shadow">
    showcase
    <style jsx>{`
      .showcase-container {
        margin: 1em 0.5em;
        padding: 0.5em;
      }
    `}</style>
    <style jsx>{flex}</style>
    <style jsx>{utils}</style>
  </div>
);
