import App from "../components/App";
import Meeru from "../components/portfolio/pages/Meeru";
import FullScreen from "../components/portfolio/components/FullScreen";

import portfolio from "../components/portfolio/portfolio.json";

export default () => (
  <App title="Dennis Jefferson - Home">
    <FullScreen
      {...portfolio[1]}
      body_component={<Meeru permalink="meeru" />}
    />
  </App>
);
