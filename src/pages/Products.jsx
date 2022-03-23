import React from "react";
import Productlist from "../productlist/Productdetail";

const Products = () => {
  return (
    <div className="productPage">
      <h1 className="productsH1">Products</h1>
      <main>
        <div className="cards">
          <Productlist />
        </div>
      </main>
    </div>
  );
};

export default Products;
