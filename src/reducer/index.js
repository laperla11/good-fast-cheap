const initialState = { good: false, cheap: false, fast: false };

const reducer = (state = initialState, action) => {
  const { label } = action;
  switch (action.type) {
    case "TOGGLE_SWITCH":
      const newState = { ...state, [label]: !state[label] };
      if (!state[label]) {
        if (label === "fast" && state.cheap) {
          return { ...newState, good: false };
        }
        if (label === "cheap" && state.good) {
          return { ...newState, fast: false };
        }
        if (label === "good" && state.fast) {
          return { ...newState, cheap: false };
        }
      }
      return newState;
    default:
      return state;
  }
};

export default reducer;
