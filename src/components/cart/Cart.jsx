import React from "react";
import "./cart.scss";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__title">Your Cart ({cartItems})</div>

        <div className="cart__name">Classic Tiramisu</div>

        <div className="cart__text-wrapper">
          <div className="cart__text-amount">
            <div className="cart__text-count">1x</div>
            <div className="cart__text-oldprice">@$5.50</div>
            <div className="cart__text-newprice">$5.50</div>
          </div>

          <button className="cart__text-cancel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#CAAFA7"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
              />
            </svg>
          </button>
        </div>

        <div className="cart__hr"></div>

        <div className="cart__order">
          <div className="cart__order-text">Order Total</div>

          <div className="cart__order-total">$46.50 </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
