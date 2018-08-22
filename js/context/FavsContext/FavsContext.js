import React, { createContext, Component } from "react";
import { addFav, removeFav, getFavs } from "./../../config/models.js";

const FavsContext = createContext();

//we create FavsProvider class
class FavsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favIds: []
    };
  }

  componentDidMount() {
    //You don't need to bind this function because it is an arrow function
    this.getFavedSessionIds();
  }

  getFavedSessionIds = () => {
    //Need a try catch for when you attempt to access a database
    try {
      this.setState({ favIds: getFavs() });
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  addFavSession = sessionId => {
    try {
      addFav(sessionId);

      this.getFavedSessionIds();
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  removeFavSession = sessionId => {
    try {
      removeFav(sessionId);

      this.getFavedSessionIds();
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  render() {
    return (
      <FavsContext.Provider
        value={{
          ...this.state,
          getFavs: this.getFavedSessionIds,
          addFav: this.addFavSession,
          removeFav: this.removeFavSession
        }}
      >
        {this.props.children}
        {/* TODO: REVISIT THIS */}
      </FavsContext.Provider>
    );
  }
}

export default FavsContext;
export { FavsProvider };
