import React, { forwardRef } from "react";
import { useParallaxCache } from "hooks/useParallaxCache";
import h1 from "images/h1.png";
import h2 from "images/h2.jpg";
import commercial from "images/commercial.png";
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
export const PresentImages = forwardRef((props = null, ref) => {
  console.log(ref, "child");
  useParallaxCache();
  const LARGE_IMAGES = [
    {
      id: 1,
      src: designPoster,
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
      src: designIcon,
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
        id="missions"
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
      <div className="flex flex-col justify-between md:mx-20 relative pt-28 md:pt-12">
        <div className={"flex flex-col xl:flex-row"}>
          <div className="flex-1 justify-center hidden xl:block">
            <Fade left>
              <div className="w-full absolute -top-20 left-20 z-10">
                <MobileAppUI></MobileAppUI>
              </div>
            </Fade>
          </div>
          <div className="flex-1 flex z-10">
            <Zoom clear>
              <div className="w-full">
                <div className="w-full md:mx-10 relative">
                  <div className="flex justify-center">
                    <img
                      src={project}
                      className="z-10 hidden md:w-3/4 md:block"
                      alt=""
                    ></img>
                  </div>

                  <div className="md:absolute relative top-3/4 mt-10">
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
        <div className="w-full flex flex-col justify-center md:mt-40 z-10">
          <div className="flex justify-center md:p-0 pt-5">
            <img className="hidden md:w-52 md:flex" src={title} alt=""></img>
            <div className="md:hidden text-2xl py-2 left-1/2 -translate-x-1/2 flex justify-center">
              <p className="text-blue-dark font-bold">设计展示</p>
            </div>
          </div>
          <div className="md:pt-5 md:pb-5 pt-0">
            <ImageSlider images={LARGE_IMAGES} />
          </div>
        </div>
        <Divider size="large"></Divider>
        <div className="absolute -right-20 top-10 hidden whitespace-nowrap md:block">
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
        <div className="absolute left-0 bottom-1/3 whitespace-nowrap hidden md:block">
          <Parallax
            className="custom-class"
            x={[0, 0]}
            y={[0, -30]}
            tagOuter="figure"
          >
            <img className="w-64 z-0" src={animationIcon} alt="" />
          </Parallax>
        </div>
        <div className="absolute -right-20 bottom-40 whitespace-nowrap hidden md:block">
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
      <div className="flex z-10">
        <Zoom clear>
          <div className="w-full flex md:flex-row flex-col relative">
            <div className="flex-1 flex justify-center">
              <img
                src={commercial}
                className="z-10 md:w-3/4 md:ml-40 ml-0 md:p-0 py-28 px-5"
                alt=""
              ></img>
            </div>

            <div className="flex-1 flex justify-center items-center flex-col">
              <div className="text-2xl py-2 left-1/2 -translate-x-1/2 flex justify-center">
                <p className="text-blue-dark font-bold">
                  电商产品展示设计方案提供与解决
                </p>
              </div>
              <p className="text-lg px-11">
                电商网站的优势在于将传统的商务流程电子化、数字化。本公司可以为客户提供网站总体设计以及电商产品展示设计，产品展示设计会辅以图片、相关视频等,
                并且用英文对该产品的基本性能进行阐述。
              </p>
            </div>
          </div>
        </Zoom>
      </div>
      <Divider size="large"></Divider>
      <ParallaxBanner
        id="join"
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
        <div className="flex justify-center items-center" ref={ref}>
          <Zoom clear>
            <p className="text-5xl flex justify-center items-center h-80 text-white">
              加入我们
            </p>
          </Zoom>
        </div>
      </ParallaxBanner>
      <Divider size="large"></Divider>
      <Zoom clear>
        <div className="flex justify-center">
          <div className="flex justify-center md:w-10/12 w-full flex-col md:flex-row">
            <div className="flex-1 justify-center flex flex-col">
              <div className="text-3xl flex px-11 py-3">
                <p className="text-blue-dark font-bold">走进咕噜铁汁大家庭</p>
              </div>
              <div className="text-lg py-2 flex">
                <p className="font-bold px-11 py-3">1.以员工为中心</p>
              </div>
              <p className="text-lg px-11 text-black-light">
                以员工的利益为出发点，为员工创设建立周期性沟通机制
              </p>
              <div className="text-lg flex">
                <p className="font-bold px-11 py-3">2.企业氛围良好</p>
              </div>
              <p className="text-lg px-11 text-black-light">
                员工之间沟通坦诚，相处氛围轻松愉快，工作环境舒适
              </p>
              <div className="text-lg flex px-11">
                <p className="font-bold py-3">3.工作时间自由</p>
              </div>
              <p className="text-lg px-11 text-black-light">
                弹性工作且制度灵活，可自主选择工作的具体时间安排
              </p>
              <div className="text-lg flex px-11">
                <p className="font-bold py-3">4.培训活动丰富</p>
              </div>
              <p className="text-lg px-11 text-black-light">
                建立培训交流平台，打造精通物联网和智能技术的人才
              </p>
            </div>
            <div className="text-3xl px-11 py-3 flex-1 flex flex-col">
              <p className="text-blue-dark font-bold md:text-center text-left md:pt-0 pt-24">
                联系我们
              </p>
              <div className="text-lg py-3 flex">
                <p className="font-bold md:pl-11 py-3 pl-0">合作电话:</p>
                <p className="text-black-light pl-3 py-3">18164810993</p>
              </div>
              <div className="text-lg py-3 flex">
                <p className="font-bold md:pl-11 py-3 pl-0">招聘邮箱:</p>
                <p className="text-black-light pl-3 py-3">gulubro_hr@163.com</p>
              </div>
              <div className="text-lg py-3 flex">
                <p className="font-bold md:pl-11 py-3 pl-0">官方邮箱:</p>
                <p className="text-black-light pl-3 py-3">
                  gulubro_tech@163.com
                </p>
              </div>
              <div className="text-lg py-3 flex">
                <p className="font-bold md:pl-11 py-3 pl-0">公司地址:</p>
                <p className="text-black-light pl-3 py-3">
                  浙江省杭州市西湖区学院路222-1号二层219室
                </p>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <Divider size="large"></Divider>
    </>
  );
});
