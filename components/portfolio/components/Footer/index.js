import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Footer.scss";

const cx = classNames.bind(styles);

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3 className={cx("footer-message")}>Lets talk?</h3>
        <div />
        <a
          href="mailto:dennismjefferson@gmail.com"
          className={cx("footer-email")}
          data-info="Email"
        >
          dj@dennisjefferson.com
        </a>
      </footer>
    );
  }
}

export default Footer;
