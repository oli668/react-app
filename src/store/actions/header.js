export const TOGGLE_SIDE_MENU = "TOGGLE_SIDE_MENU";
export const toggleSidemenu = () => ({ type: TOGGLE_SIDE_MENU });
export const TOGGLE_SHOPPING_CART_MENU = "TOGGLE_SHOPPING_CART_MENU";

export const toggleShoppingCartMenu = () => ({
  type: TOGGLE_SHOPPING_CART_MENU,
});
export const SET_LANGUAGE = "SET_LANGUAGE";
export const setLanguage = (payload) => {
  return {
    type: SET_LANGUAGE,
    payload: payload,
  };
};
