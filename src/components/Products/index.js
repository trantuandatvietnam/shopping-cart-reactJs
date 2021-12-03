import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Data/DataProvider";
function Products(props) {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <Link to={`/products/${product._id}`} className="card-image">
            <img src={product.images[0]} alt="" />
          </Link>
          <div className="box">
            <h3 title={product.title}>
              <Link to={`/products/${product._id}`} href="/">
                {product.title}
              </Link>
            </h3>
            <h4>Price: {product.price}$</h4>
            <button
              onClick={() => {
                addCart(product._id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
