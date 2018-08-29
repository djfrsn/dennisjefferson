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
  return p !== "/" && { permalink: p.split("/")[1] };
};

class Layout extends Component {
  render() {
    const route_query = this.props.router.query;
    const routeParams = route_query.showcase ? route_query : { showcase: "" };
    console.log(routeParams);
    let View = (
      <Portfolio
        portfolio={portfolio}
        routeParams={routeParams}
        profile={profile}
      />
    );
    // '/' & '/preview-example' links are directed to Portfolio otherwise if /:permalink, user is directed to Fullscreen
    // if (route_query.showcase) {
    //   View = <FullScreen portfolio={portfolio} routeParams={routeParams} />;
    // }

    return View;
  }
}

Layout.propTypes = {};

export default withRouter(Layout);
