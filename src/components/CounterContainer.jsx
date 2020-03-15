import React from "react";
import Counter from "./Counter";

function CounterContainer(props) {
  return (
    <div>
      <Counter name="rows" />
      <Counter name="columns" />
    </div>
  );
}

export default CounterContainer;
