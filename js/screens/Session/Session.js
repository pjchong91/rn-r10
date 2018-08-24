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

const Session = ({ navigation, session, favIds }) => {
  const sessionData = session.Session;
  const allFavs = [];
  favIds.favIds.map(item => allFavs.push(item.id));
  const faved = allFavs.includes(sessionData.id);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{sessionData.location}</Text>
        <Text>{sessionData.title}</Text>
        <Text>{moment(new Date(sessionData.startTime)).format("hh:mm A")}</Text>
        <Text>{sessionData.description}</Text>
        {!sessionData.speaker ? (
          <Text />
        ) : (
          <Fragment>
            <Text>Presented by:</Text>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Speaker", {
                  speakerId: sessionData.speaker.id
                });
                {
                  console.log(sessionData.speaker, "speakerId");
                }
              }}
            >
              <View style={styles.presentor}>
                {!sessionData.speaker.image ? (
                  <Text />
                ) : (
                  <Image
                    source={{ uri: sessionData.speaker.image }}
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                  />
                )}

                <Text>{sessionData.speaker.name}</Text>
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

        {/* <SectionList
          renderItem={({ item, index, section }) => (
            <View key={item.id} style={styles.sessionText}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionLocation}>{item.location}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.timeHeader}>
              {moment(new Date(title)).format("hh:mm A")}
            </Text>
          )}
          sections={sessions.sessions}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        /> */}
      </ScrollView>
    </View>
  );
};

export default Session;
