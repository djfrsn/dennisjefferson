import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Header.scss";

const cx = classNames.bind(styles);

class Header extends Component {
  onShowProfile = () => {
    this.props.onToggleProfileCard(true);
  };

  render() {
    const HireMeButtonClass = cx({
      "bp-icon": true,
      "bp-icon-child": true,
      animated: this.props.animateHireMeButton,
      rubberBand: this.props.animateHireMeButton
    });
    return (
      <header className={cx("bp-header")}>
        <span>
          Dennis Jefferson
          <span
            className={cx("bp-icon", "bp-icon-about", "site-info-button")}
            data-content="Rwarr"
          />
        </span>
        <div className={cx("site-info")}>Dev since 12</div>
        <h1>Software Developer</h1>
        <nav role="navigation">
          <div className={cx("site-nav-links")}>
            <a onClick={this.onShowProfile}>Contact</a>
            {/* <a href="#">Showcase</a> */}
          </div>
          <div>
            <a className={HireMeButtonClass} data-info="Hire Me">
              <span>Hire Me</span>
            </a>
            <a
              href="mailto:dennismjefferson@gmail.com"
              className={cx("bp-icon", "bp-icon-email")}
              data-info="Email"
            >
              <span>send me e-mail</span>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  animateHireMeButton: PropTypes.bool.isRequired,
  onToggleProfileCard: PropTypes.func.isRequired
};

export default Header;
