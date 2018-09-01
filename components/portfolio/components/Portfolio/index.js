import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "../Slider";
import LearnMore from "../LearnMore";
import HeroIntro from "../HeroIntro";
import ProfileCard from "../ProfileCard";
import Header from "../Header";
import Zoomer from "../Zoomer";
import classNames from "classnames/bind";
import styles from "./Portfolio.scss";
import helpers from "../../styles/core/_helpers.scss";

const cx = classNames.bind({ ...styles, ...helpers });
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class Portfolio extends Component {
  constructor(props) {
    super(props); // call super in your constructor to access this, you can also pass props to super to access props within the constructor
    // event handlers for Portfolio component
    this.state = {
      hidden: false,
      animateHireMeButton: false,
      showProfileCard: false,
      sliderOpaque: false
    }; // set initial state
    this.portfolioNoiseBgRef = React.createRef();
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      import("../../vendor/dynamics").then(dynamics =>
        this.animateHeroText(dynamics)
      );
    }
  }

  animateHeroText = dynamics => {
    dynamics.animate(
      this.portfolioNoiseBgRef.current,
      {
        opacity: 1
      },
      {
        type: dynamics.easeIn,
        duration: 2000,
        friction: 413
      }
    );
  };

  /*
   * Containers propogate state changes down to components.
   * Components should be dumb and avoid manipulating state. If it has state, it's not a component.
   * Props vs State: https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
   * Containers are Stateful /\ Components are Stateless
   * Thinking in React: http://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live
   */
  onAnimateHireMeButton = animate => {
    this.setState({ ...this.state, animateHireMeButton: animate });
  };

  onToggleProfileCard = show => {
    this.setState({ ...this.state, showProfileCard: show, sliderOpaque: show });
  };

  hide = () => {
    this.setState({ hidden: true });
  };

  render() {
    const children = this.props.portfolio.map(app => {
      return (
        <Zoomer name={app.name} device={app.device} permalink={app.permalink} />
      );
    });

    return (
      <React.Fragment>
        <div className={cx({ portfolio: true, hidden: this.state.hidden })}>
          <div
            ref={this.portfolioNoiseBgRef}
            className={cx("portfolio-noise")}
          />
          <Header
            animateHireMeButton={this.state.animateHireMeButton}
            onToggleProfileCard={this.onToggleProfileCard}
          />
          <div className={cx("portfolio__body")}>
            <HeroIntro />
            <LearnMore />
            <div className={cx("inner__container")}>
              <Slider
                children={children}
                slides={this.props.portfolio}
                onViewDetailsComplete={this.hide}
                routeParams={this.props.routeParams}
                opaque={this.state.sliderOpaque}
                onAnimateHireMeButton={this.onAnimateHireMeButton}
              />
            </div>
          </div>
        </div>

        <ProfileCard
          {...this.props.profile}
          show={this.state.showProfileCard}
          onToggleProfileCard={this.onToggleProfileCard}
        />
      </React.Fragment>
    );
  }
}

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      device: PropTypes.string.isRequried,
      name: PropTypes.string.isRequried,
      permalink: PropTypes.string.isRequried,
      tagline: PropTypes.string.isRequried
    })
  ),
  routeParams: PropTypes.shape({
    permalink: PropTypes.string.isRequried
  }),
  profile: PropTypes.shape({
    author: PropTypes.shape({
      header_bg: PropTypes.string.isRequried,
      avatar: PropTypes.string.isRequried,
      url: PropTypes.string.isRequried,
      name: PropTypes.string.isRequried,
      email: PropTypes.string.isRequried
    }),
    baseurl: PropTypes.string,
    description: PropTypes.string
  })
};

export default Portfolio;
