import React from "react";
import { Text, View, ScrollView, SectionList } from "react-native";
import styles from "./styles";

const Schedule = sessions => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SectionList
          renderItem={({ item, index, section }) => (
            <View key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          sections={sessions.sessions}
          keyExtractor={item => item.id}
        />

        <View style={styles.divider} />
        <Text style={styles.bodyText}>© RED Academy 2018</Text>
      </ScrollView>
    </View>
  );
};

export default Schedule;
