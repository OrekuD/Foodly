import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SignInProps {}

const SignIn = (props: SignInProps) => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {},
});
