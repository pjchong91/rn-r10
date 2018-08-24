import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
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

const MenuIcon = ({ navigate }) => (
  <Icon
    name="three-bars"
    size={30}
    color="#000"
    onPress={() => navigate("DrawerOpen")}
  />
);

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
        const heartIcon = Platform.select({
          ios: "ios-heart",

          android: "md-heart"
        });
        if (routeName === "About") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        }
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        }
        if (routeName === "Favs") {
          iconName = `${heartIcon}${focused ? "" : "-empty"}`;
        }
        if (routeName === "Map") {
          iconName = `ios-map`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
      headerLeft: MenuIcon(navigation)
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontSize: 10,
        fontFamily: "Montserrat"
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
