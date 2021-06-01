import { combineReducers } from "redux";
import { header } from "./header";
import { cocktails, cocktailsDetails } from "./cocktails";
import { shoppingCart } from "./products";
export default combineReducers({
  header,
  cocktails,
  cocktailsDetails,
  shoppingCart,
});
