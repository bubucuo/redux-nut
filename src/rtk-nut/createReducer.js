import createNextState from "immer";

export default function createReducer(initialState, mapOrBuilderCallback) {
  let [actionsMap] = executeReducerBuilderCallback(mapOrBuilderCallback);

  function reducer(state = initialState, action) {
    const caseReducers = [actionsMap[action.type]];

    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        return createNextState(previousState, (draft) => {
          return caseReducer(draft, action);
        });
      }

      return previousState;
    }, state);
  }

  return reducer;
}

function executeReducerBuilderCallback(mapOrBuilderCallback) {
  // counter/increment: reducer
  //
  const actionsMap = {};

  const builder = {
    addCase: (type, reducer) => {
      actionsMap[type] = reducer;
      return builder;
    },
  };

  mapOrBuilderCallback(builder);

  return [actionsMap];
}
