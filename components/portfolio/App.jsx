import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.scss";

export default class App extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
