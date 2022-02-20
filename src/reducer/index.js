import { combineReducers } from "redux";

const initialState = { good: false, cheap: false, fast: false };

const toggleReducer = (state = initialState, action) => {
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

const jokeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_JOKE":
      return { ...state, joke: action.payload };
    case "SET_JOKE_BY_ID":
      return { ...state, jokeById: action.payload };

    default:
      return state;
  }
};

// combined the reducers
export const reducers = combineReducers({
  toggle: toggleReducer,
  jokes: jokeReducer,
});
