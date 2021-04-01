import {
  TOGGLE_SIDE_MENU,
  SET_LANGUAGE,
  TOGGLE_SHOPPING_CART_MENU,
} from "store/actions/header.js";

const initialState = {
  isShowSidemenu: false,
  isShowShoppingCartMenu: false,
  language: "CH",
};

export const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isShowSidemenu: !state.isShowSidemenu };
    case TOGGLE_SHOPPING_CART_MENU:
      return {
        ...state,
        isShowShoppingCartMenu: !state.isShowShoppingCartMenu,
      };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
