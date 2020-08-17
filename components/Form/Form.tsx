import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Text from "../Text";
import { Ionicons } from "@expo/vector-icons";
import { green, grey } from "../../constants/Colors";
import { boolean } from "yup";
import Button from "../Buttons/Button";

interface FormProps {
  signup?: boolean;
}

const Form = ({ signup }: FormProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {signup && (
        <View style={styles.section}>
          <Text
            variant="caption"
            style={{ textTransform: "uppercase", letterSpacing: 1 }}
            color="grey"
          >
            full name
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} />
            <Ionicons name="ios-checkmark" color={green} size={28} />
          </View>
        </View>
      )}
      <View style={styles.section}>
        <Text
          variant="caption"
          style={{ textTransform: "uppercase", letterSpacing: 1 }}
          color="grey"
        >
          email address
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} />
          <Ionicons name="ios-checkmark" color={green} size={28} />
        </View>
      </View>
      <View style={styles.section}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            variant="caption"
            style={{ textTransform: "uppercase", letterSpacing: 1 }}
            color="grey"
          >
            password
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <Ionicons name="ios-eye" size={20} color={grey} />
            ) : (
              <Ionicons name="ios-eye-off" size={20} color={grey} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            secureTextEntry={!passwordVisible}
            style={styles.textInput}
          />
          <Ionicons name="ios-checkmark" color={green} size={28} />
        </View>
      </View>
      {!signup && (
        <TouchableOpacity activeOpacity={0.8}>
          <Text variant="caption" color="grey" style={{ alignSelf: "center" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.buttonContainer}>
        <Button label={signup ? "sign up" : "sign in"} onPress={() => {}} />
      </View>
      {signup ? (
        <View></View>
      ) : (
        <View style={styles.row}>
          <Text variant="caption" color="grey">
            Don't have an account?
          </Text>
          <Text variant="caption" color="green">
            {" "}
            Create new account
          </Text>
        </View>
      )}
      <Text
        variant="body"
        color="grey"
        style={{ alignSelf: "center", marginVertical: 20 }}
      >
        Or
      </Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
    borderBottomColor: "#eeeeee",
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
    width: "100%",
    justifyContent: "center",
  },
});
