import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface GetStartedProps {}

const GetStarted = (props: GetStartedProps) => {
  return (
    <View style={styles.container}>
      <Text>GetStarted</Text>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {},
});
