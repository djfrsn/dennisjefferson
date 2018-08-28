import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./FullScreen.scss";
import { withRouter } from "next/router";

const cx = classNames.bind(styles);

class FullScreen extends Component {
  constructor(props) {
    super(props);

    this.props.portfolio.every(app => {
      if (app.permalink === props.routeParams.permalink) {
        this.app = app;
        return false;
      }
      return true;
    });

    if (!this.app) {
      // send user home when app isn't found
      this.app = {
        ...this.props.portfolio[0],
        active: this.props.portfolio[0].toString()
      };
      console.warn('TODO: only push home if route isn"t "/');
      this.props.router.push("/");
    }

    this.state = { onClose: undefined, reveal: false };
    this.initialRender = true;
  }

  componentDidMount() {
    this.loadPage();
    setTimeout(() => {
      this.initialRender = false; // deploy 400ms to allow app icon transition to complete
    }, 401);
  }

  loadPage = () => {
    require([`../../pages/${this.app.name}.js`], mod => {
      this.Page = mod.default;
      this.forceUpdate(); // render content with opacity: 0
      setTimeout(() => {
        // defer rendering to prevent ui jank from loading async
        this.setState({ ...this.state, reveal: true }); // render content with opacity: 1
      }, 0);
    });
  };

  onClose = () => {
    this.setState({ ...this.state, onClose: true });
    this.onEndTransition();
  };

  onEndTransition = () => {
    setTimeout(() => {
      this.props.router.push(`/preview-${this.app.permalink}`);
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
    const Page = this.Page;
    return (
      <div className={cx("fullScreen")}>
        <section className={contentClass}>
          <img
            className={appIconClass}
            src={`/static/portfolio/${this.app.permalink}/icon.png`}
            alt={this.app.title}
          />
          <h2 className={cx("content__item--header-large")}>
            {this.app.title}
          </h2>
          <h3 className={cx("content__item--header-medium")}>
            {this.app.subtitle}
          </h3>

          {this.Page && <Page {...this.app} onClose={this.state.onClose} />}

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
    permalink: PropTypes.string.isRequried
  }),
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
