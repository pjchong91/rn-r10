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
import { Linking } from "react-native";

const Speaker = ({ navigation, data }) => {
  handleClick = () => {
    Linking.canOpenURL(data.Speaker.url).then(supported => {
      if (supported) {
        Linking.openURL(data.Speaker.url);
      } else {
        console.log("Don't know how to open URI: " + data.Speaker.url);
      }
    });
  };

  console.log(data, "speaker");
  console.log(data.speaker);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: data.Speaker.image }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <Text>{data.Speaker.name}</Text>
      <Text>{data.Speaker.bio}</Text>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button
        onPress={() => this.handleClick()}
        title="Read More on Wikipedia"
      />
    </View>
  );
};

export default Speaker;
