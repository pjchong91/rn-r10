import React, { Component } from "react";
import Favs from "./Favs";
import FavsContext from "./../../context/FavsContext";

export default class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return (
      <FavsContext.Consumer>
        {values => {
          console.log(values);
          return <Favs />;
        }}
      </FavsContext.Consumer>
    );
  }
}
