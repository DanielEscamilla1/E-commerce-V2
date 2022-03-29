import React from "react";
import axios from "axios";

export default class ProductData extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/api/products").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }
  render() {
    return (
      <>
        {this.state.products.map(product => {
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
}
