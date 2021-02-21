import React, { Component } from "react";
import { Link } from "react-router-dom";
import navigationLogo from "../../images/nav-logo.svg";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="[ navigation ]">
        <div className="[ navigation__logo ]">
          <Link to="/">
            <img src={navigationLogo} alt="Company logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "[ navigation__menu ] active" : "[ navigation__menu ]"}>
          <Link to="/product">
            <li className="[ navigation__link ]"> Product</li>
          </Link>
          <Link to="/about">
            <li className="[ navigation__link ]">About Us</li>
          </Link>
          <Link to="contact">
            <li className="[ navigation__link ]">Contact</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          }*/
