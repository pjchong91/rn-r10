import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import Styles from "./../../config/styles.js";
import ConductItem from "./../../components/ConductItem/ConductItem";

const About = conducts => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("./../../assets/r10_logo.png")}
          style={styles.logo}
        />
        <View style={styles.divider} />
        <Text style={[styles.bodyText, Styles.font]}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>

        <Text style={[styles.headerText, Styles.font]}>Date & Venue </Text>

        <Text style={[styles.bodyText, Styles.font]}>
          The R10 conference will take place on September 18, 2018 in Vancouver,
          BC.
        </Text>

        <Text style={[styles.headerText, Styles.font]}>Code of Conduct</Text>

        {conducts.conducts.map(conduct => (
          <ConductItem conduct={conduct} key={conduct.id} />
        ))}

        <View style={styles.divider} />
        <Text style={[styles.bodyText, Styles.font]}>© RED Academy 2018</Text>
      </ScrollView>
    </View>
  );
};

export default About;
