// import { createStore, applyMiddleware, combineReducers } from "redux";
import { createStore, applyMiddleware, combineReducers } from "../redux-nut";

// import thunk from "redux-thunk";
// import logger from "redux-logger";
import promise from "redux-promise";

// 定义了store修改规则
export function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

// 创建store
const store = createStore(
  // countReducer,
  combineReducers({
    count: countReducer,
  }),
  applyMiddleware(
    promise,
    thunk
    //  logger
  )
);

export default store;

function logger({ getState, dispatch }) {
  return (next) => (action) => {
    console.log("-----------------------"); //sy-log

    console.log(action.type + "执行了"); //sy-log

    const prevState = getState();

    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);

    // 等状态值修改之后，再执行getState，拿到了新的状态值
    const nextState = getState();

    console.log("next state", prevState); //sy-log

    console.log("-----------------------"); //sy-log

    return returnValue;
  };
}

function thunk({ getState, dispatch }) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
