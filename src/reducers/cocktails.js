import {
  SAVE_COCKTAILS_DETAILS,
  SAVE_COCKTAILS,
  SET_FILTER_COCKTAILS_ID,
} from "store/actions/cocktails.js";

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

export const cocktailsDetails = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COCKTAILS_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

const initialID = "*";
export const filterCocktails = (state = initialID, action) => {
  switch (action.type) {
    case SET_FILTER_COCKTAILS_ID:
      return action.payload;
    default:
      return state;
  }
};
