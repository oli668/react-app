/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavBar } from "components/Header/NavBar";
import { IntroductionPageNavItems } from "components/Header/data";
import { MacbookPro } from "components/WithoutTailwind/Macbook";
import { MobileAppUI } from "components/WithoutTailwind/MobileApp";
import background from "images/background.png";
import slickImg1 from "images/1.png";
import slickImg2 from "images/2.png";
import slickImg3 from "images/3.png";
// import { Footer } from "components/Footer/Footer";
import { Gradient } from "shared/Gradient";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export const IntroductionPage = () => {
  var gradient = new Gradient();
  const [activeSlideIndex, setActiveState] = useState(0);
  gradient.initGradient("#gradient-canvas");
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveState(next),
  };
  return (
    <>
      <div className="w-full flex justify-center relative h-96">
        <div className="flex absolute w-full xl:w-3/4 z-40 my-10 container px-5">
          <div className="my-auto flex relative cursor-pointer flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 text-white text-2xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white w-full font-bold text-lg absolute px-10 sm:text-2xl">
              咕噜铁汁科技
            </span>
          </div>
          <div className="w-full flex-2 md:flex flex-row-reverse hidden z-50">
            <NavBar
              isSidemenu={false}
              navItems={IntroductionPageNavItems}
              className="md:flex flex-row text-2xl"
            ></NavBar>
          </div>
        </div>
        <canvas
          style={{
            "--gradient-color-1": "#a960ee",
            "--gradient-color-2": "#ff333d",
            "--gradient-color-3": "#90e0ff",
            "--gradient-color-4": "#ffcb57",
            width: "100%",
            height: "350px",
            position: "absolute",
            zIndex: 2,
            clipPath: "polygon(0 0, 100% 0%, 100% 50%, 0% 100%)",
          }}
          id="gradient-canvas"
          data-js-darken-top
          data-transition-in
        ></canvas>
        <img
          alt="bg-icon"
          src={background}
          style={{
            width: "100%",
            height: "350px",
            clipPath: "polygon(0 0, 100% 0%, 100% 50%, 0% 100%)",
          }}
        />
        <div className="flex w-full flex-col-reverse md:flex-row absolute top-24 z-40 my-5 container bottom-0 justify-around">
          <div className="flex items-center md:items-baseline md:block h-full w-full md:w-auto md:h-auto">
            <MacbookPro></MacbookPro>
          </div>
          <div className="text-3xl md:text-3xl xl:text-5xl flex justify-center items-center md:mt-40 mt-32">
            <div className="flex flex-col">
              <div className="py-2 px-5 text-right">
                <span>提供一流的服务</span>
              </div>
              <div className="py-2 px-5 text-right">
                <span>实现共赢的合作</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-28 w-full p-10">
        <div className="flex-1 flex w-1/2 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`flex flex-col justify-center items-center ${
                activeSlideIndex === 0 ? "block" : "hidden"
              }`}
            >
              <div className="text-center p-3">
                <span className="text-5xl">服务价值</span>
              </div>
              <div className="mx-20">
                <li className="p-2">高效的沟通模式 创造用户想要的产品</li>
                <li className="p-2">业界的领先的设计方案 设计出产品原型</li>
                <li className="p-2">稳定的程序设计方案 开发出稳定的产品</li>
              </div>
            </div>
            <div
              className={`flex flex-col ${
                activeSlideIndex === 1 ? "block" : "hidden"
              }`}
            >
              <div className="text-center p-3 ">
                <span className="text-5xl">竞争优势</span>
              </div>
              <div className="mx-20">
                <li className="p-2">高效的沟通模式 创造用户想要的产品</li>
                <li className="p-2">业界的领先的设计方案 设计出产品原型</li>
                <li className="p-2">稳定的程序设计方案 开发出稳定的产品</li>
              </div>
            </div>
            <div
              className={`flex flex-col ${
                activeSlideIndex === 2 ? "block" : "hidden"
              }`}
            >
              <div className="text-center p-3">
                <span className="text-5xl">合作伙伴</span>
              </div>
              <div className="mx-20">
                <li className="p-2">高效的沟通模式 创造用户想要的产品</li>
                <li className="p-2">业界的领先的设计方案 设计出产品原型</li>
                <li className="p-2">稳定的程序设计方案 开发出稳定的产品</li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-1/2 flex m-5">
          <div className="w-full">
            <Slider {...settings}>
              <div className="h-96">
                <img
                  className="h-full w-full object-contain"
                  src={slickImg1}
                  alt=""
                />
              </div>
              <div className="h-96">
                <img
                  className="h-full w-full object-contain"
                  src={slickImg2}
                  alt=""
                />
              </div>
              <div className="h-96">
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
      <div className="flex-1 p-5">
        <MobileAppUI></MobileAppUI>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};
