import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchRandomJoke } from "../actions/";

const Jokes = () => {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state?.jokes?.joke?.value?.joke);
  const jokeById = useSelector((state) => state?.jokes?.jokeById?.value?.joke);
  useEffect(() => {
    dispatch(fetchRandomJoke());
  }, []);
  return (
    <div>
      <h1>Jokes</h1>
      <p>Random : {joke}</p>
      <p>{`Joke By Id : ${jokeById}`}</p>
    </div>
  );
};

export default Jokes;
