/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidemenu } from "store/actions/header";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  const dispatch = useDispatch();
  const { isShowSidemenu } = useSelector((store) => {
    return store.header;
  });
  return (
    <div class="bg-gray relative">
      <div class="container mx-auto px-4 md;px-10 xl:px-16 2xl:px-16 bg-clip-content">
        <div class="px-2 md:px-0 flex-shrink-0 flex justify-between x-2 pt-3">
          <div class="md:m-0 my-0 mx-auto flex-shrink-0 flex items-center x-2 pt-3 px-1">
            <img
              class="lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <div class="text-2xl px-3">Cocktails 鸡尾酒</div>
          </div>
          <div class="hidden md:block">
            <SearchBar></SearchBar>
          </div>
        </div>
        <nav class="md:flex py-3 md:flex-shrink-0 x-2 md:py-3">
          <div>
            <div class="relative flex items-start justify-between">
              <div class="flex justify-between md:hidden w-full">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleSidemenu());
                  }}
                  class={`${
                    !isShowSidemenu ? "visible" : "invisible"
                  } inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:none`}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div class="md:hidden">
                  <SearchBar></SearchBar>
                </div>
              </div>
              <div class="flex-auto flex items-center justify-center md:items-stretch md:justify-start">
                <div class="flex-1 flex-row hidden md:flex">
                  <NavBar isSidemenu={false} class="flex flex-row"></NavBar>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
