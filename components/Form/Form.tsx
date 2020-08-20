import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Text from "../Text";
import { Ionicons } from "@expo/vector-icons";
import { green, grey, lightgrey, red } from "../../constants/Colors";
import { boolean } from "yup";
import Button from "../Buttons/Button";
import SocialButton from "../Buttons/SocialButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, CloseEye } from "../Svgs";
import { useAppContext } from "../../context/Context";

interface FormProps {
  signup?: boolean;
  navigation?: StackNavigationProp<RootStackParamList, "SignIn" | "SignUp">;
}

const LogInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(12, "Password is too long")
    .required(),
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  fullname: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(12, "Password is too long")
    .required(),
});

const Form = ({ signup, navigation }: FormProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const initialValues = signup
    ? {
        email: "",
        fullname: "",
        password: "",
      }
    : {
        email: "",
        password: "",
      };
  const schema = signup ? SignUpSchema : LogInSchema;
  const { addUserDetails, user } = useAppContext();

  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      navigation?.navigate("GetStarted");
      // console.log(values);
      addUserDetails({
        email: values.email,
        password: values.password,
        fullname: values.fullname,
        phone: user.phone,
      });
    },
  });

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
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange("fullname")}
              onBlur={handleBlur("fullname")}
            />
            {touched.fullname ? (
              errors.fullname ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
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
          <TextInput
            style={styles.textInput}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {touched.email ? (
            errors.email ? (
              <Ionicons name="ios-close" color={red} size={28} />
            ) : (
              <Ionicons name="ios-checkmark" color={green} size={28} />
            )
          ) : null}
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
              <Eye size={20} color={grey} />
            ) : (
              <CloseEye size={20} color={grey} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            secureTextEntry={!passwordVisible}
            style={styles.textInput}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          {touched.password ? (
            errors.password ? (
              <Ionicons name="ios-close" color={red} size={28} />
            ) : (
              <Ionicons name="ios-checkmark" color={green} size={28} />
            )
          ) : null}
        </View>
      </View>
      {!signup && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation?.navigate("ForgotPassword")}
        >
          <Text variant="caption" color="grey" style={{ alignSelf: "center" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.buttonContainer}>
        <Button label={signup ? "sign up" : "sign in"} onPress={handleSubmit} />
      </View>
      {signup ? (
        <Text
          variant="body"
          color="grey"
          style={{ width: "80%", textAlign: "center", alignSelf: "center" }}
        >
          By signing up, you agree to our Terms Conditions & Privacy Policy
        </Text>
      ) : (
        <View style={styles.row}>
          <Text variant="caption" color="grey">
            Don't have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation?.navigate("SignUp")}
          >
            <Text variant="caption" color="green">
              {" "}
              Create new account
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <Text
        variant="body"
        color="grey"
        style={{ alignSelf: "center", marginVertical: 20 }}
      >
        Or
      </Text>
      <SocialButton variant="facebook" navigation={navigation} />
      <SocialButton variant="google" navigation={navigation} />
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
    width: "100%",
    justifyContent: "center",
  },
});
