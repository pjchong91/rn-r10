import { createStackNavigator } from "react-navigation";
import About from "./../screens/About";
import Schedule from "./../screens/Schedule";
import Favs from "./../screens/Favs";
import Map from "./../screens/Map";

import NavigationLayout from "./NavigationLayout";

export default createStackNavigator(
  {
    //   About: {
    //     screen: About
    //   },
    //   Schedule: {
    //     screen: Schedule
    //   },
    //   Favs: {
    //     screen: Favs
    //   },
    //   Map: {
    //     screen: Map
    //   }
    NavigationLayout
  },
  {
    headerMode: "none"
  }
);
