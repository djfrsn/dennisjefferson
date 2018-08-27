import App from "../components/App";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Showcase from "../components/Showcase";
import UnderConstruction from "../components/UnderConstruction";
import { flex, utils } from "../components/_styles";

export default () => (
  <App title="Dennis Jefferson - Home">
    <div>
      <Header />
      <Navigation />
      <div className="column">
        <Intro />
        {/* <Showcase /> */}
      </div>
    </div>
    {/* <UnderConstruction /> */}
    <style jsx>{utils}</style>
  </App>
);
