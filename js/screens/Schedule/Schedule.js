import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import SectionListCustom from "../../components/SectionListCustom/SectionListCustom";
import PropTypes from "prop-types";
const Schedule = ({ sessions, navigation, favIds }) => {
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

Schedule.propTypes = {
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

export default Schedule;
