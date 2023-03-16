import { useState, useTransition } from "react";
import { generateProducts } from "./data";
import ProductList from "./ProductList";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

const UseTransitionHookOne = () => {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    // setFilterTerm(event.target.value);
  }

  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>UseTransition Hook Ex-1 in React18</Card.Header>
          <Card.Body>
            <Card.Title>Search Form</Card.Title>
            <Form.Control
              size="lg"
              onChange={updateFilterHandler}
              type="text"
              placeholder="Large text"
            />
            {isPending && <p>Updating List...</p>}
            <ProductList products={filteredProducts} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UseTransitionHookOne;
