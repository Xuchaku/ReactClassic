import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mockdata/postData";
import { TOTAL_ITEMS_ON_PAGE } from "../../consts/Consts";
import SERVICE from "../../API/PostService";
import { renameKey } from "../../utils/Utils";

const initialState = {
  posts: data,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePostHandler(state, action) {
      const changedPosts = state.posts.filter((currentPost) => {
        return action.payload.id !== currentPost.id;
      });
      state.posts = changedPosts;
    },
    addPostHandler(state, action) {
      state.posts = [...state.posts, action.payload];
    },
    changePostHandler(state, action) {
      const changedPosts = [...state.posts];
      const postId = changedPosts.findIndex((post) => {
        return post.id == action.payload.id;
      });
      changedPosts[postId].text = action.payload.content;
      state.posts = changedPosts;
    },
    setPosts(state, action) {
      state.posts = [...state.posts, ...action.payload];
    },
  },
});

export const fetchPosts = (amount) => async (dispatch) => {
  const posts = await SERVICE.getPosts(TOTAL_ITEMS_ON_PAGE, amount);
  console.log(posts);
  const newPosts = renameKey(posts, "body", "description");
  dispatch(setPosts(newPosts));
};

export default postsSlice.reducer;
export const {
  deletePostHandler,
  addPostHandler,
  changePostHandlerk,
  setPosts,
} = postsSlice.actions;
