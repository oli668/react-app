import React, { useState } from "react";

export const Card = (props) => {
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const { name, mood, base, img, side, type, taste } = props;
  return (
    <div class={`py-6 px-4 h-auto relative cursor-pointer`}>
      <div
        class={`relative group`}
        onMouseEnter={() => {
          setIsShowOverlay(true);
        }}
        onMouseLeave={() => {
          setIsShowOverlay(false);
        }}
      >
        <img
          class="shadow-lg group-hover:opacity-20 rounded-t-md max-w-sm flex w-full opacity-100 h-auto transition: 0.5s ease-in-out"
          src={require(`${img}`)}
          alt="none"
        />
        <div class="absolute top-1/2 left-1/2 opacity-0 "></div>
        {isShowOverlay && (
          <div class="text-sm absolute top-10 left-6">
            <div class="flex w-full">
              <span class="p-1 min-w-10 whitespace-nowrap">基酒:</span>
              <div class="flex flex-wrap p-1">
                <span class="text-sm tracking-wide block font-sans px-1">
                  {base}
                </span>
              </div>
            </div>
            <div class="flex w-full">
              <span class="p-1 min-w-10 whitespace-nowrap">材料:</span>
              <div class="flex flex-wrap p-1">
                {side.map((item, id) => {
                  return (
                    <span key={id} class="text-sm tracking-wide font-sans px-1">
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            <div class="flex w-full">
              <span class="p-1 min-w-10 whitespace-nowrap">味道:</span>
              <div class="flex flex-wrap p-1">
                {taste.map((item, id) => {
                  return (
                    <span
                      key={id}
                      class="text-sm tracking-wide block font-sans px-1"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            <div class="flex">
              <span class="p-1 min-w-10 whitespace-nowrap">类型:</span>
              <div class="flex flex-wrap p-1">
                <span class="text-sm tracking-wide block font-sans px-1">
                  {type}
                </span>
              </div>
            </div>
            <div class="flex w-full">
              <span class="p-1 min-w-10 whitespace-nowrap">心情:</span>
              <div class="flex flex-wrap p-1">
                {mood.map((item, id) => {
                  return (
                    <span
                      key={id}
                      class="text-sm tracking-wide block font-sans px-1"
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
      <div class="max-w-sm max-h-48 overflow-hidden">
        <div class="py-4 px-4 bg-gray rounded-b-md fd-cl group-hover:opacity-25">
          <span class="block p-1 text-lg text-gray-800 font-bold tracking-wide">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
