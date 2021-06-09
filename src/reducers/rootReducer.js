import { combineReducers } from "redux";
import { header } from "./header";
import { filterCocktails, cocktailsDetails } from "./cocktails";
import { shoppingCart } from "./products";
export default combineReducers({
  header,
  filterCocktails,
  cocktailsDetails,
  shoppingCart,
});
