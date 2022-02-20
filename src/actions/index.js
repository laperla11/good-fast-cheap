export const toggleSwitch = (label) => ({
  type: "TOGGLE_SWITCH",
  label,
});

export const fetchJokeById = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://api.icndb.com/jokes/${id}`);
      const joke = await res.json();
      dispatch({ type: "SET_JOKE_BY_ID", payload: joke });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };
};

export const fetchRandomJoke = () => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`https://api.icndb.com/jokes/random`);
      const joke = await res.json();
      // accessing global state inside an action
      console.log("getter----", getState());
      dispatch({ type: "SET_JOKE", payload: joke });
      // we can use the same dispatch to dispatch another action
      dispatch(fetchJokeById(13));
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };
};
