import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Colors from "../Colors";
import { DataContext } from "../Data/DataProvider";
import DetailThumb from "../DetailThumbs";
import Sizes from "../Sizes";

function Details(props) {
  const { productsId } = useParams();
  const divImgRef = useRef();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const index = products.findIndex((product) => product._id === productsId);
  const [imgCurrent, setImgCurrent] = useState(products[index].images[0]);
  const handleClickImage = (img) => {
    setImgCurrent(img);
  };
  const handleOnMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    divImgRef.current.style.backgroundPosition = `${x}% ${y}%`;
  };
  return (
    <div className="details">
      <div
        ref={divImgRef}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={() =>
          (divImgRef.current.style.backgroundPosition = "center")
        }
        className="img-container"
        style={{ backgroundImage: `url(${imgCurrent})` }}
      />
      <div className="box-details">
        <h2 title={products[index].title}>{products[index].title}</h2>
        <h3>{products[index].price}$</h3>
        <Colors colors={products[index].colors} />
        <Sizes sizes={products[index].sizes} />
        <p className="description">{products[index].description}</p>
        <p className="content">{products[index].content}</p>
        <DetailThumb
          imgCurrent={imgCurrent}
          images={products[index].images}
          onClickThumbImg={handleClickImage}
        />
        <Link
          className="add-btn"
          to="/cart"
          onClick={() => {
            addCart(products[index]._id);
          }}
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}

export default Details;
