/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavBar } from "components/Header/NavBar";
import { useHistory } from "react-router-dom";
import { IntroductionPageNavItems } from "components/Header/data";
import { MacbookPro } from "components/WithoutTailwind/Macbook";
import { Carousel } from "./Carousel";
import { PresentImages } from "./PresentImages";
import background from "images/background.png";
import { Gradient } from "shared/Gradient";
import logo from "images/logo.png";
import { useDispatch } from "react-redux";
import { hideCocktailsPage } from "store/actions/header";
// const ifHasAnchorJustScorll = () => {
//   let anchor = getURLStuff("anchor");
//   if (!!anchor) {
//     let anchorElement = document.getElementById(anchor);
//     if (anchorElement) {
//       window.scrollTo(0, anchorElement.offsetTop - window.innerHeight / 2);
//     }
//   }
//   // 没有的话，滚动到头部
//   else {
//     document.body.scrollTop = document.documentElement.scrollTop = 0;
//   }
// };
// const getURLStuff = (stuff) => {
//   let url = window.location.hash;
//   let query = url.split("?").length > 1 ? url.split("?")[1] : "";
//   let param = !!query ? query.split("&") : [];
//   let resultSet = {};
//   for (let i = 0; i < param.length; i++) {
//     let params = param[i].split("=");
//     if (params.length > 1) {
//       resultSet[params[0]] = params[1];
//     }
//   }
//   let result = resultSet[stuff] || "";
//   return decodeURI(result);
// };

export const IntroductionPage = () => {
  const { location } = useHistory();
  const gradient = new Gradient();
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideCocktailsPage());
  }, []);
  console.log(location.pathname);
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
              className="md:flex flex-row"
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
    </>
  );
};
