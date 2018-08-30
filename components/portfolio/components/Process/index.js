import React from "react";
import classNames from "classnames/bind";
import styles from "./Process.scss";

const cx = classNames.bind(styles);

const Process = () => (
  <div className={cx("process__body")}>
    <h1 className={cx("process__title")}>Process</h1>
  </div>
);

export default Process;
