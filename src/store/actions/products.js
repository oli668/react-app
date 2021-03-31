export const ADD_ITEM_SHOPPINGCART = "ADD_ITEM_SHOPPINGCART";
export const addItemToShoppingCart = (data) => {
  return {
    type: ADD_ITEM_SHOPPINGCART,
    payload: data,
  };
};

export const REMOVE_ITEM_SHOPCART = "REMOVE_ITEM_SHOPPINGCART";
export const removeItemToShoppingCart = (data) => {
  return {
    type: REMOVE_ITEM_SHOPCART,
    payload: data,
  };
};
