import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider } from "components/Divider/Divider";
import { addItemToShoppingCart } from "store/actions/products.js";
import { useIntl } from "react-intl";

export const ProductCard = (props) => {
  const language = useSelector((store) => store.header.language).toLowerCase();
  const dispatch = useDispatch();
  const intl = useIntl();
  const { items } = useSelector((store) => store.shoppingCart);
  const [isAddShopingCart, setAddedShowCart] = useState(() =>
    items.find((item) => item.id === props.id)
  );

  useEffect(() => {
    setAddedShowCart(items.find((item) => item.id === props.id));
  }, [items, props.id]);
  return (
    <div className="h-auto relative cursor-pointer md:min-w-card md:max-w-card min-w-card_md max-w-card_md">
      <div className="">
        <img
          alt="none"
          src={`https://7265-react-oli-8ggs2ctm06f2f6a4-1305182210.tcb.qcloud.la/products/${props.img}.webp`}
        ></img>
      </div>
      <Divider size="xs"></Divider>
      <div className="mx-auto">
        <div className="font-main_theme font-bold flex justify-between">
          <span>{props.name[language]}</span>
          <span className="flex" style={{ color: "#007600" }}>
            {isAddShopingCart && (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {isAddShopingCart && intl.formatMessage({ id: "ADD_TO_CART" })}
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            {language === "us" ? "$ " : "¥ "}
            {props.price[language]}
          </span>

          <button
            className="outline-none"
            onClick={() => {
              setAddedShowCart(true);
              dispatch(addItemToShoppingCart(props));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
