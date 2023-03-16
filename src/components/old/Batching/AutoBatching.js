import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
// import { flushSync } from "react-dom";

export default function AutoBatching() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const clickHandler = () => {
    setTimeout(() => {
      setName("ubedullah");
      setEmail("ubedullah.mohammed@tawfeeqtnt.com");
      setPhone(9848022338);
    }, 1000);

    // flushSync(() => {
    //   setName("ubedullah");
    // });

    // flushSync(() => {
    //   setEmail("ubedullah.mohammed@tawfeeqtnt.com");
    // });

    // flushSync(() => {
    //   setPhone(9848022338);
    // });
  };

  console.count("Rendered");
  // console.log("Rendered", name, email, phone);

  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>Automatic Batching in React18</Card.Header>
          <Card.Body>
            <Card.Text>
              <h6>Name: {name}</h6>
              <h6>Email: {email}</h6>
              <h6>Phone no: {phone}</h6>
            </Card.Text>
            <Button variant="primary" onClick={clickHandler}>
              Update All
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
