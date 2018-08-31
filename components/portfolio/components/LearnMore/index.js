import React from "react";
import classNames from "classnames/bind";
import styles from "./LearnMore.scss";
import { Hexagon, Triangle, Rectangle } from "../Shapes";
import shapeStyles from "../Shapes/Shapes.scss";

const cx = classNames.bind({ ...styles, ...shapeStyles });

const LearnMore = () => (
  <div className={cx("process__body")}>
    <div className={cx("process__title_container")}>
      <Hexagon className={cx("shape")} />
      <h1 className={cx("process__title")}>Mission</h1>
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <div className={cx("process__title_container")}>
      <Triangle className={cx("shape")} />
      <h1 className={cx("process__title")}>Technique</h1>
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <div className={cx("process__title_container", "showcase")}>
      <Rectangle className={cx("shape")} />
      <h1 className={cx("process__title", "showcase")}>Showcase</h1>
    </div>
  </div>
);

export default LearnMore;
// - Nose To Tail Engineering
