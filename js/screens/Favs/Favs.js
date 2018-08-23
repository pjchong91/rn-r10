import React from "react";
import {
  Text,
  View,
  ScrollView,
  SectionList,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import moment from "moment";

const Favs = ({ sessions, navigation, favIds }) => {
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  console.log(sessions, "from favs");
  favIds.favIds.map(item => console.log(item.id));

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Sup</Text>
        <Text>Sup</Text>
        <Text>Sup</Text>
        <Text>Sup</Text>
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
          sections={sessions}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ScrollView>
    </View>
  );
};

export default Favs;
