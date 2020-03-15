import React from "react";
import { connect } from "react-redux";

import "./Counter.css";

function Counter(props) {
  const increase = () => {
    props.dispatch({ type: "INCREASE", name: props.name });
  };

  const decrease = () => {
    props.dispatch({ type: "DECREASE", name: props.name });
  };

  const reset = () => {
    props.dispatch({ type: "RESET", name: props.name });
  };

  return (
    <div className="counter">
      <h2>{props.name} counter</h2>
      <div>
        <button onClick={decrease}>-</button>
        <span className="count">{props[props.name]}</span>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={reset}>1</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    rows: state.rows,
    columns: state.columns
  };
}

export default connect(mapStateToProps)(Counter);
