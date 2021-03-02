import { TOGGLE_SIDE_MENU } from "store/actions/header.js";

const initialState = {
  isShowSidemenu: false,
};

export const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isShowSidemenu: !state.isShowSidemenu };
    default:
      return state;
  }
};
