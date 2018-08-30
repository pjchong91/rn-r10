import LinearGradient from "react-native-linear-gradient";
import React from "react";

const Gradient = props => {
  return (
    <LinearGradient
      colors={["#9963ea", "#8797D6"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={{
        height: 50,
        width: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 50
      }}
    >
      {props.children}
    </LinearGradient>
  );
};

export default Gradient;
