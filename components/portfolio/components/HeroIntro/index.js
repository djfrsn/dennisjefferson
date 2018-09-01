import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./HeroIntro.scss";

const cx = classNames.bind(styles);

class HeroIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx("hero__intro")}>
        <h1 className={cx("hero__text_large")}>
          Lets build an amazing product together.
        </h1>
        <h2 className={cx("hero__text_medium")}>
          Meet me at the intersection of modern web technology and design.
        </h2>
        <div className={cx("hero__hr")} />
        <button className={cx("hero__button")}>Showcase</button>
      </div>
    );
  }
}

export default HeroIntro;
