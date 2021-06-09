import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "routes.js";

export const Card = (props) => {
  const history = useHistory();
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const language = useSelector((store) => store.header.language).toLowerCase();
  const { name, mood, taste } = props;
  return (
    <div
      className={`font-main_theme py-4 px-2 h-auto relative cursor-pointer md:min-w-card md:max-w-card min-w-card_md max-w-card_md`}
    >
      <div
        className={`relative group`}
        onMouseEnter={() => {
          setIsShowOverlay(true);
        }}
        onMouseLeave={() => {
          setIsShowOverlay(false);
        }}
        onClick={() => history.push(`${ROUTES.DETAILS}/${props._id}`)}
      >
        <img
          className="shadow-lg group-hover:opacity-20 rounded-t-md max-w-sm flex w-full opacity-100 h-auto transition: 0.5s ease-in-out"
          src={`https://7265-react-oli-8ggs2ctm06f2f6a4-1305182210.tcb.qcloud.la/cocktails-good/img-${props._id}.webp`}
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
              <div className="flex flex-wrap p-1">{taste[language]}</div>
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
              <div className="flex flex-wrap p-1">{mood[language]}</div>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-sm max-h-48 overflow-hidden shadow-3xl">
        <div className="flex justify-between py-4 px-4 bg-gray rounded-b-md fd-cl group-hover:opacity-25">
          <span className="block p-1 text-lg font-bold tracking-wide">
            {name[language]}
          </span>
        </div>
      </div>
    </div>
  );
};
