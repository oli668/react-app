import { LOGIN, LOGOUT } from "../actions/login";

const initalState = {
  login: "username"
};
export const login = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { ...action.payload });
    case LOGOUT:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
};
