import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, error: "", post: action.payload };

    case "FETCH_ERROR":
      return { loading: false, error: "SOMETHING WENT WRONG!", post: {} };

    default:
      return initialState;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
