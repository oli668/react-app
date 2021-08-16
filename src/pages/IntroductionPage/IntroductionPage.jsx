/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavBar } from "components/Header/NavBar";
import { IntroductionPageNavItems } from "components/Header/data";
import { MacbookPro } from "components/WithoutTailwind/Macbook";
import { Carousel } from "./Carousel";
import { PresentImages } from "./PresentImages";
import background from "images/background.png";
import { Gradient } from "shared/Gradient";

export const IntroductionPage = () => {
  var gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");

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
            <span className="text-black w-full font-bold text-lg absolute px-10 sm:text-2xl">
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
      {/* <Footer></Footer> */}
    </>
  );
};
