import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
