import React, { useState } from "react";
import Slider from "react-slick";
import prevArrow from "images/nextArrow.png";
import nextArrow from "images/prevArrow.png";
import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <img className="w-5" src={nextArrow} alt="next arrow"></img>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <img className="w-5" src={prevArrow} alt="next arrow"></img>
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="flex justify-center items-center flex-col">
            <div>
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="text-lg">{image.title}</div>
            <div className="text-xs">{image.titleEn}</div>
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="w-full">
      <Slider {...settings}>{templateImages}</Slider>
    </div>
  );
};

export default ImageSlider;
