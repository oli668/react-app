import { TOGGLE_SIDE_MENU, SET_LANGUAGE } from "store/actions/header.js";

const initialState = {
  isShowSidemenu: false,
  language: "CH",
};

export const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isShowSidemenu: !state.isShowSidemenu };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
