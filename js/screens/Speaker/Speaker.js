import React, { Fragment } from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  Image,
  Button,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import Moment from "react-moment";
import moment from "moment";
import { NavigationActions } from "react-navigation";

const backAction = NavigationActions.back({
  key: null
});

const Speaker = ({ navigation, sessionId }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default Speaker;
