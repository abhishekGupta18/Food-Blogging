import "./Article.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { articleData } from "../../ArticleData";

import React, { Component } from "react";
import Slider from "react-slick";

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="article_section">
      <h2>Latest Articles </h2>
      <div className="slider">
        <Slider {...settings}>
          {articleData.map((item) => (
            <div
              key={item.id}
              className="article_card"
              style={{ display: "flex" }}
            >
              <div className="card_img_container">
                <img src={item.img} alt="article-hero-img" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <button>Read More</button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
