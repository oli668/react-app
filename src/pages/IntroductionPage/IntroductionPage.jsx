/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { NavBar } from "components/Header/NavBar";
import { IntroductionPageNavItems } from "components/Header/data";
import { MacbookPro } from "components/WithoutTailwind/Macbook";
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
            <span className="text-white font-bold text-2xl absolute px-10">
              咕噜铁汁
            </span>
          </div>
          <div className="w-full flex-2 flex flex-row-reverse">
            <NavBar
              isSidemenu={false}
              navItems={IntroductionPageNavItems}
              className="flex flex-row text-2xl"
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
            clipPath: "polygon(0 0, 100% 0%, 100% 50%, 0% 100%)",
          }}
          id="gradient-canvas"
          data-js-darken-top
          data-transition-in
        ></canvas>
        <div className="flex absolute w-full xl:w-3/4 z-40 my-5 container flex-col text-5xl bottom-0">
          <div className="py-2 px-5">
            <span>提供一流的服务</span>
          </div>
          <div className="py-2 px-5">
            <span>实现共赢的合作</span>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 md:bottom-1/3 md:left-1/2">
        <MacbookPro></MacbookPro>
      </div>
    </>
  );
};
