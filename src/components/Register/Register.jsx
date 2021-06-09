import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginModal } from "store/actions/header";
import { useClickOutside } from "hooks/useClickOutside";
import { useIntl } from "react-intl";

export const Register = () => {
  const modalRef = useRef();
  const [isFieldError, setFieldError] = useState(false);
  const [fieldValidationErrors, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const intl = useIntl();
  const dispatch = useDispatch();
  useClickOutside(modalRef, () => {
    dispatch(toggleLoginModal(false));
  });

  const onChange = (name, value) => {
    formInfo[name] = value;
    validateField(name, value);
    setFormInfo({ ...formInfo });
  };

  const createAccount = () => {
    console.log(formInfo);
  };

  const onBlur = (name, value) => {
    validateField(name, value);
  };

  const onFocus = () => {
    if (
      fieldValidationErrors.email.length > 0 ||
      fieldValidationErrors.password.length > 0 ||
      fieldValidationErrors.confirmPassword.length > 0
    ) {
      setFieldError(true);
    }
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "email is inValid";
        break;
      case "password":
        const passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "password too short";
        break;
      case "confirmPassword":
        const confirmPasswordValid = value === formInfo.password;
        fieldValidationErrors.confrimPassword = confirmPasswordValid
          ? ""
          : "must same as password you just input";
        break;
      default:
        break;
    }
    setFormError(fieldValidationErrors);
  };
  console.log(fieldValidationErrors);
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
              {intl.formatMessage({ id: "REGISTER" })}
            </h2>

            <div className="mt-10">
              <label className="block text-xs font-semibold text-gray-600 uppercase">
                {intl.formatMessage({ id: "ACCOUNT" })}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={intl.formatMessage({
                  id: "PLACEHOLDER_ACCOUNT_REGISTER",
                })}
                onBlur={(e) => {
                  onBlur(e.target.name, e.target.value);
                }}
                autoComplete="email"
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
              {isFieldError && fieldValidationErrors.email.length > 0 && (
                <span className="bg-warning">
                  {fieldValidationErrors.email}
                </span>
              )}
              <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                {intl.formatMessage({ id: "PASSWORD" })}
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder={intl.formatMessage({ id: "PLACEHOLDER_PASSWORD" })}
                autoComplete="current-password"
                onFocus={(e) => onFocus(e)}
                className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                onBlur={(e) => {
                  onBlur(e.target.name, e.target.value);
                }}
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
              {isFieldError && fieldValidationErrors.password.length > 0 && (
                <span className="text-red">
                  {fieldValidationErrors.password}
                </span>
              )}
              <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                {intl.formatMessage({ id: "CONFIRM_PASSWORD" })}
              </label>
              <input
                id="password"
                type="password"
                name="confirmPassword"
                onFocus={(e) => onFocus(e)}
                placeholder={intl.formatMessage({ id: "PLACEHOLDER_PASSWORD" })}
                autoComplete="current-password"
                className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                onBlur={(e) => {
                  onBlur(e.target.name, e.target.value);
                }}
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
              {isFieldError &&
                fieldValidationErrors.confirmPassword.length > 0 && (
                  <span className="bg-warning">
                    {fieldValidationErrors.confirmPassword}
                  </span>
                )}
              <button
                className="w-full py-3 mt-10 bg-black rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-black-light hover:shadow-none"
                onClick={(e) => createAccount(e.target.value)}
              >
                {intl.formatMessage({ id: "REGISTER_BUTTON" })}
              </button>
              <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a href="forgot-password" className="flex-2 underline">
                  {intl.formatMessage({ id: "FORGET_PASSWORD" })}
                </a>

                <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  {""}
                </p>

                <a href="register" className="flex-2 underline">
                  {intl.formatMessage({ id: "LOGIN_ACCOUNT" })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
