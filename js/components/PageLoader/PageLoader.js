import React, { Fragment } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import styles from "./styles";

const PageLoader = () => (
  <View style={styles.loaderStyles}>
    <ActivityIndicator size="large" color="#9963ea" />
    <Text style={styles.loaderText}>Loading ... </Text>
  </View>
);

export default PageLoader;
