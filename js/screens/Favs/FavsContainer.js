import React, { Component } from "react";
import Favs from "./Favs";

export default class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return <Favs />;
  }
}
