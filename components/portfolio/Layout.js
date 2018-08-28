/* eslint-disable indent */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Portfolio from "./containers/Portfolio";
import FullScreen from "./containers/FullScreen";
import portfolio from "./portfolio.json";
import profile from "./profile.json";
import { withRouter } from "next/router";
import "./App.scss";

const toPermalink = p => {
  return { permalink: (typeof p === "string" && p.split("/")[1]) || "" };
};

class Layout extends Component {
  render() {
    const permalink = toPermalink(this.props.router.pathname);
    const routeParams = permalink ? permalink : { permalink: "" };
    let View = (
      <Portfolio
        portfolio={portfolio}
        routeParams={routeParams}
        profile={profile}
      />
    );
    // '/' & '/preview-example' links are directed to Portfolio otherwise if /:permalink, user is directed to Fullscreen
    if (permalink) {
      const params = this.props.router.pathname.split("-");
      View =
        params[0] === "preview" && params.length > 1 ? (
          View
        ) : (
          <FullScreen portfolio={portfolio} routeParams={routeParams} />
        );
    }

    return View;
  }
}

Layout.propTypes = {
  params: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  })
};

export default withRouter(Layout);
