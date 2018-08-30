import React from "react";
import classNames from "classnames/bind";
import styles from "./LearnMore.scss";

const cx = classNames.bind(styles);

const LearnMore = () => (
  <div className={cx("process__body")}>
    <h1 className={cx("process__title")}>
      Professional Description and Mission Statement
    </h1>
    <h1 className={cx("process__title")}>Technique</h1>
  </div>
);

export default LearnMore;
