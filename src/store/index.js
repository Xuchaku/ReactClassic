import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postsSlice";
const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
