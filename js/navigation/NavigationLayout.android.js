import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { sharedNavigationOptions } from "./config";
import Icon from "react-native-vector-icons/Ionicons";
import About from "./../screens/About";
import Schedule from "./../screens/Schedule";
import Favs from "./../screens/Favs";
import Map from "./../screens/Map";
import Session from "./../screens/Session";

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
  },
  {
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

const renderIcon = (iconName, tintColor) => {
  return <Icon name={iconName} size={25} color={tintColor} />;
};
mapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-map", tintColor)
};
scheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-calendar", tintColor)
};
aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-information-circle", tintColor)
};
//TODO : ACCOUNT FOR EMPTYS
favsStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-heart", tintColor)
};

export default createDrawerNavigator(
  {
    Schedule: scheduleStack,
    Map: mapStack,
    Favs: favsStack,
    About: aboutStack
  },
  {
    contentOptions: {
      activeTintColor: "#9963ea"
    }
  }
);
