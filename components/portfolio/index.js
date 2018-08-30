/* eslint-disable indent */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Portfolio from "./components/Portfolio";
import portfolio from "./portfolio.json";
import profile from "./profile.json";
import { withRouter } from "next/router";

const toPermalink = p => {
  return p !== "/" && { permalink: p.split("/")[1] };
};

class Layout extends Component {
  render() {
    const route_query = this.props.router.query;
    const routeParams = route_query.showcase ? route_query : { showcase: "" };

    // return (
    //   <Portfolio
    //     portfolio={portfolio}
    //     routeParams={routeParams}
    //     profile={profile}
    //   />
    // );

    return <h1 style={{ marginLeft: "1em" }}>Under Construction</h1>;
  }
}

Layout.propTypes = {
  router: PropTypes.object.isRequired
};

export default withRouter(Layout);
