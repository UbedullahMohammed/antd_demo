// import { useDeferredValue } from "react";

function ProductList({ products }) {
  // const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {products.map((product, i) => (
        <li className="my-2" key={i}>
          {product}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
