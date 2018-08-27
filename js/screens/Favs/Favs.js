import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import SectionListCustom from "../../components/SectionListCustom/SectionListCustom";

const Favs = ({ sessions, navigation, favIds }) => {
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    // <View style={styles.container}>
    <ScrollView style={styles.container}>
      <SectionListCustom
        sessions={sessions}
        navigation={navigation}
        favIds={favIds}
      />
    </ScrollView>
    // </View>
  );
};

export default Favs;
