import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const initialState = {
  loading: true,
  error: "",
  posts: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }).catch(
          (error) => {
            dispatch({ type: "FETCH_ERROR" });
          }
        );
      });
  }, []);

  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>
            Fetching Data with useReducer and useEffect Hook
          </Card.Header>
          <Card.Body>
            <Card.Title>Fetching Data</Card.Title>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? state.error : null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default DataFetchingTwo;
