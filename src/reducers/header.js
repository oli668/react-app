import {
  TOGGLE_SIDE_MENU,
  SET_LANGUAGE,
  TOGGLE_SHOPPING_CART_MENU,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_COCKTAILS_PAGE,
} from "store/actions/header.js";

const initialState = {
  isShowSidemenu: false,
  isShowShoppingCartMenu: false,
  isShowLoginModal: false,
  isShowCocktailsPage: false,
  language: "CH",
};

export const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isShowSidemenu: !state.isShowSidemenu };
    case TOGGLE_COCKTAILS_PAGE:
      return {
        ...state,
        isShowCocktailsPage: !state.isShowCocktailsPage,
      };
    case TOGGLE_SHOPPING_CART_MENU:
      return {
        ...state,
        isShowShoppingCartMenu: !state.isShowShoppingCartMenu,
      };
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isShowLoginModal: !state.isShowLoginModal,
      };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
