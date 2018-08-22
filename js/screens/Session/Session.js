import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  Image,
  Button
} from "react-native";
import styles from "./styles";
import Moment from "react-moment";
import moment from "moment";

const Session = ({ navigation, session }) => {
  const sessionData = session.Session;
  console.log(sessionData);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{sessionData.location}</Text>
        <Text>{sessionData.title}</Text>
        <Text>{moment(new Date(sessionData.startTime)).format("hh:mm A")}</Text>
        <Text>{sessionData.description}</Text>
        <Text>Presented by:</Text>
        <View style={styles.presentor}>
          <Image
            source={{ uri: sessionData.speaker.image }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text>{sessionData.speaker.name}</Text>
        </View>
        <View style={styles.divider} />
        <Button
          onPress={() => {
            console.log("hello");
          }}
          title="Add to Favs"
        />
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
