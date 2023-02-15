import createNextState from "immer";

export default function createReducer(initialState, mapOrBuilderCallback) {
  let [actionsMap] = executeReducerBuilderCallback(mapOrBuilderCallback);
  console.log(
    "%c [ actionsMap ]-5",
    "font-size:13px; background:pink; color:#bf2c9f;",
    actionsMap
  );

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
