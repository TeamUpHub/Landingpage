import React from "react";
import heroImg from "../../images/hero-img.svg";
import LandingButton from "../LandingButton/LandingButton";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="landing-title">
          We make it easier for<br/> people to
          <span className="red-highlight"><br/> achieve their dreams</span>{" "}
        </h1>
        <h3 className="landing-text">
          Great Things are created together!
          <br />
          <span className="red-highlight">
            Our platform connects those who want to make a difference together
          </span>
        </h3>
        <LandingButton text="Sounds good?" />
      </div>
      <div className="image-container">
        <img className="hero-img" src={heroImg} alt="Landing Picture" />
      </div>
    </div>
  );
};

export default Landing;
