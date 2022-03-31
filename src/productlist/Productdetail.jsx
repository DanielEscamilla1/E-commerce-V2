import React, { useState } from "react";
import ProductData from "../data/products.json";

const Productlist = () => {
  const [productinfo,setData] = useState([ProductData]);

  return (
    <>
      {ProductData.map((productinfo, index) => {
        return (
          <div className="card">
            <img
              src={productinfo.productImg}
              className="card_image"
              alt="jordan1"
            />
            <p className="card_title text-medium">{productinfo.title}</p>
            <div className="card_info">
              <p className="text-medium">{productinfo.content}</p>
              <p className="card_price text-medium">{productinfo.releaseDate}</p>
              <p className="card_price text-medium">{productinfo.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Productlist;
