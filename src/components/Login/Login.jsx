import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginModal } from "store/actions/header";
import { useClickOutside } from "hooks/useClickOutside";
import { useIntl } from "react-intl";

export const Login = () => {
  const modalRef = useRef();
  const intl = useIntl();
  const dispatch = useDispatch();
  useClickOutside(modalRef, () => {
    dispatch(toggleLoginModal(false));
  });
  return (
    <div className="z-50 w-full top-0 bottom-0 left-0 right-0 bg-overlay min-h-screen fixed">
      <div className="flex flex-col bg-gray-100 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            ref={modalRef}
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 relative
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <button
              className="w-8 absolute right-2 top-4"
              onClick={() => {
                dispatch(toggleLoginModal(false));
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
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              {intl.formatMessage({ id: "LOGIN" })}
            </h2>

            <form className="mt-10" method="POST">
              <label className="block text-xs font-semibold text-gray-600 uppercase">
                {intl.formatMessage({ id: "ACCOUNT" })}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={intl.formatMessage({ id: "PLACEHOLDER_ACCOUNT" })}
                autoComplete="email"
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />
              <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                {intl.formatMessage({ id: "PASSWORD" })}
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder={intl.formatMessage({ id: "PLACEHOLDER_PASSWORD" })}
                autoComplete="current-password"
                className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />
              <button
                type="submit"
                className="w-full py-3 mt-10 bg-black rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-black-light hover:shadow-none"
              >
                {intl.formatMessage({ id: "LOGIN_BUTTON" })}
              </button>
              <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a href="forgot-password" className="flex-2 underline">
                  {intl.formatMessage({ id: "FORGET_PASSWORD" })}
                </a>

                <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  {intl.formatMessage({ id: "OR" })}
                </p>

                <a href="register" className="flex-2 underline">
                  {intl.formatMessage({ id: "CREATE_ACCOUNT" })}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
