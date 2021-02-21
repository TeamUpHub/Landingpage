import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
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
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <Link to="/">
            <img src={navigationLogo} alt="Company logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <Link to="/product">
            <li className="nav-links"> Product</li>
          </Link>
          <Link to="/about">
            <li className="nav-links">About Us</li>
          </Link>
          <Link to="contact">
            <li className="nav-links">Contact</li>
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
