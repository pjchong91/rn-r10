import React, { Fragment } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const GradientButton = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#9963ea", "#8797D6"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <TouchableOpacity />
    {/* <Header {...props} /> */}
  </View>
);

const Session = ({ navigation, session, favIds }) => {
  const sessionData = session.Session;
  const allFavs = [];
  favIds.favIds.map(item => allFavs.push(item.id));
  const faved = allFavs.includes(sessionData.id);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.heartAlign}>
          <Text style={styles.sessionLocation}>{sessionData.location}</Text>
          {!faved ? <Text /> : <Icon name="md-heart" size={18} color="red" />}
        </View>
        <Text style={styles.sessionTitle}>{sessionData.title}</Text>
        <Text style={styles.sessionTime}>
          {moment(new Date(sessionData.startTime)).format("hh:mm A")}
        </Text>
        <Text>{sessionData.description}</Text>
        {!sessionData.speaker ? (
          <Text />
        ) : (
          <Fragment>
            <Text style={styles.presentorContainer}>Presented by:</Text>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Speaker", {
                  speakerId: sessionData.speaker.id
                });
              }}
            >
              <View style={styles.presentor}>
                {!sessionData.speaker.image ? (
                  <Text />
                ) : (
                  <Image
                    source={{ uri: sessionData.speaker.image }}
                    style={styles.presentorIcon}
                  />
                )}

                <Text style={styles.presentorName}>
                  {sessionData.speaker.name}
                </Text>
              </View>
            </TouchableHighlight>
          </Fragment>
        )}

        <View style={styles.divider} />

        <LinearGradient
          colors={["#9963ea", "#8797D6"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={{
            height: 50,
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {!faved ? (
            <TouchableOpacity
              onPress={() => {
                favIds.addFav(sessionData.id);
              }}
              style={styles.buttonTextContainer}
            >
              <Text style={styles.buttonText}>Add to Favs</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                favIds.removeFav(sessionData.id);
              }}
              style={styles.buttonTextContainer}
            >
              <Text style={styles.buttonText}>Remove from Favs</Text>
            </TouchableOpacity>
          )}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Session;
