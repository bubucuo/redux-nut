import {increment} from "../store/counterSlice";
import store from "../store/rtkStore";
import {useLayoutEffect} from "react";
import {useReducer} from "react";

export default function ReduxToolkitPage(props) {
  const count = store.getState().counter.value;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h3>ReduxToolkitPage</h3>
      <button onClick={() => store.dispatch(increment())}>{count}</button>
    </div>
  );
}
