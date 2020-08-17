import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface WalkthroughProps {}

const Walkthrough = (props: WalkthroughProps) => {
  return (
    <View style={styles.container}>
      <Text>Walkthrough</Text>
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  container: {},
});
