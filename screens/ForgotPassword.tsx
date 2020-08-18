import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { white, green, lightgrey } from "../constants/Colors";
import { StackHeader, Text, Button } from "../components";
import { Ionicons } from "@expo/vector-icons";

const ForgotPassword = ({
  navigation,
}: StackScreenProps<RootStackParamList, "ForgotPassword">) => {
  const [isResetEmailSent, setIsResetEmailSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  return (
    <View style={styles.container}>
      <StackHeader title="Forgot Password" onPress={navigation.goBack} />
      {isResetEmailSent ? (
        <>
          <Text variant="title">Reset email sent</Text>
          <Text
            variant="body"
            color="grey"
            style={{ marginTop: 5, width: "75%" }}
          >
            We have sent instructions to the email
          </Text>
          <View style={styles.buttonContainer}>
            <Button label="reset password" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            {email}
            <TouchableOpacity activeOpacity={0.8}>
              <Text variant="body" color="green">
                {" "}
                We have sent instructions to the email
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button label="send again" onPress={() => {}} />
          </View>
        </>
      ) : (
        <>
          <Text variant="title">Forgot password</Text>
          <Text
            variant="body"
            color="grey"
            style={{ marginVertical: 5, width: "75%" }}
          >
            Enter your email address and we will send you reset instuctions.
          </Text>
          <View style={styles.section}>
            <Text
              variant="caption"
              style={{ textTransform: "uppercase", letterSpacing: 1 }}
              color="grey"
            >
              email address
            </Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Ionicons name="ios-checkmark" color={green} size={28} />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button label="reset password" onPress={() => {}} />
          </View>
        </>
      )}
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  textInputContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: lightgrey,
    paddingRight: 5,
    paddingTop: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    height: "90%",
    fontSize: 18,
    fontFamily: "SFProDisplay-Regular",
  },
  buttonContainer: {
    marginVertical: 25,
  },
  row: {
    flexDirection: "row",
  },
});
