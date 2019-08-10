import React from "react";
import "./Card.css";

export default class extends React.Component {
  render() {
      return (
        <div className="card-body">
          <h2>${this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
          <p className="body-content">Vendedor: {this.props.seller}</p>
        </div>
      );
  }
}