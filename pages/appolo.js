import App from "../components/App";
import Appolo from "../components/portfolio/pages/Appolo";
import FullScreen from "../components/portfolio/components/FullScreen";

import portfolio from "../components/portfolio/portfolio.json";

export default () => (
  <App title="Dennis Jefferson - Home">
    <FullScreen
      {...portfolio[0]}
      body_component={<Appolo permalink="appolo" />}
    />
  </App>
);
