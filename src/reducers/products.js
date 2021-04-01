import {
  ADD_ITEM_SHOPPINGCART,
  REMOVE_ITEM_SHOPCART,
  DECREASE_ITEM,
} from "store/actions/products.js";

const initialState = {
  items: [],
  lastUpdated: Date.now(),
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_SHOPPINGCART:
      const itemsId = state.items.map((item) => item.id);
      const newItems = itemsId.includes(action.payload.id)
        ? state.items.map((item) =>
            action.payload.id === item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        items: newItems,
        lastUpdated: Date.now(),
      };
    case REMOVE_ITEM_SHOPCART:
      return {
        ...state,
        items: state.items.filter((item) => action.payload !== item.id),
        lastUpdated: Date.now(),
      };
    case DECREASE_ITEM:
      const items = state.items.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity >= 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item, quantity: 0 };
          }
        } else {
          return item;
        }
      });
      const updatedItems = items.filter((item) => {
        return item.quantity !== 0;
      });
      return {
        ...state,
        items: updatedItems,
        lastUpdated: Date.now(),
      };
    default:
      return state;
  }
};
