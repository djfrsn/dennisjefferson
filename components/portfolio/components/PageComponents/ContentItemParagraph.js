import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ContentItemParagraph.scss";

const cx = classNames.bind(styles);

export default class ContentItemParagraph extends Component {
  render() {
    return (
      <p className={cx(`content__item-paragraph-${this.props.alignment}`)}>
        {this.props.children}
      </p>
    );
  }
}

ContentItemParagraph.propTypes = {
  alignment: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
