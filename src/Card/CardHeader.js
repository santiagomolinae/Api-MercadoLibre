import React from "react";
import "./Card.css";

export default class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = {
        backgroundImage: "url(" + image + ")"
      };
      return (
        <header style={style} id={image} className="card-header"></header>
      );
    }
}