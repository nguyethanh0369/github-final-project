import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, deleteItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} width="100" />
          <div>
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.totalPrice}</p>

            <div className="quantity-controls">
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>

            <button onClick={() => dispatch(deleteItem(item.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <h3>Total Amount: ${totalAmount}</h3>

      <button onClick={() => alert("Checkout coming soon!")}>
        Checkout
      </button>

      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;

