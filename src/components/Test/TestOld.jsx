import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { memo } from "react";
import { addAsync } from "../../store/oldRedux/store";
const TestOld = memo(function Test() {
  console.log("render test");
  const cash = useSelector((state) => state.cashReducer.cash);
  const posts = useSelector((state) => state.postsReducer.posts);

  const dispatch = useDispatch();

  function addCash() {
    dispatch({ type: "ADD" });
  }
  function subCash() {
    dispatch({ type: "SUB" });
  }

  function addCustomer() {
    dispatch({ type: "ADD" });
  }
  function popCustomer() {
    dispatch({ type: "POP" });
  }
  function addAsyncCustomer() {
    dispatch(addAsync());
  }
  return (
    <>
      <button onClick={addCash}>+</button>
      <button onClick={subCash}>-</button>
      <button
        onClick={() => {
          dispatch({ type: "ADD_NUM", payload: Number(prompt()) });
        }}
      >
        +2
      </button>
      <p style={{ color: "white" }}>{cash}</p>\
      <br />
      <button onClick={addCustomer}>ADDCUSTOMER</button>
      <button onClick={addAsyncCustomer}>ADDCUSTOMER_ASYNC</button>
      <button onClick={popCustomer}>POPCUSTOMER</button>
      <div>
        {posts.map((item, index) => {
          return (
            <p style={{ color: "white" }} key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
});
export default TestOld;
