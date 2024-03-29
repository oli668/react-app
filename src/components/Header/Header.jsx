/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  toggleSidemenu,
  toggleShoppingCartMenu,
  toggleLoginModal,
} from "store/actions/header";
import { NavBar } from "./NavBar";
import { navItems, dropdownMenuList, subMenuMap } from "./data";
import { SearchBar } from "./SearchBar";
import { SideMenu } from "components/ShoppingCart/SideMenu";
import { setLanguage } from "store/actions/header";
import us from "images/us.png";
import ch from "images/ch.png";
import logo from "images/logo.png";
export const Header = () => {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const history = useHistory();
  const { isShowSidemenu } = useSelector((store) => {
    return store.header;
  });

  const { items } = useSelector((store) => store.shoppingCart);
  return (
    <div className="bg-blue-dark relative">
      <div className="container w-full md:w-2/3 my-0 mx-auto px-2 2xl:px-0 bg-clip-content">
        <div className="px-2 md:px-0 flex-shrink-0 flex justify-between x-2 pt-3">
          <div className="md:m-0 my-0 flex-shrink-0 flex items-center x-2 px-1 w-full">
            <div className="flex items-start w-full">
              <div className="container w-full hidden md:block">
                <div className="flex">
                  <img
                    src={logo}
                    className="w-10 cursor-pointer mr-2"
                    style={{ filter: "invert(1)" }}
                    alt=""
                    onClick={() => {
                      history.push("/");
                    }}
                  ></img>
                  <div className="mx-2">
                    <NavBar
                      isSidemenu={false}
                      navItems={navItems}
                      subMenuMap={subMenuMap}
                      dropdownMenuList={dropdownMenuList}
                      textColor="text-white"
                      className="flex flex-row absolute"
                    ></NavBar>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-left md:hidden">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleSidemenu());
                  }}
                  className={`${
                    !isShowSidemenu ? "visible" : "invisible"
                  } inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:none`}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    className="block h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 top-full w-full xl:block xl:relative">
                  <SearchBar></SearchBar>
                </div>
              </div>
              <div className="my-auto flex justify-end xl:w-3/4 items-center">
                {isShowSearch && (
                  <div className="absolute left-0 top-full w-full xl:block xl:relative">
                    <SearchBar></SearchBar>
                  </div>
                )}
                {!isShowSearch && (
                  <div
                    onClick={() => {
                      setIsShowSearch(true);
                    }}
                  >
                    <svg
                      className="w-8 mx-2.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                )}
                <SideMenu></SideMenu>
                <div
                  className="my-auto relative cursor-pointer"
                  onClick={() => {
                    dispatch(toggleShoppingCartMenu());
                  }}
                >
                  <span
                    className={`absolute bottom-1/2 text-white ${
                      items.length > 9 ? "left-5" : "left-6"
                    }`}
                  >
                    {items.reduce((acc, obj) => {
                      return acc + obj.quantity;
                    }, 0)}
                  </span>
                  <svg
                    className="w-8 mx-2.5 my-auto text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div
                  className="my-auto relative cursor-pointer"
                  onClick={() => {
                    dispatch(toggleLoginModal());
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <button
                  className="w-8 cursor-pointer focus:outline-none ml-2 text-white"
                  onClick={() => {
                    dispatch(setLanguage(selectedLanguage ? "CH" : "US"));
                    setSelectedLanguage(!selectedLanguage);
                  }}
                >
                  {selectedLanguage ? (
                    <img alt="us-icon" src={us} />
                  ) : (
                    <img alt="us-icon" src={ch} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav className="md:flex py-3 md:flex-shrink-0 x-2 md:py-3"></nav>
      </div>
    </div>
  );
};
