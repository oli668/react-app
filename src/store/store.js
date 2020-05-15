import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const enhancers = compose(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, enhancers);

export { rootReducer, enhancers };

export default store;
