import React from "react";
// import axios from "axios";

const ProductData = (props) => {
console.log(props.products)
    return (
      <>
        {props.products.map(product => {
          return (
            <div key={product.id} className="card">
              <img
                src={product.productImg}
                className="card_image"
                alt="jordan1"
              />
              <p className="card_title text-medium">
                {product.title}
              </p>
              <div className="card_info">
                <p className="text-medium">{product.content}</p>
                <p className="card_price text-medium">
                  {product.releaseDate}
                </p>
                <p className="card_price text-medium">
                  {product.price}
                </p>
              </div>
            </div>
          );
        })}
      </>
    );
  }

export default ProductData;