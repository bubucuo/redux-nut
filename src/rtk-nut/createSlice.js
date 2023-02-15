import {createReducer} from "@reduxjs/toolkit";
import createAction from "./createAction";

export default function createSlice({name, initialState, reducers}) {
  const reducerNames = Object.keys(reducers);

  const actionCreators = {};

  const sliceCaseReducersByType = {};

  reducerNames.forEach((reducerName) => {
    const sliceCaseReducersByType = reducers[reducerName];

    const type = `${name}/${reducerName}`;

    sliceCaseReducersByType[type] = sliceCaseReducersByType;
    actionCreators[reducerName] = createAction(type);
  });

  function buildReducer() {
    return createReducer(initialState, (builder) => {
      for (let key in sliceCaseReducersByType) {
        builder.addCase(key, sliceCaseReducersByType[key]);
      }
    });
  }

  let _reducer;

  return {
    name,
    actions: actionCreators,
    reducer: (state, action) => {
      if (!_reducer) _reducer = buildReducer();

      return _reducer(state, action);
    },
  };
}
