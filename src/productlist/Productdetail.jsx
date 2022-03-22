import React from "react";
import ProductData from "../data/products.json";

const Productlist = () => {
  return (
    <>
      {ProductData.map((productinfo, index) => {
        return (
          <div>
            <div className="product1">
            <h2 className="producth2">{productinfo.title}</h2>
            <img src={productinfo.productImg} className="resourcesimages" alt="jordan1" />
            <h3 className="producth3">{productinfo.content}</h3>
            <p>{productinfo.price}</p>
            <p>{productinfo.releaseDate}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Productlist;
