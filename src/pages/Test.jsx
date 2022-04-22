import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductData from "../productlist/Productdata";

const Test = () => {
  const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState([])

  useEffect(() => {
    axios.get("https://ecom-dbsql.herokuapp.com/api/products").then((res) => {
      setProducts(res.data);
      // console.log(res);
      // this.setState({ products: res.data });
    });
  });
  console.log(products);

  return (
    <div className="productPage">
      <h1 className="productsH1">Products</h1>
      {/* <Filter /> */}
      {/* <button onClick={this.sortFun}>Sort</button> */}
      <select
        className="filterSelector"
        name="filter"
        id="priceSelect"
        // onChange={this.sortFun}
      >
        <option value="10000">ALL</option>
        <option value="200">less than 200</option>
        <option value="500">less than 500</option>
        <option value="800">less than 800</option>
      </select>
      <main>
        <div className="cards">
          <ProductData products={products} />
        </div>
      </main>
    </div>
  );
};

export default Test;
