import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import Styles from "./../../config/styles.js";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import Gradient from "./../../components/Gradient/Gradient";

const Speaker = ({ navigation, data }) => {
  let speaker = data;
  handleClick = () => {
    Linking.canOpenURL(speaker.url).then(supported => {
      if (supported) {
        Linking.openURL(speaker.url);
      } else {
        console.log("Don't know how to open URI: " + speaker.url);
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
        <Text />
      </View>
      <ScrollView>
        <View style={styles.speakerModal}>
          <Image source={{ uri: speaker.image }} style={styles.speakerImage} />
          <Text style={[styles.speakerName, Styles.font]}>{speaker.name}</Text>
          <Text style={[styles.speakerBio, Styles.font]}>{speaker.bio}</Text>

          <Gradient>
            <TouchableOpacity
              onPress={() => this.handleClick()}
              style={styles.buttonTextContainer}
            >
              <Text style={[Styles.font, styles.buttonText]}>
                Read More on Wikipedia
              </Text>
            </TouchableOpacity>
          </Gradient>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  navigation: PropTypes.object.isRequired
};

export default Speaker;
