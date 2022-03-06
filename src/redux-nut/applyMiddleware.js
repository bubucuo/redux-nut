import compose from "./compose";

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    // todo 加强dispatch

    const midAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };

    const middlewareChain = middlewares.map((middleware) => middleware(midAPI));

    // 加强版的dispatch
    // 把所有的中间件的函数都执行了，同时还执行store.dispatch
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      // 加强版的dispatch
      dispatch,
    };
  };
}
