import React from "react";
import { Text, View, ScrollView, SectionList } from "react-native";
import styles from "./styles";
import Moment from "react-moment";
import moment from "moment";

const Session = sessions => {
  console.log(sessions);
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SectionList
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
        />
      </ScrollView>
    </View>
  );
};

export default Session;
