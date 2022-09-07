import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { memo } from "react";
import {
  increment,
  decrement,
  changeToValue,
} from "../../../store/counterSlice";
const Test = memo(function Test() {
  console.log("render test");
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(changeToValue(2))}>+2</button>
      <p style={{ color: "white" }}>{value}</p>
    </>
  );
});
export default Test;
