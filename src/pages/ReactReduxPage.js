import { Component } from "react";
// import { connect } from "react-redux";
import { connect } from "../react-redux-nut/";
// import { bindActionCreators } from "redux";
import { bindActionCreators } from "../redux-nut";

// HOC higer order Component，高阶组件:是个函数，接受组件作为参数，返回新的组件
export default connect(
  // mapStateToProps,
  //   (state, ownProps) => {
  //     console.log("ownProps", ownProps); //sy-log

  //     return state;
  //   }
  ({ count }) => ({ count }),
  // mapDispatchToProps function|object

  //   (dispatch) => {
  //     let creators = {
  //       add: () => ({ type: "ADD" }),
  //       minus: () => ({ type: "MINUS" }),
  //     };

  //     creators = bindActionCreators(creators, dispatch);

  //     return { dispatch, ...creators };
  //   }
  {
    add: () => ({ type: "ADD" }),
    minus: () => ({ type: "MINUS" }),
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props", this.props); //sy-log
      const { count, dispatch, add, minus } = this.props;
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <button
            onClick={() => {
              dispatch({ type: "ADD" });
            }}
          >
            dispatch:{count}
          </button>
          <button onClick={add}>add: {count}</button>
        </div>
      );
    }
  }
);
