import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { white, grey, red, green, lightgrey } from "../../constants/Colors";
import { StackHeader, Text, Button } from "../../components";
import { Eye, CloseEye } from "../../components/Svgs";
import { Ionicons } from "@expo/vector-icons";

const PasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, "Password is too short")
    .max(12, "Password is too long")
    .required(),
  newPassword: Yup.string()
    .min(6, "Password is too short")
    .max(12, "Password is too long")
    .required(),
  confirmPassword: Yup.string()
    .min(6, "Password is too short")
    .max(12, "Password is too long")
    .required(),
});

const ChangePassword = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ChangePassword">) => {
  const { setTabbarState, addUserDetails, user } = useAppContext();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: PasswordSchema,
    onSubmit: (values) => {
      if (values.oldPassword !== user.password) {
        Alert.alert("Error", "Old password is incorrect");
        return;
      }
      if (values.newPassword !== values.confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
      }
      if (
        values.oldPassword === user.password &&
        values.newPassword === values.confirmPassword
      ) {
        addUserDetails({
          email: user.email,
          password: values.newPassword,
          fullname: user.fullname,
          phone: user.phone,
        });
        Keyboard.dismiss();
        setPasswordVisible(false);
        Alert.alert("Success", "Password has been reset");
      }
    },
  });

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <StackHeader title="Change Password" onPress={navigation.goBack} />
      <View style={styles.content}>
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
                <Eye size={18} color={grey} />
              ) : (
                <CloseEye size={20} color={grey} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={!passwordVisible}
              style={styles.textInput}
              onChangeText={handleChange("oldPassword")}
              onBlur={handleBlur("oldPassword")}
              value={values.oldPassword}
            />
            {touched.oldPassword ? (
              errors.oldPassword ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
          </View>
        </View>
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
                <Eye size={18} color={grey} />
              ) : (
                <CloseEye size={20} color={grey} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={!passwordVisible}
              style={styles.textInput}
              onChangeText={handleChange("newPassword")}
              onBlur={handleBlur("newPassword")}
              value={values.newPassword}
            />
            {touched.newPassword ? (
              errors.newPassword ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
          </View>
        </View>
        <View style={styles.section}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              variant="caption"
              style={{ textTransform: "uppercase", letterSpacing: 1 }}
              color="grey"
            >
              new password
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <Eye size={18} color={grey} />
              ) : (
                <CloseEye size={20} color={grey} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={!passwordVisible}
              style={styles.textInput}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
            />
            {touched.confirmPassword ? (
              errors.confirmPassword ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
          </View>
        </View>
        <Button label="change password" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    padding: 20,
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
});
