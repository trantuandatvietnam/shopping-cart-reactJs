import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../Colors";
import { DataContext } from "../Data/DataProvider";
import Sizes from "../Sizes";
import CartEmpty from "./CartEmpty";

function Details(props) {
  const divImgRef = useRef();
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = cart.reduce((result, curr) => {
      return result + curr.price * curr.count;
    }, 0);
    setTotal(getTotal);
  }, [cart]);

  const redution = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count <= 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };
  const removeProduct = (id) => {
    const newCart = [...cart];
    const index = cart.findIndex((item) => item._id === id);
    newCart.splice(index, 1);
    setCart([...newCart]);
  };
  return (
    <>
      {cart.length <= 0 ? (
        <CartEmpty />
      ) : (
        cart.map((product) => (
          <div className="details cart" key={product._id}>
            <div
              ref={divImgRef}
              className="img-container"
              style={{ backgroundImage: `url(${product.images[0]})` }}
            ></div>
            <div className="box-details">
              <h2 title={product.title}>{product.title}</h2>
              <h3>{product.price}$</h3>
              <Colors colors={product.colors} />
              <Sizes sizes={product.sizes} />
              <p className="description">{product.description}</p>
              <p className="content">{product.content}</p>
              <div className="amount">
                <button className="count" onClick={() => redution(product._id)}>
                  -
                </button>
                <span>{product.count}</span>
                <button className="count" onClick={() => increase(product._id)}>
                  +
                </button>
              </div>

              <div
                className="delete"
                onClick={() => removeProduct(product._id)}
              >
                X
              </div>
            </div>
          </div>
        ))
      )}
      <div className="total">
        <Link to="/payment" className="add-btn">
          Payment
        </Link>
        <h3>Total: ${total}</h3>
      </div>
    </>
  );
}

export default Details;
