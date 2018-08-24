import React, { Fragment } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

const Session = ({ navigation, session, favIds }) => {
  const sessionData = session.Session;
  console.log(favIds, "onsession");
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
        {!faved ? (
          <Button
            onPress={() => {
              favIds.addFav(sessionData.id);
            }}
            title="Add to Favs"
          />
        ) : (
          <Button
            onPress={() => {
              favIds.removeFav(sessionData.id);
            }}
            title="Remove from Favs"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Session;
