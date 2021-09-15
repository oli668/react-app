import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidemenu } from "store/actions/header";
import { setFilterCocktailsId } from "store/actions/cocktails";
import { useClickOutside } from "hooks/useClickOutside";
import { useIntl } from "react-intl";
import cryptoRandomString from "crypto-random-string";

export const NavBar = ({
  isSidemenu,
  navItems,
  dropdownMenuList,
  subMenuMap,
}) => {
  const intl = useIntl();
  const navRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const [currHoverBtn, showDropdownList] = useState("");
  const language = useSelector((store) => store.header.language).toLowerCase();
  useClickOutside(navRef, () => {
    showDropdownList(null);
  });
  const { isShowSidemenu } = useSelector((store) => {
    return store.header;
  });
  const handleSubMenuClick = (id, type) => {
    dispatch(setFilterCocktailsId(id, type));
  };
  return (
    <div>
      {!isSidemenu && (
        <div className="hidden space-x-4 md:flex">
          <button
            className="text-black focus:outline-none hover:px-2 py-2 text-xl font-bold"
            onClick={() => {
              history.push("/cocktails");
            }}
          >
            <span className="px-2 py-2 center">
              {intl.formatMessage({ id: "HOME" })}
            </span>
          </button>
          {navItems.map((item, id) => {
            return (
              <div key={id} className="">
                <button
                  name={item.name}
                  className="text-black focus:outline-none hover:px-2 py-2 text-xl font-bold"
                  onClick={() => {
                    dropdownMenuList
                      ? showDropdownList(item.id)
                      : history.push(`/${item.id}`);
                  }}
                >
                  <span className="px-2 py-2 center">
                    {item.content[language]}
                  </span>
                </button>
                <Transition
                  show={currHoverBtn === item.id && item.isSubmenu}
                  enter="transition-opacity duration-75"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div
                    onMouseEnter={() => showDropdownList(item.id)}
                    ref={navRef}
                    className={`absolute flex left-0 bg-blue-light w-full flex-row z-50`}
                  >
                    <div className="container w-2/3 flex mx-auto px-4 md;px-10 xl:px-10 2xl:px-0 bg-clip-content flex-wrap">
                      {dropdownMenuList &&
                        Object.keys(dropdownMenuList)
                          .map((key) =>
                            key === currHoverBtn ? dropdownMenuList[key] : []
                          )
                          .map((subMenu) => {
                            return Object.keys(subMenu).map((menu, menuKey) => {
                              return (
                                <div className="px-3 py-3" key={menuKey}>
                                  <div className="flex flex-col">
                                    <span className="border-black-light text-black border-b-2 font-bold uppercase">
                                      {subMenuMap && subMenuMap[menu][language]}
                                    </span>
                                    {subMenuMap &&
                                      subMenu[menu].map((item, listId) => {
                                        return (
                                          <div
                                            className="py-2 w-auto cursor-pointer"
                                            key={listId}
                                            onClick={(e) => {
                                              history.push(
                                                `/filtered-content/${menu}/${item.content[
                                                  "us"
                                                ]
                                                  .split(" ")
                                                  .join(
                                                    ""
                                                  )}/${cryptoRandomString({
                                                  length: 10,
                                                })}`
                                              );
                                              showDropdownList(null);
                                              handleSubMenuClick(item.id, menu);
                                            }}
                                          >
                                            <span
                                              className="border-black-light hover:shadow-lg 
                        text-white hover:text-white border-b-2 hover:border-b-2 hover:border-white font-small"
                                            >
                                              {item.content[language]}
                                            </span>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              );
                            });
                          })}
                    </div>
                  </div>
                </Transition>
              </div>
            );
          })}
        </div>
      )}
      {
        <div
          className={`z-50 fixed md:hidden top-0 bottom-0 overflow-y-scroll  ${
            isShowSidemenu ? "animate-sidebarOpen block" : "hidden"
          }  bg-gray-dark min-h-screen w-72`}
        >
          <button
            className="w-8 absolute right-2 top-2"
            onClick={() => {
              dispatch(toggleSidemenu());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            className="mt-7 ml-10 border-black border-b-2 hover:border-b-2 hover:border-gray text-black focus:outline-none hover:px-2 py-2 text-lg font-medium"
            onClick={() => {
              history.push("/");
            }}
          >
            <span className="py-2 center">
              {intl.formatMessage({ id: "HOME" })}
            </span>
          </button>
          <div className="ml-10">
            {dropdownMenuList &&
              subMenuMap &&
              Object.keys(dropdownMenuList)
                .map((key) => dropdownMenuList[key])
                .map((subMenu) => {
                  return Object.keys(subMenu).map((menu, menuKey) => {
                    return (
                      <div className="py-3" key={menuKey}>
                        <div className="flex flex-col">
                          <span className="font-bold uppercase">
                            {subMenuMap[menu][language]}
                          </span>
                          {subMenu[menu].map((item, listId) => {
                            return (
                              <div
                                className="py-1 px-2 w-auto cursor-pointer"
                                key={listId}
                                onClick={(e) => {
                                  dispatch(toggleSidemenu());
                                  history.push(
                                    `/filtered-content/${menu}/${item.content[
                                      "us"
                                    ]
                                      .split(" ")
                                      .join("")}/${cryptoRandomString({
                                      length: 10,
                                    })}`
                                  );
                                  showDropdownList(null);
                                  handleSubMenuClick(item.id, menu);
                                }}
                              >
                                <span
                                  className="hover:shadow-lg 
                        text-black-light hover:text-black font-small"
                                >
                                  {item.content[language]}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  });
                })}
          </div>
        </div>
      }
    </div>
  );
};
