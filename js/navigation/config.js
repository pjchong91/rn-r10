import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

const MenuIcon = navigation => (
  <Icon
    name={Platform.select({
      ios: "ios-menu",
      android: "md-menu"
    })}
    size={30}
    color="#FFF"
    style={{ padding: 20 }}
    onPress={() => navigation.openDrawer()}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerLeft: Platform.select({
    ios: "",
    android: MenuIcon(navigation)
  }),
  headerTintColor: "#FFF",
  headerTitleStyle: {
    fontWeight: "600",
    fontFamily: Platform.select({
      ios: "Montserrat",
      android: "Montserrat-Regular"
    })
  }
});
