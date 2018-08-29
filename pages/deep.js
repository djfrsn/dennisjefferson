import App from "../components/App";
import Deep from "../components/portfolio/pages/Deep";
import FullScreen from "../components/portfolio/containers/FullScreen";

import portfolio from "../components/portfolio/portfolio.json";

export default () => (
  <App title="Dennis Jefferson - Home">
    <FullScreen {...portfolio[2]} body_component={<Deep permalink="deep" />} />
  </App>
);
