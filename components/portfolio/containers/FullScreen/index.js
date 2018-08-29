import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./FullScreen.scss";
import { withRouter } from "next/router";

const cx = classNames.bind(styles);

class FullScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { onClose: undefined, reveal: true };
    this.initialRender = true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.initialRender = false; // deploy 400ms to allow app icon transition to complete
    }, 401);
  }

  onClose = () => {
    this.setState({ ...this.state, onClose: true });
    this.onEndTransition();
  };

  onEndTransition = () => {
    setTimeout(() => {
      this.props.router.push(`/?showcase=${this.props.permalink}`);
    }, 750);
  };

  render() {
    const contentClass = cx({
      content: true,
      "content--open": this.state.reveal && !this.state.onClose ? true : false
    });
    const appIconClass = cx({
      "content__item-img": true,
      animated: true,
      bounceInDown: this.initialRender ? true : false,
      bounceOutUp: this.state.onClose ? true : false
    });
    return (
      <div className={cx("fullScreen")}>
        <section className={contentClass}>
          <img
            className={appIconClass}
            src={`/static/portfolio/${this.props.permalink}/icon.png`}
            alt={this.props.title}
          />
          <h2 className={cx("content__item--header-large")}>
            {this.props.title}
          </h2>
          <h3 className={cx("content__item--header-medium")}>
            {this.props.subtitle}
          </h3>

          {this.props.body_component}

          <button
            className={cx("button", "button--close")}
            onClick={this.onClose}
          >
            <i className={cx("icon", "icon--circle-cross")} />
            <span className={cx("text-hidden")}>Close content</span>
          </button>
        </section>
      </div>
    );
  }
}

FullScreen.propTypes = {
  routeParams: PropTypes.shape({
    showcase: PropTypes.string.isRequried
  }),
  body_component: PropTypes.object,
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      permalink: PropTypes.string.isRequired
    })
  )
};

export default withRouter(FullScreen);
