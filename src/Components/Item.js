import React, { useContext } from "react";
import { CartContext } from "./Context";

const Item = (props) => {
  const cart = useContext(CartContext);
 
  return (
    <div>
      <h2>{props.name}</h2>
      <h5>Price: Rs {props.price} </h5>
      <button
        onClick={() =>
          cart.setItem([...cart.Item, { name: props.name, price: props.price }])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
