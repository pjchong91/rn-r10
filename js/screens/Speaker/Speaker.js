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
import Icon from "react-native-vector-icons/Ionicons";

import { Header } from "react-navigation";

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

  return (
    <View style={styles.container}>
      <View style={styles.speakerHeader}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Icon
            style={styles.headerIcon}
            name="md-close"
            size={25}
            color="white"
          />
        </TouchableHighlight>
        <Text style={styles.speakerHeaderText}>About the Speaker</Text>
      </View>
      <ScrollView>
        <View style={styles.speakerModal}>
          <Image
            source={{ uri: data.Speaker.image }}
            style={styles.speakerImage}
          />
          <Text style={styles.speakerName}>{data.Speaker.name}</Text>
          <Text style={styles.speakerBio}>{data.Speaker.bio}</Text>

          <Button
            onPress={() => this.handleClick()}
            title="Read More on Wikipedia"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;
