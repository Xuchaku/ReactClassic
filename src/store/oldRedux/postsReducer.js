const defaultState = {
  posts: [1, 2, 3, 4, 5],
};
const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        posts: [...state.posts, Math.floor(Math.random() * 100)],
      };
    case "ADD_ASYNC":
      return { ...state, posts: [...state.posts, 6] };
    case "POP": {
      return {
        ...state,
        posts: state.posts.filter(
          (post, index) => index !== state.posts.length - 1
        ),
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
