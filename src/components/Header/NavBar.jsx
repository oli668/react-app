import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import { navItems, dropdownMenuList } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidemenu, setLanguage } from "store/actions/header";
import { useIntl } from "react-intl";

export const NavBar = ({ isSidemenu }) => {
  const intl = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();
  const [currHoverBtn, showDropdownList] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const { isShowSidemenu } = useSelector((store) => {
    return store.header;
  });

  return (
    <div>
      {!isSidemenu && (
        <div className="hidden space-x-4 md:flex">
          {navItems.map((item, id) => {
            return (
              <div key={id} className="relative">
                <button
                  name={item.name}
                  className="bg-gray border-gray border-b-2 hover:border-b-2 hover:border-black text-black focus:outline-none hover:px-2 py-2 text-lg font-medium"
                  onMouseEnter={() => showDropdownList(item.id)}
                  onMouseLeave={() => {
                    showDropdownList(null);
                  }}
                  onClick={() => {
                    history.push(`/${item.name}`);
                  }}
                >
                  <span className="px-2 py-2 center">{item.content}</span>
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
                    onMouseLeave={() => {
                      showDropdownList();
                    }}
                    className={`absolute flex bg-gray left-1/2 transform -translate-x-2/4 w-auto flex-row z-50`}
                  >
                    {Object.keys(dropdownMenuList)
                      .map((key) =>
                        key === currHoverBtn ? dropdownMenuList[key] : []
                      )
                      .map((subMenu) => {
                        return Object.keys(subMenu).map((menu, menuKey) => {
                          return (
                            <div className="px-3 py-3" key={menuKey}>
                              <div className="flex flex-col">
                                <span className="border-gray border-b-2 font-bold uppercase">
                                  {menu}
                                </span>
                                {subMenu[menu].map((item, listId) => {
                                  return (
                                    <div
                                      className="py-2 w-auto cursor-pointer"
                                      key={listId}
                                    >
                                      <span
                                        className="border-gray hover:shadow-lg 
                        text-black-light hover:text-black border-b-2 hover:border-b-2 hover:border-black font-small"
                                      >
                                        {item.content}
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
                </Transition>
              </div>
            );
          })}
          <button
            className="bg-gray border-gray border-b-2 hover:border-b-2 hover:border-black text-black focus:outline-none hover:px-2 py-2 text-lg font-medium"
            onClick={() => {
              dispatch(setLanguage(selectedLanguage ? "CH" : "US"));
              setSelectedLanguage(!selectedLanguage);
            }}
          >
            <span className="px-2 py-2 center">
              {intl.formatMessage({ id: "LANGUAGES" })}
            </span>
          </button>
        </div>
      )}
      {
        <div
          className={`z-50 absolute md:hidden left-0  ${
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
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      }
    </div>
  );
};
