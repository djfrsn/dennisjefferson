import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./YouTube.scss";

const cx = classNames.bind(styles);

export default class YouTube extends Component {
  render() {
    return (
      <div className={cx("YouTube")}>
        <iframe
          width="80%"
          src={this.props.src}
          frameBorder="0"
          allowFullScreen=""
        />
      </div>
    );
  }
}

YouTube.propTypes = {
  src: PropTypes.string.isRequired
};
