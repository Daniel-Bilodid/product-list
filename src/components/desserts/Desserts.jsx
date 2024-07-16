import React, { useState } from "react";
import "./desserts.scss";
import data from "../../data.json";
import Cart from "../cart/Cart";

function Desserts() {
  const [cartItems, setCartItems] = useState([]);
  let [total, setTotal] = useState();

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].count += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };
  const countAll = (item) => {
    setCartItems((prevItems) => {
      prevItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          setTotal((total += item.count * item.price));
        }
      });
    });
  };

  const handleIncrement = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      return updatedItems;
    });
  };

  const handleDecrement = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              count: cartItem.count > 1 ? cartItem.count - 1 : 0,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.count > 0);
      return updatedItems;
    });
  };

  const getItemCount = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.count : 0;
  };

  return (
    <div className="desserts">
      <h1 className="desserts__title">Desserts</h1>
      <div className="desserts__wrapper">
        <ul className="desserts__list">
          {data.map((item) => {
            const count = getItemCount(item.id);
            return (
              <li className="desserts__list-item" key={item.id}>
                <div className="desserts__img-wrapper">
                  <img className="desserts__img" src={item.img} alt="img" />
                  {count > 0 ? (
                    <div className="desserts__button-group">
                      <button
                        className="desserts__button"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <span>{count}</span>
                      <button
                        className="desserts__button"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="desserts__button"
                      onClick={() => handleAddToCart(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        fill="none"
                        viewBox="0 0 21 20"
                      >
                        <g fill="#C73B0F" clipPath="url(#a)">
                          <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                          <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M.333 0h20v20h-20z" />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Add to Cart
                    </button>
                  )}
                </div>

                <div className="desserts__text-wrapper">
                  <div className="desserts__text-type">{item.type}</div>
                  <div className="desserts__text-name">{item.name}</div>
                  <div className="desserts__text-price">${item.price}</div>
                </div>
              </li>
            );
          })}
        </ul>

        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Desserts;
