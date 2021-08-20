/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavBar } from "components/Header/NavBar";
import { IntroductionPageNavItems } from "components/Header/data";
import { MacbookPro } from "components/WithoutTailwind/Macbook";
import { Carousel } from "./Carousel";
import { PresentImages } from "./PresentImages";
import background from "images/background.png";
import { Gradient } from "shared/Gradient";
import logo from "images/logo.png";

export const IntroductionPage = () => {
  var gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");

  return (
    <>
      <div className="w-full flex justify-center relative h-96">
        <div className="flex absolute w-full xl:w-3/4 z-40 my-10 container px-5">
          <div className="my-auto flex relative cursor-pointer flex-1">
            <img
              src={logo}
              className="w-20 md:w-24 absolute md:-top-11 -top-5"
              alt=""
            ></img>
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
            "--gradient-color-1": "#7C83FD",
            "--gradient-color-2": "#96BAFF",
            "--gradient-color-3": "#7DEDFF",
            "--gradient-color-4": "#88FFF7",
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
      <Carousel></Carousel>
      <PresentImages></PresentImages>
      <div className="bg-blue-dark">
        <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
          <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <ul className="flex mx-auto text-white text-center">
              <li className="p-2 cursor-pointer hover:underline">
                用户服务协议
              </li>
              <li className="p-2 cursor-pointer hover:underline">隐私政策</li>
              <li className="p-2 cursor-pointer hover:underline">联系我们</li>
              <li className="p-2 cursor-pointer hover:underline">加入我们</li>
            </ul>
            <div className="flex mx-auto text-white text-center flex-col md:flex-row">
              <p>咕噜铁汁科技（杭州）有限公司 ©2021</p>
              <a
                className="cursor-pointer hover:underline"
                href="https://beian.miit.gov.cn/"
              >
                <span className="px-4">浙ICP备2021023461 工信部ICP备案</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
