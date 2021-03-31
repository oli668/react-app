import {
  ADD_ITEM_SHOPPINGCART,
  REMOVE_ITEM_SHOPCART,
} from "store/actions/products.js";

const initialState = {
  items: [],
  lastUpdated: Date.now(),
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_SHOPPINGCART:
      return {
        ...state,
        items: [...state.items, action.payload],
        lastUpdated: Date.now(),
      };
    case REMOVE_ITEM_SHOPCART:
      console.log(state.items.filter((item) => action.payload === item.id));
      return {
        ...state,
        items: state.items.filter((item) => action.payload !== item.id),
        lastUpdated: Date.now(),
      };
    default:
      return state;
  }
};
