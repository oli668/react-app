import React, { useState } from "react";
import { useSelector } from "react-redux";
export const Card = (props) => {
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const language = useSelector((store) => store.header.language);
  const { name, mood, img, taste } = props;
  return (
    <div
      className={`py-4 px-2 h-auto relative cursor-pointer md:min-w-card md:max-w-card min-w-card_md max-w-card_md`}
    >
      <div
        className={`relative group`}
        onMouseEnter={() => {
          setIsShowOverlay(true);
        }}
        onMouseLeave={() => {
          setIsShowOverlay(false);
        }}
      >
        <img
          className="shadow-lg group-hover:opacity-20 rounded-t-md max-w-sm flex w-full opacity-100 h-auto transition: 0.5s ease-in-out"
          src={require("images/4.jpg")}
          alt="none"
        />
        <div className="absolute top-1/2 left-1/2 opacity-0 "></div>
        {isShowOverlay && (
          <div className="text-sm absolute top-4 md:top-10 left-6">
            {/* <div className="flex w-full">
              <span className="p-1 min-w-10 whitespace-nowrap">基酒:</span>
              <div className="flex flex-wrap p-1">
                <span className="text-sm tracking-wide block font-sans px-1">
                  {base}
                </span>
              </div>
            </div> */}
            {/* <div className="flex w-full">
              <span className="p-1 min-w-10 whitespace-nowrap">材料:</span>
              <div className="flex flex-wrap p-1">
                {side.map((item, id) => {
                  return (
                    <span
                      key={id}
                      className="text-sm tracking-wide font-sans px-1"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div> */}
            <div className="flex w-full">
              <span className="p-1 min-w-10 whitespace-nowrap">味道:</span>
              <div className="flex flex-wrap p-1">
                {taste.map((item, id) => {
                  return (
                    <span
                      key={id}
                      className="text-sm tracking-wide block font-sans px-1"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            {/* <div className="flex">
              <span className="p-1 min-w-10 whitespace-nowrap">类型:</span>
              <div className="flex flex-wrap p-1">
                <span className="text-sm tracking-wide block font-sans px-1">
                  {type}
                </span>
              </div>
            </div> */}
            <div className="flex w-full">
              <span className="p-1 min-w-10 whitespace-nowrap">心情:</span>
              <div className="flex flex-wrap p-1">
                {mood.map((item, id) => {
                  return (
                    <span
                      key={id}
                      className="text-sm tracking-wide block font-sans px-1"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-sm max-h-48 overflow-hidden">
        <div className="py-4 px-4 bg-gray rounded-b-md fd-cl group-hover:opacity-25">
          <span className="block p-1 text-lg text-gray-800 font-bold tracking-wide">
            {language === "CH" ? name.ch : name.en}
          </span>
        </div>
      </div>
    </div>
  );
};
