import React from "react";

function index(props: any) {
  return (
    <div>
      <p>{props.value}</p>
      <button onClick={props.onIncrement}>increment</button>
      <button onClick={props.onDecrement}>decrement</button>
    </div>
  );
}

export default index;
