import React, { Component } from "react";
import Map from "./Map";

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return <Map />;
  }
}
