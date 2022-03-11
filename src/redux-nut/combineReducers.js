export default function combineReducers(reducers) {
  // 返回一个总的reducer (prevState, action)=>nextState
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChanged = false;

    for (const key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    }

    // {a:1, b:1} {a:1}
    hasChanged =
      hasChanged || Object.keys(nextState).length !== Object.keys(state).length;

    return hasChanged ? nextState : state;
  };
}
