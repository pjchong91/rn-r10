import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import Moment from "react-moment";
import moment from "moment";
import { withNavigation } from "react-navigation";

const Schedule = (sessions, navigation) => {
  // console.log();

  console.log(navigation, "schedule navigation");
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  _onPressButton = item => {
    this.props.navigation.navigate("About");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {console.log(navigation)}
        <SectionList
          renderItem={({ item, index, section }) => (
            <TouchableHighlight
              key={item.id}
              onPress={() =>
                navigation.navigate("Session", {
                  itemId: item.id
                })
              }
            >
              <View key={item.id} style={styles.sessionText}>
                <Text style={styles.sessionTitle}>{item.title}</Text>
                <Text style={styles.sessionLocation}>{item.location}</Text>
              </View>
            </TouchableHighlight>
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

export default withNavigation(Schedule);
