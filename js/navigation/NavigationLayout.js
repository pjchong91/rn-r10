import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import About from "./../screens/About";
import Schedule from "./../screens/Schedule";
import Favs from "./../screens/Favs";
import Map from "./../screens/Map";

const aboutStack = createStackNavigator({
  About: {
    screen: About
  }
});

const scheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
});

const favsStack = createStackNavigator({
  Favs: {
    screen: Favs
  }
});

const mapStack = createStackNavigator({
  Map: {
    screen: Map
  }
});

export default createBottomTabNavigator(
  {
    Schedule: scheduleStack,
    Map: mapStack,
    Favs: favsStack,
    About: aboutStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        }
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        }
        if (routeName === "Favs") {
          iconName = `ios-heart${focused ? "" : "-empty"}`;
        }
        if (routeName === "Map") {
          iconName = `ios-map`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
