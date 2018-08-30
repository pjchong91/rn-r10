import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import styles from "./styles";
import Styles from "./../../config/styles.js";

const LoadingIndicator = () => (
  <View style={styles.loaderStyles}>
    <ActivityIndicator size="large" color="#9963ea" />
    <Text style={[styles.loaderText, Styles.font]}>Loading ... </Text>
  </View>
);

export default LoadingIndicator;
