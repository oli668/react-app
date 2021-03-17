import { SAVE_COCKTAILS } from "store/actions/cocktails.js";

const initialState = {
  data: [],
};

export const cocktails = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COCKTAILS:
      return [...action.payload];
    default:
      return state;
  }
};
