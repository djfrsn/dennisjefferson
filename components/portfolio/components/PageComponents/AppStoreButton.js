import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ContentItemImage.scss";

const cx = classNames.bind(styles);

export default class AppStoreButton extends Component {
  render() {
    const src = this.props.comingSoon
      ? "/static/portfolio/app_store_coming_soon.png"
      : "/static/portfolio/app_store.png";
    return (
      <img
        className={cx("content__item-img-center")}
        src={src}
        style={{ marginBottom: 0 }}
      />
    );
  }
}

AppStoreButton.propTypes = {
  comingSoon: PropTypes.string
};
