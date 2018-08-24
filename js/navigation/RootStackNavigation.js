import { createStackNavigator } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import Speaker from "./../screens/Speaker";

export default createStackNavigator(
  {
    NavigationLayout,
    Speaker: {
      screen: Speaker
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
