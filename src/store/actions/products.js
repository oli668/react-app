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

export const DECREASE_ITEM = "DECREASE_ITEM";
export const decreaseItemFromShoppingCart = (id) => {
  return {
    type: DECREASE_ITEM,
    payload: id,
  };
};
