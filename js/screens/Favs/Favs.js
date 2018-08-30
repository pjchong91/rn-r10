import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import SectionListCustom from "../../components/SectionListCustom/SectionListCustom";
import PropTypes from "prop-types";

const Favs = ({ sessions, navigation, favIds }) => {
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <ScrollView style={styles.container}>
      <SectionListCustom
        sessions={sessions}
        navigation={navigation}
        favIds={favIds}
      />
    </ScrollView>
  );
};

Favs.propTypes = {
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

export default Favs;
