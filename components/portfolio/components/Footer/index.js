import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Footer.scss";

const cx = classNames.bind(styles);

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Lets talk?</h3>
        <div />
        <h1>dj@dennisjefferson.com</h1>
      </footer>
    );
  }
}

export default Footer;
