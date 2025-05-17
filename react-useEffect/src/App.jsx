import React, { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const api = `https://fakestoreapi.com/products`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log("Error fetching Data", err);
      });
  }, []);
  return (
    <>
      <h2>Product List</h2>
      {product.map((items, index) => (
        <p key={index}>{items.title}</p>
      ))}
    </>
  );
};

export default App;
