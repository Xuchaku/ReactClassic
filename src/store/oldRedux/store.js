import { applyMiddleware, createStore } from "redux";
import cashReducer from "./cashReducer";
import postsReducer from "./postsReducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cashReducer,
  postsReducer,
});

export const addAsync = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: "ADD_ASYNC" });
    }, 2000);
  };
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
