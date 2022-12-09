import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { productListRedecur } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListRedecur,
});

console.log(`this is ${reducer}`);

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
