import React from "react";
import twitter from "../img/twitter.svg";
import github from "../img/github.svg";
export const Card = ({ img, heading, para }) => {
  return (
    <div className="card">
      <img src={img} alt="" />

      <h1>{heading}</h1>
      <p>{para}</p>
      <div className="social_area">
        <a href="#">
          <img src={twitter} alt="" />
        </a>
        <a href="#">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
};
