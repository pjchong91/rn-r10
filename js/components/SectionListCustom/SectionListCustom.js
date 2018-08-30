import React from "react";
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./../../config/styles.js";
import PropTypes from "prop-types";

renderSeparator = () => {
  return <View style={styles.separator} />;
};

const SectionListCustom = ({ sessions, navigation, favIds }) => (
  <SectionList
    renderItem={({ item, index, section }) => (
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          item.description
            ? navigation.navigate("Session", {
                itemId: item.id
              })
            : ""
        }
      >
        <View key={item.id} style={styles.sessionText}>
          <Text style={[styles.sessionTitle, Styles.font]}>{item.title}</Text>
          <View style={styles.heartAlign}>
            <Text style={[styles.sessionLocation, Styles.font]}>
              {item.location}
            </Text>
            {!favIds.includes(item.id) ? (
              <Text />
            ) : (
              <Icon
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={18}
                color="red"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    )}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={[styles.timeHeader, Styles.font]}>
        {moment(new Date(title)).format("hh:mm A")}
      </Text>
    )}
    sections={sessions}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={this.renderSeparator}
  />
);

SectionListCustom.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  navigation: PropTypes.object.isRequired,
  favIds: PropTypes.array.isRequired
};

export default SectionListCustom;
