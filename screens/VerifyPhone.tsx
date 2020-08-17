import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface VerifyPhoneProps {}

const VerifyPhone = (props: VerifyPhoneProps) => {
  return (
    <View style={styles.container}>
      <Text>VerifyPhone</Text>
    </View>
  );
};

export default VerifyPhone;

const styles = StyleSheet.create({
  container: {},
});
