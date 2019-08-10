import React, { useEffect, useState } from "react";
import "./Card/Card.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./SearchBar";
import CardHeader from "./Card/CardHeader";
import CardBody from "./Card/CardBody";


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
      listSeller: []
    };
  }

  getProductsList = information => {
    
    axios
      .get(`https://api.mercadolibre.com/sites/MCO/search?q=${information}`)
      .then(res => {
        this.setState({ listProducts: res.data.results });
      }).catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <SearchBar getProductsList={this.getProductsList} />
        <div className="container">
          <div className="row">
            {this.state.listProducts.map(products => (
              <div className="col-md-4">
                <article className="card">
                  <CardHeader image={products.thumbnail} />
                  <CardBody
                    key={products.id}
                    title={products.price.toLocaleString()}
                    text={products.title}
                    seller={products.seller.id}
                  />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;