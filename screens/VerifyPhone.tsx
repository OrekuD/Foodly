import React, { createRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { white, grey } from "../constants/Colors";
import { StackHeader, Button, Text } from "../components";

const VerifyPhone = ({
  navigation,
}: StackScreenProps<RootStackParamList, "VerifyPhone">) => {
  const textInput2 = createRef<TextInput>();
  const textInput3 = createRef<TextInput>();
  const textInput4 = createRef<TextInput>();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <StackHeader title="Login to Foodly" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Text
          variant="title2"
          style={{ alignSelf: "center", marginVertical: 10 }}
        >
          Verify phone number
        </Text>
        <Text
          variant="body"
          color="grey"
          style={{ width: "80%", alignSelf: "center", textAlign: "center" }}
        >
          Enter the 4-Digit code sent to you at +233 012346789
        </Text>
        <View style={styles.textInputsContainer}>
          <TextInput
            style={styles.textInput}
            maxLength={1}
            keyboardType="number-pad"
            autoFocus
            onChangeText={(text) => {
              if (text.length === 1) {
                textInput2.current?.focus();
              }
            }}
          />
          <TextInput
            style={styles.textInput}
            maxLength={1}
            keyboardType="number-pad"
            ref={textInput2}
            onChangeText={(text) => {
              if (text.length === 1) {
                textInput3.current?.focus();
              }
            }}
          />
          <TextInput
            style={styles.textInput}
            maxLength={1}
            keyboardType="number-pad"
            ref={textInput3}
            onChangeText={(text) => {
              if (text.length === 1) {
                textInput4.current?.focus();
              }
            }}
          />
          <TextInput
            style={styles.textInput}
            maxLength={1}
            keyboardType="number-pad"
            ref={textInput4}
            onChangeText={(text) => {
              if (text.length === 1) {
                textInput4.current?.blur();
                setIsCorrect(true);
              }
            }}
          />
        </View>
        <Button
          label="Continue"
          onPress={() => navigation.navigate("SetupLocation")}
        />
        <View style={styles.row}>
          <Text variant="caption" color="grey">
            Didn't receive code?
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text variant="caption" color="green">
              {" "}
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          variant="body"
          color="grey"
          style={{
            alignSelf: "center",
            marginVertical: 10,
            width: "80%",
            textAlign: "center",
          }}
        >
          By signing up, you agree to our Terms Conditions & Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default VerifyPhone;

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
    alignSelf: "center",
    marginVertical: 20,
  },
  textInputsContainer: {
    marginVertical: 25,
    width: "100%",
    height: 60,
    // backgroundColor: "aqua",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  textInput: {
    width: 60,
    height: "90%",
    borderBottomWidth: 1.5,
    borderBottomColor: grey,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "SFProDisplay-Bold",
    backgroundColor: white,
    elevation: 0.5,
  },
});
