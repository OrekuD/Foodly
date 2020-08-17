import React from "react";
import { Text as RNText, View, StyleSheet } from "react-native";

interface TextProps {}

const Text = (props: TextProps) => {
  return <View style={styles.container}></View>;
};

export default Text;

const styles = StyleSheet.create({
  container: {},
});
