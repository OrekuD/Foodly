import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SetupLocationProps {}

const SetupLocation = (props: SetupLocationProps) => {
  return (
    <View style={styles.container}>
      <Text>SetupLocation</Text>
    </View>
  );
};

export default SetupLocation;

const styles = StyleSheet.create({
  container: {},
});
