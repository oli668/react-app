import { combineReducers } from "redux";
import { header } from "./header";
import { cocktails } from "./cocktails";
export default combineReducers({
  header,
  cocktails,
});
