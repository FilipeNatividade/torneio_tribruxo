import { Component } from "react";
import "./style.css";

export default class Card extends Component {
  render() {
    const { cardList } = this.props;

    return (
      <div className="container">
        {cardList.map((crr, idx) => (
          <div className="cards" key={idx}>
            <div className="div-h1">
              {" "}
              <h1>{crr.name}</h1>
            </div>
            <div className="div-img">
              <img src={crr.image}></img>
            </div>
            <div className="div-h2">
              <h2>{crr.house}</h2>
              <h2>{crr.species}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
