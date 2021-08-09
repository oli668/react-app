import React from "react";
import h1 from "images/h1.jpg";
import h2 from "images/h2.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import { MobileAppUI } from "components/WithoutTailwind/MobileApp";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
export const PresentImages = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: h1,
            amount: 1,
          },
        ]}
        style={{
          height: "400px",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="flex justify-center items-center">
          <Zoom clear>
            <p className="text-5xl flex justify-center items-center h-80 text-black">
              我们的业务
            </p>
          </Zoom>
        </div>
      </ParallaxBanner>
      <div className="flex justify-between mx-20">
        <div className="flex-1 flex justify-center">
          <Fade left>
            <Parallax
              className="custom-class"
              x={[-20, 30]}
              y={[0, -30]}
              tagOuter="figure"
            >
              <div className="w-full">
                <MobileAppUI></MobileAppUI>
              </div>
            </Parallax>
          </Fade>
        </div>
        <div className="flex-1 flex items-center">
          <Zoom clear>
            <Parallax className="custom-class" x={[20, -20]} tagOuter="figure">
              <div className="w-full">
                <div className="mx-20 w-full md:mx-10">
                  <p className="p-2">
                    1高效的沟通模式 创造用户想要的产品 2高效的沟通模式
                    创造用户想要的产品
                  </p>
                  <p className="p-2">1业界的领先的设计方案 设计出产品原型</p>
                  <p className="p-2">1稳定的程序设计方案 开发出稳定的产品</p>
                </div>
              </div>
            </Parallax>
          </Zoom>
        </div>
      </div>
      <ParallaxBanner
        layers={[
          {
            image: h2,
            amount: 1,
          },
        ]}
        style={{
          height: "400px",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="flex justify-center items-center">
          <Zoom clear>
            <p className="text-5xl flex justify-center items-center h-80 text-white">
              加入我们
            </p>
          </Zoom>
        </div>
      </ParallaxBanner>
      <div className="flex justify-between mx-20">
        <div className="flex-1 flex items-center">
          <Zoom clear>
            <Parallax className="custom-class" x={[20, -20]} tagOuter="figure">
              <div className="w-full">
                <div className="mx-20 w-full md:mx-10">
                  <p className="p-2">
                    1高效的沟通模式 创造用户想要的产品 2高效的沟通模式
                    创造用户想要的产品
                  </p>
                  <p className="p-2">1业界的领先的设计方案 设计出产品原型</p>
                  <p className="p-2">1稳定的程序设计方案 开发出稳定的产品</p>
                </div>
              </div>
            </Parallax>
          </Zoom>
        </div>
        <div className="flex-1 flex justify-center">
          <Fade left>
            <Parallax
              className="custom-class"
              x={[-20, 30]}
              y={[0, -30]}
              tagOuter="figure"
            >
              <div className="w-full">
                <MobileAppUI></MobileAppUI>
              </div>
            </Parallax>
          </Fade>
        </div>
      </div>
    </>
  );
};
