import React, { Fragment } from "react";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

renderSeparator = () => {
  return <View style={styles.separator} />;
};

const SectionListCustom = ({ sessions, navigation, favIds }) => (
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
          {console.log(favIds, "favs???")}
          <Text style={styles.sessionTitle}>{item.title}</Text>
          <View style={styles.heartAlign}>
            <Text style={styles.sessionLocation}>{item.location}</Text>
            {!favIds.includes(item.id) ? (
              <Text />
            ) : (
              <Icon name="md-heart" size={18} color="red" />
            )}
          </View>
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
);

export default SectionListCustom;
