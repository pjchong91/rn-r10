import React, { Fragment } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import Styles from "./../../config/styles.js";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import Gradient from "./../../components/Gradient/Gradient";

const Session = ({ navigation, session, favIds }) => {
  const sessionData = session;
  const allFavs = [];
  favIds.favIds.map(item => allFavs.push(item.id));
  const faved = allFavs.includes(sessionData.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heartAlign}>
        <Text style={[styles.sessionLocation, Styles.font]}>
          {sessionData.location}
        </Text>
        {!faved ? (
          <Text />
        ) : (
          <Icon
            name={Platform.select({ ios: "ios-heart", android: "md-heart" })}
            size={18}
            color="red"
          />
        )}
      </View>
      <Text style={[styles.sessionTitle, Styles.font]}>
        {sessionData.title}
      </Text>
      <Text style={[styles.sessionTime, Styles.font]}>
        {moment(new Date(sessionData.startTime)).format("hh:mm A")}
      </Text>
      <Text style={[styles.sessionDescription, Styles.font]}>
        {sessionData.description}
      </Text>
      {!sessionData.speaker ? (
        <Text />
      ) : (
        <Fragment>
          <Text style={[styles.presentorContainer, Styles.font]}>
            Presented by:
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Speaker", {
                speakerId: sessionData.speaker.id
              });
            }}
          >
            <View style={[styles.presentor, Styles.font]}>
              {!sessionData.speaker.image ? (
                <Text />
              ) : (
                <Image
                  source={{ uri: sessionData.speaker.image }}
                  style={styles.presentorIcon}
                />
              )}

              <Text style={[styles.presentorName, Styles.font]}>
                {sessionData.speaker.name}
              </Text>
            </View>
          </TouchableOpacity>
        </Fragment>
      )}

      <View style={styles.divider} />

      <Gradient>
        {!faved ? (
          <TouchableOpacity
            onPress={() => {
              favIds.addFav(sessionData.id);
            }}
            style={styles.buttonTextContainer}
          >
            <Text style={[styles.buttonText, Styles.font]}>Add to Favs</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              favIds.removeFav(sessionData.id);
            }}
            style={styles.buttonTextContainer}
          >
            <Text style={[styles.buttonText, Styles.font]}>
              Remove from Favs
            </Text>
          </TouchableOpacity>
        )}
      </Gradient>
    </ScrollView>
  );
};

Session.propTypes = {
  session: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speaker: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  }).isRequired,
  navigation: PropTypes.object.isRequired,
  favIds: PropTypes.object.isRequired
};

export default Session;
