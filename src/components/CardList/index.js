import { Component } from "react";
import Card from "../Card";

export default class CardList extends Component {
  render() {
    const { list } = this.props;

    return <Card cardList={list} />;
  }
}
