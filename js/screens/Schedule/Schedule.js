import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import SectionListCustom from "../../components/SectionListCustom/SectionListCustom";

const Schedule = ({ sessions, navigation, favIds }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SectionListCustom
          sessions={sessions}
          navigation={navigation}
          favIds={favIds}
        />
      </ScrollView>
    </View>
  );
};

export default Schedule;
