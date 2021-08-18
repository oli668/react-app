import React, { useState } from "react";
import Slider from "react-slick";
import slickImg1 from "images/1.png";
import slickImg2 from "images/2.png";
import slickImg3 from "images/3.png";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Divider } from "components/Divider/Divider";
export const Carousel = () => {
  const [activeSlideIndex, setActiveState] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 7000,
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
              <span className="text-3xl xl:text-5xl">公司概况</span>
            </div>
            <div className="mx-20 w-full md:mx-10 text-lg">
              <li className="p-2">
                本公司秉承“提供一流的服务，实现共赢的合作”的理念，为海量客户提供优质的服务，如互联网一站式设计开发服务、原画展示设计与3D建模、电商产品展示设计方案与企业网站seo优化服务等
              </li>
              <li className="p-2">
                主要业务：包括技术咨询、产品设计、项目开发和售后运维服务、提供人员驻点、技术指导和招聘培训服务等
              </li>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center ${
              activeSlideIndex === 1 ? "block" : "hidden"
            }`}
          >
            <div className="text-center p-3 ">
              <span className="text-3xl xl:text-5xl">企业文化</span>
            </div>
            <div className="mx-20 w-full md:mx-10 text-lg">
              <li className="p-2">使命 —— 立足技术创新，支撑产业发展升级</li>
              <li className="p-2">展望 —— 为行业提供安全技术保障</li>
              <li className="p-2">
                价值 —— 以客户为导向，为客户创造更多的增量价值，实现合作共赢
              </li>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center items-center ${
              activeSlideIndex === 2 ? "block" : "hidden"
            }`}
          >
            <div className="text-center p-3">
              <span className="text-3xl xl:text-5xl">服务优势</span>
            </div>
            <div className="mx-20 w-full md:mx-10 text-lg">
              <li className="p-2">设计方案：与时俱进，高规格建立设计体系</li>
              <li className="p-2">沟通模式：高效细节，高标准打造交流体系</li>
              <li className="p-2">专业团队：精益求精，高要求建设团队体系</li>
              <li className="p-2">产品产出：因势利导，高层次构建产品体系</li>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full xl:w-1/2 flex m-0 md:m-5 xl:pt-0 xl:pb-0 pt-24 pb-24">
        <div className="w-full">
          <Slider {...settings}>
            <div className="h-64 xl:h-96">
              <img
                className="h-full w-full xl:object-cover object-contain"
                src={slickImg1}
                alt=""
              />
            </div>
            <div className="h-64 xl:h-96">
              <img
                className="h-full w-full xl:object-cover object-contain"
                src={slickImg2}
                alt=""
              />
            </div>
            <div className="h-64 xl:h-96">
              <img
                className="h-full w-full xl:object-cover object-contain"
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
