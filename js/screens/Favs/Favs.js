import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import SectionListCustom from "../../components/SectionListCustom/SectionListCustom";

const Favs = ({ sessions, navigation, favIds }) => {
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <ScrollView>
      <SectionListCustom
        sessions={sessions}
        navigation={navigation}
        favIds={favIds}
      />
    </ScrollView>
  );
};

export default Favs;
