import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import Styles from "./../../config/styles.js";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

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
            name={Platform.select({
              ios: "ios-close",
              android: "md-close"
            })}
            size={25}
            color="white"
          />
        </TouchableHighlight>
        <Text style={[styles.speakerHeaderText, Styles.font]}>
          About the Speaker
        </Text>
      </View>
      <ScrollView>
        <View style={styles.speakerModal}>
          <Image
            source={{ uri: data.Speaker.image }}
            style={styles.speakerImage}
          />
          <Text style={[styles.speakerName, Styles.font]}>
            {data.Speaker.name}
          </Text>
          <Text style={[styles.speakerBio, Styles.font]}>
            {data.Speaker.bio}
          </Text>
          <LinearGradient
            colors={["#9963ea", "#8797D6"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={{
              height: 50,
              width: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 50
            }}
          >
            <TouchableOpacity
              onPress={() => this.handleClick()}
              style={styles.buttonTextContainer}
            >
              <Text style={[Styles.font, styles.buttonText]}>
                Read More on Wikipedia
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;
