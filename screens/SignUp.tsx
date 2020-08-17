import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SignUpProps {}

const SignUp = (props: SignUpProps) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {},
});
