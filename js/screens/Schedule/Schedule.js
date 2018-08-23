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
import SectionListCustom from "../../components/SectionListCustom/SectionListCustom";
// import { withNavigation } from "react-navigation";

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
