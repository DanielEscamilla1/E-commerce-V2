import { render } from "@testing-library/react";
import React from "react";
// import Productlist from "../productlist/Productdetail";
import axios from "axios";
// import Filter from "../components/Filter";
import ProductData from "../productlist/Productdata";

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/products").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }


  sortFun = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    const result = this.state.products.filter(product => product.price < e.target.value);
    this.setState({ products: result })
    console.log(this.state.products);
  }
  render() {
    return (
      <div className="productPage">
        <h1 className="productsH1">Products</h1>
        {/* <Filter /> */}
        {/* <button onClick={this.sortFun}>Sort</button> */}
        <select name="filter" id="priceSelect" onChange={this.sortFun}>
          <option value="200">less than 200</option>
          <option value="500">less than 500</option>
          <option value="800">less than 800</option>
          <option value="10000">ALL</option>
        </select>
        <main>
          <div className="cards">
            <ProductData products={this.state.products} />
          </div>
        </main>
      </div>
    );
  }
}
