const defaultState = {
  cash: 0,
};

const NUM = 10;
const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cash: state.cash + NUM };
    case "SUB":
      return { ...state, cash: state.cash - NUM };
    case "ADD_NUM":
      return { ...state, cash: state.cash + action.payload };
    default:
      return state;
  }
};

export default cashReducer;
