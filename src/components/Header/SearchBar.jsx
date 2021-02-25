import React, { useState } from "react";

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export const SearchBar = () => {
  const [isExtend, extendSearchBar] = useState(false);
  return (
    <div class="pt-3 transform transition delay-300 ease-in-out">
      <div
        class={`${
          isExtend ? "w-80" : "w-64"
        } transform transition delay-5000 ease-in-out bg-white flex items-center rounded-xl shadow-xl h-11`}
      >
        <input
          class="rounded-l-full w-full text-gray-700 leading-tight p-3 focus:outline-none"
          id="search"
          type="text"
          onFocus={() => {
            extendSearchBar(true);
          }}
          onBlur={() => {
            extendSearchBar(false);
          }}
          placeholder="Search"
        />
        <div class="p-4">
          <button class="bg-blue-100 text-black rounded-full p-2 hover:bg-blue-400 focus:outline-none w-7 h10 flex items-center justify-center">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
