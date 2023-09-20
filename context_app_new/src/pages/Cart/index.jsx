import React, { useContext } from "react";
import { PrimaryContext } from "./PrimaryContext";

const Cart = ({ children }) => {
  const { products } = useContext(PrimaryContext);

  // Filter products that are in the cart
  const cartProducts = products.filter((product) => product.inCart);

  return (
    <div>
      {/* Now you can use cartProducts */}
      {cartProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
