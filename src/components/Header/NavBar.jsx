import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import { navItems, dropdownMenuList } from "./data";
export const NavBar = () => {
  const history = useHistory();
  const [currHoverBtn, showDropdownList] = useState("");

  return (
    <div class="flex space-x-4">
      {navItems.map((item, id) => {
        return (
          <div key={id} class="relative">
            <button
              name={item.name}
              class="bg-blue-100 border-blue-100 border-b-2 hover:border-b-2 hover:border-black text-black focus:outline-none hover:px-2 py-2 text-lg font-medium"
              onMouseEnter={() => showDropdownList(item.id)}
              onMouseLeave={() => {
                showDropdownList(null);
              }}
              onClick={() => {
                history.push(`/${item.name}`);
              }}
            >
              <span class="px-2 py-2 center">{item.content}</span>
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
                  showDropdownList(null);
                }}
                class={`absolute bg-blue-100 left-1/2 transform -translate-x-2/4 w-64`}
              >
                {Object.keys(dropdownMenuList).map((key, id) => {
                  return (
                    <div class="p-1" key={id}>
                      {dropdownMenuList[key].map((item, listId) => {
                        return (
                          currHoverBtn === key && (
                            <div class="p-3 cursor-pointer " key={listId}>
                              <span class="border-blue-100 border-b-2 hover:border-b-2 hover:border-black font-medium">
                                {item.content}
                              </span>
                            </div>
                          )
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </Transition>
          </div>
        );
      })}
    </div>
  );
};
