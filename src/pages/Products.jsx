import React from "react";
// import Productlist from "../productlist/Productdetail";
// import axios from "axios";
import ProductData from "../productlist/Productdata";

const Products = () => {
  return (
    <div className="productPage">
      <h1 className="productsH1">Products</h1>
      <main>
        <div className="cards">
          <ProductData />
        </div>
      </main>
    </div>
  );
};

export default Products;
