import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToShoppingCart,
  removeItemToShoppingCart,
  decreaseItemFromShoppingCart,
} from "store/actions/products.js";
import { useIntl } from "react-intl";

export const CheckoutPage = () => {
  const { items } = useSelector((store) => store.shoppingCart);
  const language = useSelector((store) => store.header.language).toLowerCase();
  const dispatch = useDispatch();
  const intl = useIntl();
  return (
    <>
      <div class="container flex flex-col lg:flex-row mt-8 justify-center">
        <form className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2 p-8">
          <p className="font-extrabold text-lg">
            {intl.formatMessage({ id: "SHIP_INFO" })}
          </p>
          <div className="">
            <label
              className="block text-base text-black font-bold my-2"
              for="cus_name"
            >
              {intl.formatMessage({ id: "SHIP_INFO_NAME" })}
            </label>
            <input
              className="w-full p-5 text-gray-700 bg-gray rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-base text-black my-2 font-bold"
              for="cus_email"
            >
              {intl.formatMessage({ id: "SHIP_INFO_EMAIL" })}
            </label>
            <input
              className="w-full p-5 text-black bg-gray rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-base text-black my-2 font-bold"
              for="cus_email"
            >
              {intl.formatMessage({ id: "SHIP_INFO_ADDRESS" })}
            </label>
            <input
              className="w-full p-5 text-black bg-gray rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Street"
              aria-label="Email"
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-base text-black my-2 font-bold"
              for="cus_email"
            >
              {intl.formatMessage({ id: "SHIP_INFO_CITY" })}
            </label>
            <input
              className="w-full p-5 text-black bg-gray rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="City"
              aria-label="Email"
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label
              className="block text-base text-black my-2 font-bold"
              for="cus_email"
            >
              {intl.formatMessage({ id: "SHIP_INFO_COUNTRY" })}
            </label>
            <input
              className="w-full p-5 text-black bg-gray rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Country"
              aria-label="Email"
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label
              className=" block text-base text-black my-2 font-bold"
              for="cus_email"
            >
              {intl.formatMessage({ id: "SHIP_INFO_ZIP" })}
            </label>
            <input
              className="w-full p-5 text-black bg-gray rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required=""
              placeholder="Zip"
              aria-label="Email"
            />
          </div>
          <p className="block text-black my-2 font-extrabold text-lg">
            {intl.formatMessage({ id: "SHIP_INFO_PAYMENT_TITLE" })}
          </p>
          <div className="">
            <label
              className="block text-base text-black my-2 font-bold"
              for="cus_name"
            >
              {intl.formatMessage({ id: "SHIP_INFO_CARD" })}
            </label>
            <input
              className="w-full p-5 text-black bg-gray rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required=""
              placeholder="Card Number MM/YY CVC"
              aria-label="Name"
            />
          </div>
          <div className="mt-4">
            <button
              className="p-5 text-black font-light tracking-wider bg-gray rounded"
              type="submit"
            >
              $3.00
            </button>
          </div>
        </form>
        <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2 p-8">
          <h3 className="font-extrabold text-lg">
            {intl.formatMessage({ id: "ORDER_SUMMARY" })} ({items.length})
          </h3>
          {items.map((item) => {
            return (
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-md w-full px-4 py-3">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div>
                        <img
                          className="w-28"
                          alt="none"
                          src={`https://7265-react-oli-8ggs2ctm06f2f6a4-1305182210.tcb.qcloud.la/products/${item.img}.webp`}
                        ></img>
                      </div>
                      <div className="mx-3">
                        <h3 className="text-sm text-gray-600">
                          {item.name[language]}
                        </h3>
                        <div className="flex items-center mt-2">
                          <button
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                            onClick={() => {
                              dispatch(decreaseItemFromShoppingCart(item.id));
                            }}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </button>
                          <span className="text-gray-700 mx-2">
                            {item.quantity}
                          </span>
                          <button
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                            onClick={() => {
                              dispatch(addItemToShoppingCart(item));
                            }}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between flex-col">
                      <span className="text-gray-600">
                        {language === "us" ? "$ " : "¥ "}
                        {item.price[language]}
                      </span>
                      <div
                        className="flex items-center justify-between"
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
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-2/3 flex justify-start">
            <div className="font-extrabold text-lg">
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
        </div>
      </div>
    </>
  );
};
