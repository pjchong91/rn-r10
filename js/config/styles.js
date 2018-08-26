//GLOBAL STYLES
import { StyleSheet, Platform } from "react-native";

const Styles = StyleSheet.create({
  font: {
    fontFamily: Platform.select({
      ios: "Montserrat",
      android: "Montserrat-Regular"
    })
  }
});

export default Styles;
