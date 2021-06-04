export const TOGGLE_SIDE_MENU = "TOGGLE_SIDE_MENU";
export const toggleSidemenu = () => ({ type: TOGGLE_SIDE_MENU });
export const TOGGLE_SHOPPING_CART_MENU = "TOGGLE_SHOPPING_CART_MENU";

export const toggleShoppingCartMenu = () => ({
  type: TOGGLE_SHOPPING_CART_MENU,
});

export const TOGGLE_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const toggleLoginModal = () => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const SET_LANGUAGE = "SET_LANGUAGE";
export const setLanguage = (payload) => {
  return {
    type: SET_LANGUAGE,
    payload: payload,
  };
};
