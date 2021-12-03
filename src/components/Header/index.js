import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../Data/DataProvider";
import Menu from "../svg/bars-solid.svg";
import Cart from "../svg/cart.svg";
import Close from "../svg/times-solid.svg";

function Header() {
  const [showBar, setShowBar] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const handleOnClickMenu = () => {
    setShowBar(!showBar);
  };
  const handleOnClickClose = () => {
    setShowBar(false);
  };
  useEffect(() => {
    const getTotalCart = cart.reduce((total, item) => {
      return total + item.count;
    }, 0)
    setTotalCart(getTotalCart);
  }, [cart])
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <a href="/">Fashion</a>
        </h1>
      </div>
      <ul style={{ right: showBar ? "0" : "-100%" }}>
        <li>
          <NavLink to="home" href="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="products" href="/">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="about" href="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" href="/">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="login" href="/">
            Login/ Register
          </NavLink>
        </li>
        <li className="hide-bar" onClick={handleOnClickClose}>
          <img src={Close} alt="close" width="30" className="menu" />
        </li>
      </ul>
      <div className="menu">
        <img onClick={handleOnClickMenu} src={Menu} alt="menu" width="30" />
      </div>
      <div className="cart-icon">
        <span> {totalCart} </span>
        <Link to="cart" className="cart">
          <img src={Cart} alt="" />
        </Link>
      </div>
    </header>
  );
}
export default Header;
