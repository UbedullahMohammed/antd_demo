import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("").catch((error) => {
          setLoading(false);
          setPost({});
          setError("something went wrong");
        });
      });
  }, []);

  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>
            Fetching Data with useState and useEffect Hook
          </Card.Header>
          <Card.Body>
            <Card.Title>Fetching Data</Card.Title>
            {loading ? "Loading" : post.title}
            {error ? error : null}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default DataFetchingOne;
