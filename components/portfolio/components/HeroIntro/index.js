import React from "react";
import classNames from "classnames/bind";
import styles from "./HeroIntro.scss";

const cx = classNames.bind(styles);

const HeroIntro = () => (
  <div className={cx("hero__intro")}>
    <h1 className={cx("hero__text_large")}>
      Lets build an amazing product together.
    </h1>
    <h2 className={cx("hero__text_medium")}>
      Meet me at the intersection of modern web technology and design.
    </h2>
    <hr className={cx("hero__hr")} />
    <p className={cx("hero__text_small")}>View - Showcase</p>
  </div>
);

export default HeroIntro;
