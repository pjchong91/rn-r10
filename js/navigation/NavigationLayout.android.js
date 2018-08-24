import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { sharedNavigationOptions } from "./config";
import { Platform } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import About from "./../screens/About";
import Schedule from "./../screens/Schedule";
import Favs from "./../screens/Favs";
import Map from "./../screens/Map";
import Session from "./../screens/Session";
import Speaker from "./../screens/Speaker";

const aboutStack = createStackNavigator(
  {
    About: {
      screen: About
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const scheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule
    },
    Session: {
      screen: Session
    }
    // Speaker: {
    //   screen: Speaker
    // }
  },
  {
    // mode: "modal",
    initialRouteName: "Schedule",
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const favsStack = createStackNavigator(
  {
    Favs: {
      screen: Favs
    },
    Session: {
      screen: Session
    }
  },
  {
    initialRouteName: "Favs",

    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const mapStack = createStackNavigator(
  {
    Map: {
      screen: Map
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

// const speakerStack = createStackNavigator(
//   {
//     Session: {
//       screen: Session
//     },
//     Speaker: {
//       screen: Speaker
//     }
//   },
//   {
//     initialRouteName: "Session",
//     mode: "modal",
//     navigationOptions: ({ navigation }) => ({
//       ...sharedNavigationOptions(navigation)
//     })
//   }
// );

const renderIcon = (iconName, tintColor) => {
  return <Icon name={iconName} size={25} color={tintColor} />;
};
mapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-map", tintColor),
  headerLeft: ({ navigation }) => MenuIcon(navigation)
};
scheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-calendar", tintColor),
  headerLeft: ({ navigation }) => MenuIcon(navigation)
};
aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-information-circle", tintColor),
  headerLeft: ({ navigation }) => MenuIcon(navigation)
};
//TODO : ACCOUNT FOR EMPTYS
favsStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-heart", tintColor),
  headerLeft: ({ navigation }) => MenuIcon(navigation)
};

const MenuIcon = ({ navigation }) => (
  <Icon
    name="three-bars"
    size={30}
    color="#000"
    onPress={() => navigation.navigate("DrawerOpen")}
  />
);

export default createDrawerNavigator({
  Schedule: scheduleStack,
  Map: mapStack,
  Favs: favsStack,
  About: aboutStack
});
