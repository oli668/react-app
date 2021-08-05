import React, { useState } from "react";
import Slider from "react-slick";
import slickImg1 from "images/1.png";
import slickImg2 from "images/2.png";
import slickImg3 from "images/3.png";
export const Carousel = () => {
  const [activeSlideIndex, setActiveState] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveState(next),
    customPaging: (i) => (
      <div
        className={`bottom-8 absolute md:bottom-0 rounded-full  ${
          i === activeSlideIndex ? "bg-black" : "bg-overlay"
        } w-3 h-3`}
      ></div>
    ),
  };
  return (
    <div className="flex mt-28 w-full p-5 md:p-10 flex-col xl:flex-row">
      <div className="flex-1 flex w-full xl:w-1/2 justify-center items-center">
        <div className="flex flex-col mx-auto justify-center items-center md:mx-14">
          <div
            className={`flex flex-col justify-center items-center ${
              activeSlideIndex === 0 ? "block" : "hidden"
            }`}
          >
            <div className="text-center p-3">
              <span className="text-3xl xl:text-5xl">服务价值</span>
            </div>
            <div className="mx-20 w-full md:mx-10">
              <li className="p-2">
                1高效的沟通模式 创造用户想要的产品 2高效的沟通模式
                创造用户想要的产品
              </li>
              <li className="p-2">1业界的领先的设计方案 设计出产品原型</li>
              <li className="p-2">1稳定的程序设计方案 开发出稳定的产品</li>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center ${
              activeSlideIndex === 1 ? "block" : "hidden"
            }`}
          >
            <div className="text-center p-3 ">
              <span className="text-3xl xl:text-5xl">竞争优势</span>
            </div>
            <div className="mx-20 w-full md:mx-10">
              <li className="p-2">2高效的沟通模式 创造用户想要的产品</li>
              <li className="p-2">
                2业界的领先的设计方案 2高效的沟通模式 创造用户想要的产品
                设计出产品原型
              </li>
              <li className="p-2">2稳定的程序设计方案 开发出稳定的产品</li>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center ${
              activeSlideIndex === 2 ? "block" : "hidden"
            }`}
          >
            <div className="text-center p-3">
              <span className="text-3xl xl:text-5xl">合作伙伴</span>
            </div>
            <div className="mx-20 w-full md:mx-10">
              <li className="p-2">3高效的沟通模式 创造用户想要的产品</li>
              <li className="p-2">3业界的领先的设计方案 设计出产品原型</li>
              <li className="p-2">
                3稳定的程序设计方案 2高效的沟通模式 创造用户想要的产品
                开发出稳定的产品
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full xl:w-1/2 flex m-0 md:m-5">
        <div className="w-full">
          <Slider {...settings}>
            <div className="h-64 xl:h-96">
              <img
                className="h-full w-full object-contain"
                src={slickImg1}
                alt=""
              />
            </div>
            <div className="h-64 xl:h-96">
              <img
                className="h-full w-full object-contain"
                src={slickImg2}
                alt=""
              />
            </div>
            <div className="h-64 xl:h-96">
              <img
                className="h-full w-full object-contain"
                src={slickImg3}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
