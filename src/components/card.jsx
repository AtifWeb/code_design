import React from "react";

export const Card = ({ img, heading, para }) => {
  return (
    <div className="card">
      <img src={img} alt="" />

      <h1>{heading}</h1>
      <p>{para}</p>
      <div className="social_area">
        <a href="#">
          <img
            src="https://killergf.com/static/media/twitter.7fab2aad.svg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://killergf.com/static/media/github.bb258a18.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
