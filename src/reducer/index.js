const initialState = { good: false, cheap: false, fast: false };

const reducer = (state = initialState, action) => {
  const { label } = action;
  switch (action.type) {
    case "TOGGLE_SWITCH":
      const newState = { ...state, [label]: !state[label] };
      if (!state[label]) {
        if (label === "fast" && state.good) {
          return { ...newState, cheap: false };
        }
        if (label === "cheap" && state.fast) {
          return { ...newState, good: false };
        }
        if (label === "good" && state.cheap) {
          return { ...newState, fast: false };
        }
      }
      return newState;
    default:
      return state;
  }
};

export default reducer;
