import React, { Component } from "react";
import store from "../store";
export default class ReduxPage extends Component {
  componentDidMount() {
    // 告诉redux，一旦state变化（一旦执行dispatch函数）,就执行的事件
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  add = () => {
    store.dispatch({ type: "ADD" });
  };

  minus = () => {
    // setTimeout(() => {
    //   store.dispatch({ type: "MINUS" });
    // }, 1000);

    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: "MINUS" });
      }, 1000);
    });
  };

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
