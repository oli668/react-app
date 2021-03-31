import { combineReducers } from "redux";
import { header } from "./header";
import { cocktails } from "./cocktails";
import { shoppingCart } from "./products";
export default combineReducers({
  header,
  cocktails,
  shoppingCart,
});
