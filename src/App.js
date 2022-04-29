// import ReduxPage from "./pages/ReduxPage";
// import HooksPage from "./pages/HooksPage";
import { useState } from "react";
import ReactReduxHookPage from "./pages/ReactReduxHookPage";
// import ReactReduxPage from "./pages/ReactReduxPage";

export default function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <ReduxPage /> */}
      {/* <HooksPage /> */}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {/* <ReactReduxPage omg={count} /> */}

      <ReactReduxHookPage />
    </div>
  );
}
