import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./HeroIntro.scss";

const cx = classNames.bind(styles);

let dynamics;

class HeroIntro extends Component {
  constructor(props) {
    super(props);
    this.heroTextRef = React.createRef();
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      dynamics = require("../../vendor/dynamics");
      this.animateHeroText();
    }
  }

  animateHeroText = () => {
    // dynamics.animate(
    //   this.heroTextRef.current,
    //   {
    //     translateX: 0
    //   },
    //   {
    //     type: dynamics.spring,
    //     duration: 2000,
    //     friction: 439
    //   }
    // );
  };

  render() {
    return (
      <div className={cx("hero__intro")}>
        <h1 ref={this.heroTextRef} className={cx("hero__text_large")}>
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
