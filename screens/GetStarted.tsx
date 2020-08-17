import React from "react";
import { View, StyleSheet } from "react-native";
import { white } from "../constants/Colors";
import { StackHeader, Text, Button } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

const GetStarted = ({
  navigation,
}: StackScreenProps<RootStackParamList, "GetStarted">) => {
  return (
    <View style={styles.container}>
      <StackHeader title="Login to Foodly" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Text
          variant="title2"
          style={{ alignSelf: "center", marginVertical: 10 }}
        >
          Get started with Foodly
        </Text>
        <Text
          variant="body"
          color="grey"
          style={{ width: "80%", alignSelf: "center", textAlign: "center" }}
        >
          Enter your phone number to use Foodly and enjoy your food :)
        </Text>
        <Text
          variant="caption"
          color="grey"
          style={{
            textTransform: "uppercase",
            letterSpacing: 1,
            marginTop: 30,
          }}
        >
          phone number
        </Text>
        <Button
          label="sign up"
          onPress={() => navigation.navigate("VerifyPhone")}
        />
      </View>
    </View>
  );
};

export default GetStarted;

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
