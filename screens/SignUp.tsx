import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StackHeader, Text, Form } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { white } from "../constants/Colors";

const SignUp = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SignUp">) => {
  return (
    <ScrollView style={styles.container}>
      <StackHeader title="Sign Up" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Text variant="title">Create Account</Text>
        <Text
          variant="body"
          color="grey"
          style={{ marginVertical: 5, width: "75%" }}
        >
          Enter your Name, Email and Password
        </Text>
        <View style={styles.row}>
          <Text variant="body" color="grey">
            to sign up.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text variant="body" color="green">
              {" "}
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
        <Form signup navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
});
