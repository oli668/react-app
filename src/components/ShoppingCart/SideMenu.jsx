import React from "react";
import { toggleShoppingCartMenu } from "store/actions/header";
import {
  addItemToShoppingCart,
  removeItemToShoppingCart,
  decreaseItemFromShoppingCart,
} from "store/actions/products.js";
import { useSelector, useDispatch } from "react-redux";
import { Divider } from "components/Divider/Divider";
import { useIntl } from "react-intl";

export const SideMenu = (props) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const language = useSelector((store) => store.header.language).toLowerCase();
  const { items } = useSelector((store) => store.shoppingCart);
  console.log(items);
  const { isShowShoppingCartMenu } = useSelector((store) => {
    return store.header;
  });
  return (
    <div
      className={`z-50 fixed top-0 right-0 ${
        isShowShoppingCartMenu ? "animate-sidebarOpen block" : "hidden"
      }  bg-gray-dark min-h-screen h-screen w-full max-w-side_menu`}
    >
      <button
        className="w-8 absolute right-2 top-4"
        onClick={() => {
          dispatch(toggleShoppingCartMenu());
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
      <Divider size="md"></Divider>
      <div
        className={`h-2/3 overflow-scroll ${
          items.length === 0 ? "justify-center items-center flex" : ""
        }`}
      >
        {items.map((item, key) => {
          return (
            <div key={key} className="w-full pt-8 px-w shadow-sm px-2">
              <div className="bg-white p-2 rounded-md flex">
                <div className="w-1/3">
                  <img
                    className="w-full"
                    alt="none"
                    src={`https://7265-react-oli-8ggs2ctm06f2f6a4-1305182210.tcb.qcloud.la/products/${item.img}.webp`}
                  ></img>
                </div>
                <div className="w-2/3 flex flex-col">
                  <div
                    className="pt-5 pl-2 mx-2 pb-2 flex justify-between"
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    <span>{item.name[language]}</span>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(removeItemToShoppingCart(item.id));
                      }}
                    >
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="flex flex-col">
                      <span className="text-xs">{item.volume}</span>
                      <span>
                        {language === "us" ? "$" : "¥"}
                        {item.price[language]}
                      </span>
                    </div>
                    <div className="flex items-center m-2">
                      <button
                        className="p-2"
                        onClick={() => {
                          dispatch(decreaseItemFromShoppingCart(item.id));
                        }}
                      >
                        <span>-</span>
                      </button>
                      <div>
                        <span className="">{item.quantity}</span>
                      </div>
                      <button
                        className="p-2"
                        onClick={() => {
                          dispatch(addItemToShoppingCart(item));
                        }}
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          {items.length === 0 && (
            <span className="text-4xl font-bold">
              {intl.formatMessage({ id: "EMPTY_CART" })}
            </span>
          )}
        </div>
      </div>
      <div className="border-black-light border-t-2 flex flex-col absolute bottom-0 w-full">
        <div className="flex w-full justify-center items-center border-b-2 h-28">
          <div className="mx-3 w-2/3 flex justify-start">
            <div className="mx-3 font-extrabold text-lg">
              {intl.formatMessage({ id: "PRODUCT_SUBTOTAL" })}
            </div>
            <div className="font-extrabold text-lg">
              {language === "us" ? "$" : "¥"}{" "}
              {items
                .reduce((acc, curr) => {
                  return acc + parseInt(curr.price[language]) * curr.quantity;
                }, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="w-28 mx-3 flex justify-center p-4 rounded-md cursor-pointer bg-white">
            <span className="text-center font-extrabold">
              {intl.formatMessage({ id: "CHECK_OUT" })}
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-2/3 justify-start mx-3"></div>
          <div className="w-28 text-center mx-3 my-3 font-extrabold p-4  justify-center rounded-md cursor-pointer bg-white">
            <span className="">
              {intl.formatMessage({ id: "CONTINUE_SHOPPING" })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
