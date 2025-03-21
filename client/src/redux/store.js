import reducer from "./reducer";
import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  reducer,
  (applyMiddleware(...middleware))
);

export default store;