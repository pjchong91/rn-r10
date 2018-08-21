import React from "react-navigation";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

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

export default createBottomTabNavigator({
  Schedule: scheduleStack,
  Map: mapStack,
  Favs: favsStack,
  About: aboutStack
});
