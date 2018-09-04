import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./LearnMore.scss";
import shapeStyles from "../Shapes/Shapes.scss";
import { Showcase, Technique, Mission } from "../Shapes";

const cx = classNames.bind({ ...styles, ...shapeStyles });

class LearnMore extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      import("svgjs").then(Snap => {
        // this.animateShapes(Snap);
      });
    }
  }

  animateShapes = SVG => {
    const shape1 = SVG("mission-shape").size(100, 100);
    const shape2 = SVG("tech-shape").size(100, 100);
    const shape3 = SVG("showcase-shape").size(100, 100);

    const svg_shape1 = shape1
      .rect(100, 100)
      .attr({ fill: "#5c5edc" })
      .skew(0, 10);

    const svg_shape2 = shape2
      .polygon("100, 100 0, 0 0, 100")
      .attr({ fill: "#5c5edc" });

    const svg_shape3 = shape3.rect(200, 75).attr({ fill: "#5c5edc" });

    svg_shape1
      .animate(14000, ">")
      .skew(0, -10)
      .animate(14000, ">")
      .skew(0, 10)
      .loop(Infinity, true);

    svg_shape2
      .animate(14000, ">")
      .skew(0, 10)
      .animate(14000, ">")
      .skew(0, -10)
      .loop(Infinity, true);

    svg_shape3
      .animate(16000, ">")
      .skew(0, -10)
      .animate(16000, ">")
      .skew(0, 10)
      .loop(Infinity, true);
  };

  render() {
    return (
      <div className={cx("process__body")}>
        <div className={cx("process__title_container")}>
          <Mission className={cx("shape")} />
          <h1 className={cx("process__title")}>Mission</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className={cx("process__title_container")}>
          <Technique className={cx("shape")} />
          <h1 className={cx("process__title")}>Technique</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className={cx("process__title_container", "showcase")}>
          <Showcase className={cx("shape")} />
          <h1 className={cx("process__title", "showcase")}>Showcase</h1>
        </div>
      </div>
    );
  }
}

export default LearnMore;
// - Nose To Tail Engineering
