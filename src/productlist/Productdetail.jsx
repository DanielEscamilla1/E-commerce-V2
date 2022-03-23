import React from "react";
import ProductData from "../data/products.json";

const Productlist = () => {
  return (
    // <>
    //   {ProductData.map((productinfo, index) => {
    //     return (
    //       <div>
    //         <div className="product1">
    //         <h2 className="producth2">{productinfo.title}</h2>
    //         <img src={productinfo.productImg} className="resourcesimages" alt="jordan1" />
    //         <h3 className="producth3">{productinfo.content}</h3>
    //         <p>{productinfo.price}</p>
    //         <p>{productinfo.releaseDate}</p>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </>
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
              <p class="card_price text-medium">{productinfo.releaseDate}</p>
              <p class="card_price text-medium">{productinfo.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Productlist;
