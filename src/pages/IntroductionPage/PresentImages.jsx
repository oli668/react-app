import React from "react";
import { useParallaxCache } from "hooks/useParallaxCache";
import h1 from "images/h1.png";
import h2 from "images/h2.jpg";
import animationIcon from "images/animationIcon.png";
import animationIconSmall from "images/animationIconSmall.png";
import inspiration from "images/inspiration.png";
import project from "images/project.png";
import title from "images/title.png";
import designIcon from "images/designIcon.png";
import designImage from "images/designImage.png";
import designPoster from "images/designPoster.png";
import threeD from "images/3d.png";
import { ParallaxBanner } from "react-scroll-parallax";
import { MobileAppUI } from "components/WithoutTailwind/MobileApp";
import { Parallax } from "react-scroll-parallax";
import ImageSlider from "./ImageSlider";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Divider } from "components/Divider/Divider";
export const PresentImages = () => {
  useParallaxCache();
  const LARGE_IMAGES = [
    {
      id: 1,
      src: designIcon,
      alt: "Placeholder image",
      title: "板式设计",
      titleEn: "Banner Design",
    },
    {
      id: 2,
      src: designImage,
      alt: "Placeholder image",
      title: "商业插画",
      titleEn: "Commercial Illustration",
    },
    {
      id: 3,
      src: designPoster,
      alt: "Placeholder image",
      title: "图标设计",
      titleEn: "Icon Design",
    },
    {
      id: 3,
      src: threeD,
      alt: "Placeholder image",
      title: "3D建模设计",
      titleEn: "3Ds Max",
    },
  ];

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
          height: "350px",
        }}
      >
        <div className="flex justify-center items-center">
          <Zoom clear>
            <p className="text-5xl flex justify-center items-center h-80 text-white">
              我们的业务
            </p>
          </Zoom>
        </div>
      </ParallaxBanner>
      <div className="flex flex-col justify-between md:mx-20 relative md:pt-12">
        <div className={"flex flex-col xl:flex-row md:h-full h-large"}>
          <div className="flex-1 justify-center hidden xl:block">
            <Fade left>
              <div className="w-full absolute -top-10 left-20 z-10">
                <MobileAppUI></MobileAppUI>
              </div>
            </Fade>
          </div>
          <div className="flex-1 flex z-10">
            <Zoom clear>
              <div className="w-full">
                <div className="w-full md:mx-10 relative">
                  <div className="flex justify-center">
                    <img src={project} className="z-10" alt=""></img>
                  </div>

                  <div className="absolute top-3/4 mt-10">
                    <div className="text-2xl py-2 left-1/2 -translate-x-1/2 flex justify-center">
                      <p className="text-blue-dark font-bold">
                        移动互联网一站式设计与开发
                      </p>
                    </div>
                    <p className="text-lg px-11">
                      移动互联网一站式服务平台是满足海量客户所有需求的“一站式服务”平台，即根据客户的需求及要求，提供简单易用的互联网营销产品与优质服务。
                      主要包括技术咨询、产品设计、项目开发和售后运维服务等。主要业务包含定制app开发、支持iOS/安卓双系统、支持商家端/客户端的双端开发、
                      App+PC+web+微信四合一全网开发
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
        <Divider size="large"></Divider>
        <div className="w-full flex flex-col justify-center -mt-20 md:mt-40">
          <div className="flex justify-center">
            <img className="w-52" src={title} alt=""></img>
          </div>
          <div className="p-5">
            <ImageSlider images={LARGE_IMAGES} />
          </div>
        </div>
        <Divider size="large"></Divider>
        <div className="absolute right-0 top-10 hidden whitespace-nowrap md:block">
          <Parallax
            className="custom-class"
            x={[-20, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIcon} alt="" />
          </Parallax>
        </div>
        <div className="absolute left-1/3 top-28 whitespace-nowrap hidden md:block">
          <Parallax
            className="custom-class"
            x={[-20, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIconSmall} alt="" />
          </Parallax>
        </div>
        <div className="absolute left-0 bottom-1/2 whitespace-nowrap hidden md:block">
          <Parallax
            className="custom-class"
            x={[0, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIcon} alt="" />
          </Parallax>
        </div>
        <div className="absolute right-0 bottom-40 whitespace-nowrap hidden md:block">
          <Parallax
            className="custom-class"
            x={[0, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIcon} alt="" />
          </Parallax>
        </div>
      </div>

      <div className="flex justify-center relative">
        <Zoom clear>
          <div className="w-full md:w-9/12 flex justify-center z-10">
            <div className="w-full">
              <div className="w-full md:mx-10 relative flex">
                <div className="flex-1">
                  <div className="left-0 mb-12 md:mt-10 flex-1 md:absolute relative z-10 w-full md:w-2/3 top-10">
                    <div className="text-2xl py-2 left-1/2 -translate-x-1/2 flex justify-center">
                      <p className="text-blue-dark font-bold">
                        企业网站SEO优化解决方案
                      </p>
                    </div>
                    <p className="text-lg px-11 w-full md:w-11/12">
                      SEO(Search Engine Optimization)
                      在企业开拓国际市场、维护客户关系等跨境电商活动中有着不可低估的作用。可通过SEO对企业网站进行内外部优化,
                      使其最大程度地符合搜索引擎的搜索规则,
                      以提升网站在搜索引擎的排名、
                      吸引优质客户并扩大企业知名度。
                    </p>
                  </div>
                </div>
                <div className="flex-1 h-full relative hidden mx-10 md:flex">
                  <div className="flex justify-center p-12">
                    <div className="h-full flex">
                      <div className="bg-gray-light w-56 h-1/2 mt-10"></div>
                    </div>
                    <img src={inspiration} className="z-10 w-80" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        <div className="absolute right-0 top-10 hidden whitespace-nowrap md:block">
          <Parallax
            className="custom-class"
            x={[-20, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIcon} alt="" />
          </Parallax>
        </div>
        <div className="absolute left-1/3 top-28 hidden whitespace-nowrap md:block">
          <Parallax
            className="custom-class"
            x={[0, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIconSmall} alt="" />
          </Parallax>
        </div>
        <div className="absolute left-0 bottom-1/2 hidden whitespace-nowrap md:block">
          <Parallax
            className="custom-class"
            x={[0, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIcon} alt="" />
          </Parallax>
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
      <div className="flex-1 flex">
        <Zoom clear>
          <div className="w-full">
            <div className="w-full relative">
              <div className="flex justify-center">
                <img src={project} className="z-10" alt=""></img>
              </div>

              <div className="absolute top-3/4 mt-10">
                <div className="text-2xl py-2 left-1/2 -translate-x-1/2 flex justify-center">
                  <p className="text-blue-dark font-bold">
                    移动互联网一站式设计与开发
                  </p>
                </div>
                <p className="text-lg px-11">
                  移动互联网一站式服务平台是满足海量客户所有需求的“一站式服务”平台，即根据客户的需求及要求，提供简单易用的互联网营销产品与优质服务。
                  主要包括技术咨询、产品设计、项目开发和售后运维服务等。主要业务包含定制app开发、支持iOS/安卓双系统、支持商家端/客户端的双端开发、
                  App+PC+web+微信四合一全网开发
                </p>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};
