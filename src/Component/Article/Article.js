import "./Article.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { articleData } from "../../ArticleData";

import React, { Component } from "react";
import Slider from "react-slick";

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slider",
  };
  return (
    <section className="article_section">
      <h2>Latest Articles </h2>
      <Slider {...settings} className="slider">
        {articleData.map((item) => (
          <li key={item.id} className="article_card">
            <img src={item.img} alt="article-hero-img" />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <button>Read More</button>
          </li>
        ))}
      </Slider>
    </section>
  );
};
