import App from "../components/App";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Showcase from "../components/Showcase";
import UnderConstruction from "../components/UnderConstruction";
import { flex, utils } from "../components/_styles";

export default () => (
  <App title="Dennis Jefferson - Home">
    <div className="flex">
      <div className="flex row-wrap">
        <Navigation />
        <div className="article-container">
          <Intro />
        </div>
        {/* <Showcase /> */}
      </div>
    </div>
    {/* <UnderConstruction /> */}
    <style jsx>{`
      .article-container {
        border-left: 1px solid floralwhite;
        height: auto;
        display: flex;
        flex: 2 0 0;
      }
    `}</style>
    <style jsx>{utils}</style>
  </App>
);
