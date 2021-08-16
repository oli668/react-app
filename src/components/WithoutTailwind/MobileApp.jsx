/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Icon from "images/icon.png";
import Icon2 from "images/icon2.png";
import Icon3 from "images/icon3.png";
import Icon4 from "images/icon4.png";
export const MobileAppUI = () => {
  return (
    <div className="min-w-screeflex flex-col items-center justify-center px-5 shadow-inner border-black-light hidden md:block">
      <div
        className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex w-full md:w-3/4"
        style={{
          height: "736px",
          width: "435px",
        }}
      >
        <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
          <div className="mb-3">
            <h1 className="text-3xl font-bold">今日新闻</h1>
            <p className="text-sm text-gray-500 uppercase font-bold">
              2021年8月6日
            </p>
          </div>
          <div className="mb-5">
            <a
              href="#"
              className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-48"></div>
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                草莓音乐节演出举办日程
              </h2>
              <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                <div className="flex-1 flex items-center">
                  <div
                    className="rounded-full w-8 h-8 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/women/74.jpg) center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="text-white">艾丽 比尔</div>
                </div>
                <div>
                  <p className="mdi mdi-thumb-up text-white">18</p>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-5">
            <a
              href="#"
              className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-48"></div>
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                杭州最好的鸡尾酒吧
              </h2>
              <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                <div className="flex-1 flex items-center">
                  <div
                    className="rounded-full w-8 h-8 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/women/55.jpg) center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="text-white">卡特琳 贝拉</div>
                </div>
                <div>
                  <p className="mdi mdi-thumb-up text-white">7</p>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-3">
            <h1 className="text-3xl font-bold">昨日最佳</h1>
            <p className="text-sm text-gray-500 uppercase font-bold">
              2021年8月5日
            </p>
          </div>
          <div className="flex -mx-1 mb-5">
            <div className="w-1/2 px-1">
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  专业DJ教你如何打碟
                </h3>
              </a>
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSsize: "cover",
                }}
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  今年十个最佳的旅游景点
                </h3>
              </a>
            </div>
            <div className="w-1/2 px-1">
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  奥利维亚教你如何画最潮的妆
                </h3>
              </a>
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  女子网球决赛在北京如期举行
                </h3>
              </a>
            </div>
          </div>
          <div className="mb-3">
            <h1 className="text-3xl font-bold">人们都在看</h1>
          </div>
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div
                className="block h-24 w-2/5 rounded overflow-hidden"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  运动
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  蝶式游泳奥运冠军的艰苦训练经历
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div
                    className="rounded-full w-5 h-5 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/men/41.jpg) center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div>杰克 瑞尔</div>
                </div>
              </div>
            </a>
          </div>
          <hr className="border-gray-200 my-3" />
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div
                className="block h-24 w-2/5 rounded overflow-hidden"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  艺术
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  那些城市街头的最美涂鸦
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div
                    className="rounded-full w-5 h-5 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/men/63.jpg) center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div>凯文 杰克逊</div>
                </div>
              </div>
            </a>
          </div>
          <hr className="border-gray-200 my-3" />
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div
                className="block h-24 w-2/5 rounded overflow-hidden"
                style={{
                  background: `url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  音乐
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  500RMB价位能买到的性价比最高的耳机
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div
                    className="rounded-full w-5 h-5 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/women/11.jpg) center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div>罗琳 李</div>
                </div>
              </div>
            </a>
          </div>
          <hr className="border-gray-200 my-3" />
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div
                className="block h-24 w-2/5 rounded overflow-hidden"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1511068797325-6083f0f872b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  世界
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  世界人口最密集的城市
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div
                    className="rounded-full w-5 h-5 mr-3"
                    style={{
                      background:
                        "url(https://randomuser.me/api/portraits/women/74.jpg) center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div>艾丽 比尔</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-white absolute bottom-0 w-full border-gray-200 flex">
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-xl leading-8">
                <img src={Icon} alt="" className="w-8" />
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-xl leading-8">
                <img src={Icon2} alt="" className="w-8" />
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-xl leading-8">
                <img src={Icon3} alt="" className="w-8" />
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-xl leading-8">
                <img src={Icon4} alt="" className="w-8" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
