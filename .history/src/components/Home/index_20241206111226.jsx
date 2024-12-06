import "./style.css";
import React, { useState } from "react";
export const Home = (props) => {
  const { imageHome, biodata } = props;
  return (
    <section className="home section" id="home">
      <div className="container grid home__container">
        <img
          id="image_home"
          src={imageHome.imageWhite}
          alt="image"
          className="home__img"
        />
        <div className="home__data">
          <h1 className="home__name">
            {biodata.firstName} <br /> {biodata.lastName}
          </h1>
          <h3 className="home__profession">{biodata.profession}</h3>
        </div>
        <a href="#project" className="home__scroll">
          <div className="home__scroll-box">
            <i className="ri-arrow-down-line"></i>
          </div>
          <span className="home__scroll-text">Recent Project</span>
        </a>
      </div>
    </section>
  );
};
