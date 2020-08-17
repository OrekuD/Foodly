import * as React from "react";
import { View, StyleSheet } from "react-native";
import { StackHeader, Text } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { white } from "../constants/Colors";

const SignIn = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SignIn">) => {
  return (
    <View style={styles.container}>
      <StackHeader title="Sign In" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Text variant="title">Welcome to Foodly</Text>
        <Text
          variant="body"
          color="grey"
          style={{ marginVertical: 5, width: "75%" }}
        >
          Enter your Phone number or email address to sign in. Enjoy your food
          :)
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
