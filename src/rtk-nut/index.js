import {combineReducers, createStore} from "redux";
import createSlice from "./createSlice";

export function configureStore({reducer}) {
  const rootReducer = combineReducers(reducer);
  const store = createStore(rootReducer);

  return store;
}

export {createSlice};
